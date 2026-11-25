import { identity } from "../content";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow fade-up" style={{ animationDelay: "80ms" }}>
            <span className="rule" aria-hidden="true" />
            <span>Portfolio — 2027</span>
            <span className="loc">Hyderabad, India</span>
          </div>

          <h1 className="hero-title" id="hero-title">
            <span className="hero-line">
              <span style={{ animationDelay: "140ms" }}>
                Building <em>practical</em>
              </span>
            </span>{" "}
            <span className="hero-line">
              <span style={{ animationDelay: "230ms" }}>AI systems and</span>
            </span>{" "}
            <span className="hero-line">
              <span style={{ animationDelay: "320ms" }}>
                full-stack products<span className="stop">.</span>
              </span>
            </span>
          </h1>

          <p className="hero-intro fade-up" style={{ animationDelay: "520ms" }}>
            {identity.intro}
          </p>

          <div
            className="hero-actions fade-up"
            style={{ animationDelay: "620ms" }}
          >
            <a className="btn" href="#work">
              View selected work{" "}
              <span className="arrow" aria-hidden="true">
                ↓
              </span>
            </a>
            <a className="link-quiet u-link" href="#contact">
              Contact me <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-meta fade-up" style={{ animationDelay: "720ms" }}>
            <span>{identity.role}</span>
            <span>{identity.brand} · Independent</span>
            <span>B.Tech CSE · CGPA 7.79/10</span>
          </div>
        </div>

        <figure className="hero-figure">
          <div className="portrait-frame">
            <img
              className="portrait"
              src="/srinadh_image.jpg"
              alt="Portrait of Srinadh Chintakindi"
              width={200}
              height={200}
              fetchPriority="high"
            />
          </div>
          <figcaption
            className="portrait-caption fade-up"
            style={{ animationDelay: "940ms" }}
          >
            <span>Srinadh Chintakindi</span>
            <span>Hyderabad · 2027</span>
          </figcaption>
          <p className="hero-note fade-up" style={{ animationDelay: "1020ms" }}>
            Field notes on AI systems, product engineering, and the work behind
            them.
          </p>
        </figure>
      </div>
    </section>
  );
}
