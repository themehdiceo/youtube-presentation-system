import { cn } from "@/lib/cn";

interface SlideFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideFooter({ children, className }: SlideFooterProps) {
  return (
    <footer className={cn("relative z-footer mt-auto shrink-0", className)}>
      {children}
    </footer>
  );
}
