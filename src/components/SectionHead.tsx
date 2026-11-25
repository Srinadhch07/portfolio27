import { Reveal } from "./Reveal";

type SectionHeadProps = {
  number: string;
  title: string;
  aside: string;
  id: string;
};

export function SectionHead({ number, title, aside, id }: SectionHeadProps) {
  return (
    <Reveal className="section-head">
      <span className="section-num" aria-hidden="true">
        {number}
      </span>
      <h2 className="section-title" id={`${id}-title`}>
        {title}
      </h2>
      <p className="section-aside">{aside}</p>
    </Reveal>
  );
}
