import { cn } from "@/lib/cn";

type GridColumns = 1 | 2 | 3 | 4;
type GridGap = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type GridAlign = "start" | "center" | "end" | "stretch";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  columns?: GridColumns;
  gap?: GridGap;
  align?: GridAlign;
}

const columnClasses: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

const gapClasses: Record<GridGap, string> = {
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
  "2xl": "gap-16",
};

const alignClasses: Record<GridAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

export function Grid({
  children,
  className,
  columns = 1,
  gap = "md",
  align = "stretch",
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        columnClasses[columns],
        gapClasses[gap],
        alignClasses[align],
        className,
      )}
    >
      {children}
    </div>
  );
}
