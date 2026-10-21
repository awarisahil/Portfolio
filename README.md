# Sahil Awari — Portfolio

Personal portfolio site for **Sahil Awari**, Full Stack Developer based in Pune, India.
Built with React and Vite, styled with hand-written CSS, and fully static — no backend required.

## Sections

- **Hero** — intro, stats and availability
- **About** — background and focus areas
- **Experience** — current role at Botplus LLP with featured work
- **Projects** — pinned repos with tech stacks and live links
- **Skills** — languages, frontend, backend, databases, tools
- **Education** — M.Sc. & B.Sc. Computer Science
- **Contact** — email, phone, GitHub and LinkedIn

Extras: scroll-progress bar, scroll-reveal animations, skills marquee ticker and a fully responsive layout.

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vite.dev/)
- Plain CSS (no UI framework)

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Editing Content

All text, links, projects, skills and experience live in one file:

```
src/data/portfolio.js
```

Update that file and the whole site updates — no other changes needed.

## Deployment

`deploy.sh` builds the site and deploys the `dist/` folder to a VPS over SSH
(rsync with scp fallback), then serves it with a detached static file server:

```bash
./deploy.sh
```

The script reuses the previously assigned port when redeploying and verifies
public access before reporting the final URL.

## Contact

- Email: [sahilawari2@gmail.com](mailto:sahilawari2@gmail.com)
- GitHub: [@awarisahil](https://github.com/awarisahil)
- LinkedIn: [Sahil Awari](https://www.linkedin.com/in/sahil-awari-b42214254/)
