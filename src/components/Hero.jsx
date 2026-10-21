import { profile } from '../data/portfolio';
import Reveal from './Reveal';

export default function Hero() {
  const goTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <Reveal as="p" className="hero__status mono">
          <span className="pulse-dot" />
          {profile.availability}
        </Reveal>

        <Reveal as="h1" delay={0.08}>
          {profile.name}
        </Reveal>

        <Reveal as="p" className="hero__lede" delay={0.16}>
          I design and build web applications end to end — real-time dashboards,
          REST APIs, booking platforms, the lot. Currently shipping software at{' '}
          <strong>Botplus LLP</strong>, Pune.
        </Reveal>

        <Reveal as="p" className="hero__meta mono" delay={0.24}>
          java · spring boot · react · node.js · postgresql
        </Reveal>

        <Reveal className="hero__actions" delay={0.32}>
          <a className="btn btn--solid" href={`mailto:${profile.email}`}>
            {profile.email} ↗
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
            github ↗
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin ↗
          </a>
        </Reveal>
      </div>

      <Reveal className="hero__term" delay={0.25}>
        <div className="term">
          <div className="term__bar">
            <i />
            <i />
            <i />
            <span>sahil@awari: ~</span>
          </div>
          <div className="term__body">
            <p>
              <span className="term__prompt">$</span>{' '}
              <span className="term__cmd">whoami</span>
            </p>
            <p className="term__out">sahil awari — full stack developer</p>
            <p>
              <span className="term__prompt">$</span>{' '}
              <span className="term__cmd">cat ./stack.txt</span>
            </p>
            <p className="term__out">java · spring boot · react · node.js</p>
            <p>
              <span className="term__prompt">$</span>{' '}
              <span className="term__cmd">cat ./currently.txt</span>
            </p>
            <p className="term__out">software developer @ botplus llp — pune, in</p>
            <p>
              <span className="term__prompt">$</span>{' '}
              <span className="caret" />
            </p>
          </div>
        </div>
      </Reveal>

      <a href="#about" className="hero__scroll mono" onClick={(e) => goTo(e, 'about')}>
        scroll ↓
      </a>
    </section>
  );
}
