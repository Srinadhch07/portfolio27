import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
