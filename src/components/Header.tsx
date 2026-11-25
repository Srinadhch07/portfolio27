import { useEffect, useRef, useState } from "react";
import { identity, navItems } from "../content";

type HeaderProps = {
  active: string;
};

export function Header({ active }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }

      setScrolled((current) => {
        const next = window.scrollY > 8;
        return current === next ? current : next;
      });
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const desktop = window.matchMedia("(min-width: 861px)");
    const onChange = () => {
      if (desktop.matches) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="progress" ref={progressRef} aria-hidden="true" />

      <div className="container header-inner">
        <a
          className="wordmark"
          href="#top"
          aria-label="Srinadh Chintakindi — back to top"
        >
          <span>
            Srinadh <em>Chintakindi</em>
          </span>
          <span className="dot" aria-hidden="true" />
        </a>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;

            return (
              <a
                key={id}
                className={`nav-link${isActive ? " is-active" : ""}`}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="header-actions">
          <a
            className="header-social"
            href={identity.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            className="header-social"
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <a
            className="resume-btn"
            href={identity.resumeUrl}
          >
            Résumé <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="menu-lines" aria-hidden="true">
            <span />
            <span />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="mobile-panel" id="mobile-menu">
          <nav className="mobile-nav" aria-label="Mobile">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                className="mobile-link"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <span className="num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </nav>

          <div className="mobile-actions">
            <a
              className="resume-btn"
              href={identity.resumeUrl}
            >
              Résumé <span aria-hidden="true">↗</span>
            </a>
            <a
              href={identity.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub ↗
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
