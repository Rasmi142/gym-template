import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-4",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      {subtitle && (
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-heading">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
