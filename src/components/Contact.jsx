import { useState } from 'react';
import { profile } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _replyto: data.email,
          _subject: `Portfolio message from ${data.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <SectionHead num="06" label="contact" title="Get in touch" />

      <Reveal as="p" className="contact__text">
        Have a project in mind, or hiring for a full-stack role? Fill in the form
        and it lands straight in my inbox — I usually reply within a day.
      </Reveal>

      <div className="contact__layout">
        <Reveal className="form-wrap">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__field">
              <label className="label" htmlFor="cf-name">
                name
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
              />
            </div>

            <div className="form__field">
              <label className="label" htmlFor="cf-email">
                email
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="form__field">
              <label className="label" htmlFor="cf-message">
                message
              </label>
              <textarea
                id="cf-message"
                name="message"
                required
                placeholder="What are we building?"
              />
            </div>

            <div className="form__foot">
              <button type="submit" className="btn btn--solid" disabled={status === 'sending'}>
                {status === 'sending' ? 'sending…' : 'send message'}
              </button>
              {status === 'sent' && (
                <span className="form__status is-ok">message sent — talk soon.</span>
              )}
              {status === 'error' && (
                <span className="form__status is-err">
                  something went wrong — email me at {profile.email}
                </span>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal className="contact__aside" delay={0.1}>
          <div className="contact__row">
            <span className="label">email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact__row">
            <span className="label">github</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              github.com/awarisahil ↗
            </a>
          </div>
          <div className="contact__row">
            <span className="label">linkedin</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              in/sahil-awari ↗
            </a>
          </div>
          <div className="contact__row">
            <span className="label">phone</span>
            <a href={profile.phoneHref}>{profile.phone}</a>
          </div>
          <div className="contact__row">
            <span className="label">location</span>
            <span className="muted">{profile.location}</span>
          </div>
          <div className="contact__direct">
            <a className="btn" href={`mailto:${profile.email}`}>
              or just email me directly ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
