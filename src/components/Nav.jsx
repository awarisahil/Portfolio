import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/portfolio';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const goTo = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__logo" onClick={(e) => goTo(e, 'home')}>
          sahil awari<span>.</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : ''}
              onClick={(e) => goTo(e, link.id)}
            >
              {link.label}
            </a>
          ))}
          <span className="nav__dropdown-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              github ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              linkedin ↗
            </a>
          </span>
        </nav>

        <div className="nav__social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            github ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin ↗
          </a>
        </div>

        <a href="#contact" className="btn btn--solid btn--sm nav__cta" onClick={(e) => goTo(e, 'contact')}>
          hire me
        </a>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
