import { cn } from "@/lib/cn";

type ContainerAlign = "start" | "center" | "end";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "default" | "narrow" | "full";
  align?: ContainerAlign;
  withSafeArea?: boolean;
}

const maxWidthClasses = {
  default: "max-w-content",
  narrow: "max-w-content-narrow",
  full: "max-w-full",
} as const;

const alignClasses = {
  start: "mx-0",
  center: "mx-auto",
  end: "ml-auto mr-0",
} as const;

export function Container({
  children,
  className,
  maxWidth = "default",
  align = "center",
  withSafeArea = false,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full",
        maxWidthClasses[maxWidth],
        alignClasses[align],
        withSafeArea && "px-safe-x py-safe-y",
        className,
      )}
    >
      {children}
    </div>
  );
}
