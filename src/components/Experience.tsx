import { experience } from "../content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Experience() {
  return (
    <section
      className="section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <SectionHead
          number="03"
          id="experience"
          title="Experience"
          aside="Founder-led product work, AI data, full-stack development, and a student startup."
        />

        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal
              className="timeline-row"
              delay={index * 70}
              key={`${item.organisation}-${item.period}`}
            >
              <div className="exp-period">{item.period}</div>

              <div>
                <div className="exp-head">
                  <h3 className="exp-role">{item.role}</h3>
                  <span className="exp-org">{item.organisation}</span>
                  <span className="exp-location">{item.location}</span>
                </div>

                <p className="exp-desc">{item.description}</p>

                {item.footnote ? (
                  <p className="exp-footnote">{item.footnote}</p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
