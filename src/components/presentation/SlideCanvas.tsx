import { cn } from "@/lib/cn";

interface SlideCanvasProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideCanvas({ children, className }: SlideCanvasProps) {
  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-2xl bg-background shadow-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
