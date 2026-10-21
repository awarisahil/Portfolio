import { profile } from '../data/portfolio';

export default function Footer() {
  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__bar">
        <span>© 2026 {profile.name}</span>
        <span className="footer__links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            github ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin ↗
          </a>
          <a href={`mailto:${profile.email}`}>email ↗</a>
        </span>
        <a href="#home" onClick={toTop}>
          top ↑
        </a>
      </div>
    </footer>
  );
}
