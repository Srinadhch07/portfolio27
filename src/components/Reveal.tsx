import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({
  as = "div",
  delay = 0,
  className = "",
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`,
      style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
    },
    children,
  );
}
