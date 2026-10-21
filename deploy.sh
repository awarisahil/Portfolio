#!/usr/bin/env bash
# ============================================================
# Deploy the portfolio to the VPS in one command:
#   ./deploy.sh
#
# Steps: build → upload dist/ → serve on a free port (detached).
# If the app is already deployed, its port is reused.
#
# Requires: npm, ssh, scp (rsync optional). You will be prompted
# for the VPS password unless SSH key auth is set up.
# ============================================================
set -euo pipefail

cd "$(dirname "$0")"

# ---- Config ------------------------------------------------
VPS="root@65.21.8.185"
REMOTE_DIR='~/mycenter'        # on the VPS (root's home)
PORT_LO=2001                   # keep inside the ufw-allowed 2000:2500 range
PORT_HI=2499
SSH_OPTS="-o StrictHostKeyChecking=accept-new -o ConnectTimeout=20"
# ------------------------------------------------------------

echo "==> Building project"
npm run build

echo "==> Uploading dist/ to $VPS:$REMOTE_DIR"
if command -v rsync >/dev/null 2>&1; then
  # rsync keeps the remote dist/ exactly in sync with the local one
  rsync -az --delete -e "ssh $SSH_OPTS" dist/ "$VPS:$REMOTE_DIR/dist/"
else
  ssh $SSH_OPTS "$VPS" "rm -rf $REMOTE_DIR/dist"
  scp $SSH_OPTS -r dist "$VPS:$REMOTE_DIR/"
fi

echo "==> Starting server on VPS (free port in $PORT_LO-$PORT_HI)"
PORT=$(ssh $SSH_OPTS "$VPS" "PORT_LO=$PORT_LO PORT_HI=$PORT_HI bash -s" <<'REMOTE'
set -e
BASE=~/mycenter
PIDFILE="$BASE/.portfolio.pid"
PORTFILE="$BASE/.portfolio.port"

# Reuse the current port if our server is the one holding it
old_pid=$(cat "$PIDFILE" 2>/dev/null || true)
port=""
if [ -n "$old_pid" ] && kill -0 "$old_pid" 2>/dev/null; then
  candidate=$(cat "$PORTFILE" 2>/dev/null || true)
  if [ -n "$candidate" ] && ss -tlnp 2>/dev/null | grep ":${candidate} " | grep -q "pid=${old_pid},"; then
    port=$candidate
  fi
  kill "$old_pid" 2>/dev/null || true
  sleep 1
fi

# Otherwise pick a random free port in the allowed range
if [ -z "$port" ]; then
  for p in $(shuf -i "${PORT_LO}-${PORT_HI}" -n 60); do
    if ! ss -tln | grep -q ":${p} "; then
      port=$p
      break
    fi
  done
fi
[ -n "$port" ] || { echo "ERROR: no free port in range ${PORT_LO}-${PORT_HI}" >&2; exit 1; }

# Start detached static server
cd "$BASE/dist"
setsid nohup python3 -m http.server "$port" --bind 0.0.0.0 > "$BASE/server.log" 2>&1 < /dev/null &
echo $! > "$PIDFILE"
echo "$port" > "$PORTFILE"
sleep 1

curl -sf -o /dev/null "http://127.0.0.1:${port}/" || { echo "ERROR: server did not start" >&2; exit 1; }
echo "$port"
REMOTE
)

echo "==> Verifying public access"
STATUS=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "http://65.21.8.185:${PORT}/")
if [ "$STATUS" != "200" ]; then
  echo "ERROR: site returned HTTP $STATUS" >&2
  exit 1
fi

echo ""
echo "Deploy complete: http://65.21.8.185:${PORT}/"
