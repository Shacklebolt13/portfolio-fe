import { AVAILABLE_SUBSECTIONS } from "@/constants/availableSubsections";

export default function RelatedSection({
  data,
  className,
  subsection,
}: {
  data: any;
  className?: string;
  subsection: AVAILABLE_SUBSECTIONS;
}) {
  return <div className={className}>{}</div>;
}
