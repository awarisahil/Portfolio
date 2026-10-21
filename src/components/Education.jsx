import { education } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function Education() {
  return (
    <section className="section" id="education">
      <SectionHead num="05" label="education" title="Education" />

      <div className="edu__grid">
        {education.map((edu, i) => (
          <Reveal as="article" className="edu-card" key={edu.degree} delay={i * 0.06}>
            <span className="label">{edu.years}</span>
            <h3>{edu.degree}</h3>
            <p className="muted">{edu.institute}</p>
            <p className="mono muted">{edu.score}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
