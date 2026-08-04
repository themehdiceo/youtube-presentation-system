import { cn } from "@/lib/cn";

interface SlideHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideHeader({ children, className }: SlideHeaderProps) {
  return (
    <header className={cn("relative z-header shrink-0", className)}>
      {children}
    </header>
  );
}
