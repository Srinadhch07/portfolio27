import { identity } from "../content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="name">{identity.name}</span>
          <span>{identity.location}</span>
          <span>© 2027</span>
          <span>Field notes, v1</span>
        </div>

        <div className="footer-links">
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <a className="top" href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
