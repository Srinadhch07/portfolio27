import { projects } from "../content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <SectionHead
          number="01"
          id="work"
          title="Selected work"
          aside="Five projects across AI systems, product engineering, research, and client delivery."
        />

        <div className="work-list">
          {projects.map((project, index) => (
            <Reveal
              as="article"
              className="work-row"
              delay={index * 70}
              key={project.id}
            >
              <div className="work-index" aria-hidden="true">
                {project.index}
              </div>

              <div className="work-main">
                <div className="work-top">
                  <h3 className="work-title">
                    <a
                      href={project.links[0].href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <span className="work-category">{project.category}</span>
                </div>

                <p className="work-desc">{project.description}</p>

                <p className="work-contribution">
                  <span className="label">Contribution</span>
                  {project.contribution}
                </p>

                <div className="work-stack" aria-label="Core technologies">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="work-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      className="work-link"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="work-side">
                <span
                  className={`status status--${project.statusTone ?? "neutral"}`}
                >
                  {project.status}
                </span>
                <span className="work-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
