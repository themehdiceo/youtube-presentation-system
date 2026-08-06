import { SlideContainer } from "@/components/presentation/SlideContainer";
import { cn } from "@/lib/cn";

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center";
  /** Active darija RTL layout for presentation slides. */
  rtl?: boolean;
}

export function SlideLayout({
  children,
  className,
  align = "center",
  rtl = false,
}: SlideLayoutProps) {
  return (
    <div
      className={cn("h-full w-full bg-background", rtl && "font-arabic")}
      dir={rtl ? "rtl" : "ltr"}
      lang={rtl ? "ar-MA" : undefined}
    >
      <SlideContainer
        className={cn(
          "h-full",
          align === "center" && "justify-center",
          className,
        )}
      >
        {children}
      </SlideContainer>
    </div>
  );
}
