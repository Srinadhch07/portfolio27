import { researchItems } from "../content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Research() {
  return (
    <section className="section" id="research" aria-labelledby="research-title">
      <div className="container">
        <SectionHead
          number="02"
          id="research"
          title="Research & engineering"
          aside="Independent research, local inference, and small tools published for reuse."
        />

        <div className="research-grid">
          {researchItems.map((item, index) => (
            <Reveal
              className="research-item"
              delay={index * 60}
              key={item.id}
            >
              <div className="research-meta">
                <span className="research-type">{item.type}</span>
                <span>{item.meta}</span>
              </div>

              <h3 className="research-title">{item.title}</h3>
              <p className="research-desc">{item.description}</p>

              {item.links.length > 0 ? (
                <div className="research-links">
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      className="research-link"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="research-pending">Public artifacts pending</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
