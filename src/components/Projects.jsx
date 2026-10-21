import { profile, projects } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const LANG_COLORS = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Java: '#b07219',
  Python: '#3572a5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'C++': '#f34b7d',
  C: '#9b9ba4',
};

function LangDot({ language }) {
  const color = LANG_COLORS[language] || '#3d3d45';
  return (
    <span className="repo__lang mono">
      <i style={{ background: color, boxShadow: `0 0 8px ${color}66` }} />
      {language}
    </span>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHead num="03" label="projects" title="Things I've built" />

      <div className="repos">
        {projects.map((project, i) => (
          <Reveal as="article" className="repo" key={project.name} delay={i * 0.04}>
            <div className="repo__top">
              <h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h3>
              <LangDot language={project.language} />
            </div>
            <p>{project.description}</p>
            <p className="repo__tech mono">{project.tech.join(' · ')}</p>
            <div className="repo__links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                github ↗
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  live ↗
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="repos__more" delay={0.1}>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          more on github ↗
        </a>
      </Reveal>
    </section>
  );
}
