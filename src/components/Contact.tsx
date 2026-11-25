import { contact, identity } from "../content";
import { Reveal } from "./Reveal";

const contactLinks = [
  {
    label: "LinkedIn",
    meta: "Direct message",
    href: identity.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    meta: "Code & repositories",
    href: identity.github,
    external: true,
  },
  {
    label: "Thridha Labs",
    meta: "Independent brand",
    href: identity.thridha,
    external: true,
  },
  {
    label: "Résumé",
    meta: "View",
    href: identity.resumeUrl,
    external: false,
  },
];

export function Contact() {
  return (
    <section
      className="contact-section section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <Reveal>
          <p className="contact-kicker">05 — Contact</p>
          <h2 className="contact-heading" id="contact-title">
            Let’s build something <em>useful</em>.
          </h2>
          <p className="contact-body">{contact.body}</p>
        </Reveal>

        <Reveal className="contact-links" delay={110}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              className="contact-link"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer noopener" : undefined}
            >
              <span className="label">{link.label}</span>
              <span className="meta">{link.meta}</span>
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
