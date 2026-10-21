import { experience } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHead num="02" label="experience" title="Where I've worked" />

      <div className="exp__layout">
        <aside className="exp__side">
          <Reveal className="exp__card">
            <span className="label">current role</span>
            <h3>{experience.role}</h3>
            <p className="exp__company">
              {experience.company} — {experience.place}
            </p>
            <span className="exp__period mono">{experience.period}</span>
            <span className="exp__duration mono">
              <span className="pulse-dot" />
              {experience.duration}
            </span>
            <p className="exp__note">{experience.note}</p>
          </Reveal>
        </aside>

        <div className="job__projects">
          {experience.projects.map((project, i) => (
            <Reveal as="article" className="job-project" key={project.num} delay={i * 0.06}>
              <div className="job-project__head">
                <h4>{project.title}</h4>
                <span className="tag">{project.tag}</span>
              </div>
              <p className="job-project__sub muted">{project.sub}</p>
              <ul>
                {project.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
              {project.link && (
                <a
                  className="mono job-project__link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live demo ↗
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
