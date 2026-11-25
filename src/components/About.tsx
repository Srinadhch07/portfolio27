import { about, credentials, education, interests } from "../content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHead
          number="04"
          id="about"
          title="About"
          aside="A short note on how I work, what I study, and the credentials behind it."
        />

        <div className="about-grid">
          <Reveal className="about-body">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <ul className="approach">
              {about.approach.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="about-side" delay={110}>
            <div className="spec">
              <span className="spec-label">Education</span>
              <div className="spec-value">{education.degree}</div>
              <div className="spec-sub">{education.institution}</div>
              <div className="spec-sub">
                CGPA {education.cgpa} · {education.dates} · {education.note}
              </div>
            </div>

            <div className="spec">
              <span className="spec-label">Interests</span>
              <div className="interests">
                {interests.map((interest) => (
                  <span className="interest" key={interest}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="spec">
              <span className="spec-label">Selected credentials</span>
              <ul className="credentials">
                {credentials.map((credential) => (
                  <li key={credential.title}>
                    <span className="cred-title">{credential.title}</span>
                    <span className="cred-detail">
                      {credential.issuer} · {credential.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
