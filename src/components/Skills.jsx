import { skills } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHead num="04" label="skills" title="Toolbox" />

      <div className="skills__grid">
        {skills.map((group, i) => (
          <Reveal className="skill-card" key={group.title} delay={i * 0.05}>
            <h3 className="label">{group.title}</h3>
            <ul className="pills">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
