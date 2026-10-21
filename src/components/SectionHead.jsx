import Reveal from './Reveal';

export default function SectionHead({ num, label, title }) {
  return (
    <div className="section__head">
      <Reveal as="span" className="label">
        {num} / {label}
      </Reveal>
      {title && (
        <Reveal as="h2" delay={0.05}>
          {title}
        </Reveal>
      )}
    </div>
  );
}
