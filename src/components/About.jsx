import { profile, stats } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHead num="01" label="about" title="A bit about me" />

      <div className="about__grid">
        <Reveal as="p" className="about__lead">
          {profile.aboutLead}
        </Reveal>
        <div className="about__body">
          {profile.aboutBody.map((para, i) => (
            <Reveal as="p" key={i} delay={0.05 + i * 0.05}>
              {para}
            </Reveal>
          ))}
        </div>
      </div>

      <div className="stats">
        {stats.map((stat, i) => (
          <Reveal className="stat" key={stat.label} delay={0.05 + i * 0.05}>
            <b>
              {stat.value.toLocaleString('en-IN', {
                minimumFractionDigits: stat.decimals,
                maximumFractionDigits: stat.decimals,
              })}
              {stat.suffix}
            </b>
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
