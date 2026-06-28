import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-teal-600 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
