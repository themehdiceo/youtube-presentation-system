import { SlideCanvas } from "@/components/presentation/SlideCanvas";
import { SlideContainer } from "@/components/presentation/SlideContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Typography } from "@/components/ui/Typography";
import type { AccentColor } from "@/design-system/colors";
import { cn } from "@/lib/cn";

interface DemoSlideProps {
  number: number;
  title: string;
  description: string;
  accent?: AccentColor;
  className?: string;
}

export function DemoSlide({
  number,
  title,
  description,
  accent = "blue",
  className,
}: DemoSlideProps) {
  return (
    <SlideCanvas className={cn("h-full w-full rounded-none shadow-none", className)}>
      <SlideContainer className="justify-center">
        <div className="flex flex-col gap-8">
          <SectionLabel accent={accent}>
            Slide {number.toString().padStart(2, "0")}
          </SectionLabel>
          <Typography variant="h1" className="text-balance">
            {title}
          </Typography>
          <Typography variant="bodyLarge" className="max-w-3xl text-text-secondary">
            {description}
          </Typography>
        </div>
      </SlideContainer>
    </SlideCanvas>
  );
}
