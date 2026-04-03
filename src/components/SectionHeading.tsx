import FadeInUp from "./animations/FadeInUp";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <FadeInUp>
      <div className="section-heading">
        <span className="section-heading-accent" />
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </FadeInUp>
  );
}
