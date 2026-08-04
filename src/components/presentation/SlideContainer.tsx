import { cn } from "@/lib/cn";

interface SlideContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideContainer({ children, className }: SlideContainerProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col px-safe-x py-safe-y",
        className,
      )}
    >
      {children}
    </div>
  );
}
