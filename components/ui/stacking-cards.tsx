// author: Khoa Phan <https://www.pldkhoa.dev> (Enhanced for seamless stacking deck animation)

"use client";

import {
  createContext,
  useContext,
  useRef,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
  type UseScrollOptions,
  type HTMLMotionProps,
} from "motion/react";

import { cn } from "@/lib/utils";

interface StackingCardsProps
  extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  scrollOptions?: UseScrollOptions;
  scaleMultiplier?: number;
  totalCards: number;
}

interface StackingCardItemProps extends HTMLMotionProps<"div"> {
  index: number;
  topPosition?: number | string;
}

export default function StackingCards({
  children,
  className,
  scrollOptions,
  scaleMultiplier = 0.04,
  totalCards,
  ...props
}: StackingCardsProps) {
  const defaultRef = useRef<HTMLDivElement>(null);
  
  // Use scrollOptions.target if provided, otherwise defaultRef
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: scrollOptions?.target || defaultRef,
    ...scrollOptions,
  });

  return (
    <StackingCardsContext.Provider
      value={{ progress: scrollYProgress, scaleMultiplier, totalCards }}
    >
      <div className={cn("relative", className)} ref={defaultRef} {...props}>
        {children}
      </div>
    </StackingCardsContext.Provider>
  );
}

const StackingCardItem = ({
  index,
  topPosition,
  className,
  children,
  ...props
}: StackingCardItemProps) => {
  const {
    progress,
    scaleMultiplier = 0.04,
    totalCards = 3,
  } = useStackingCardsContext();

  const isBase = index === 0;
  const targetTop =
    topPosition !== undefined
      ? typeof topPosition === "number"
        ? topPosition
        : parseInt(topPosition, 10) || index * 22
      : index * 22;
  const scaleTo = Math.max(0.85, 1 - (totalCards - index) * scaleMultiplier);

  // Card 0: Base card, always starts at y: 0
  // Card 1: Enters between progress 0.15 and 0.45 from y: 450 to targetTop (22px)
  // Card 2: Enters between progress 0.50 and 0.85 from y: 450 to targetTop (44px)
  const enterStart = isBase ? 0 : index === 1 ? 0.15 : 0.50;
  const enterEnd = isBase ? 0 : index === 1 ? 0.45 : 0.85;

  // Numeric pixel transforms for reliable, buttery smooth interpolation in Motion
  const y = useTransform(
    progress,
    isBase ? [0, 1] : [0, enterStart, enterEnd, 1],
    isBase ? [targetTop, targetTop] : [450, 450, targetTop, targetTop]
  );

  // Progressive scale down when covered by subsequent stacked cards
  const scale = useTransform(
    progress,
    isBase
      ? [0, 0.35, 0.70, 1]
      : index === 1
      ? [0, 0.45, 0.75, 1]
      : [0, 1],
    isBase
      ? [1, 0.96, 0.92, 0.92]
      : index === 1
      ? [1, 1, 0.96, 0.96]
      : [1, 1]
  );

  // Subtle brightness dim for realistic depth when cards are stacked beneath
  const brightness = useTransform(
    progress,
    isBase
      ? [0, 0.35, 0.70, 1]
      : index === 1
      ? [0, 0.45, 0.75, 1]
      : [0, 1],
    isBase
      ? [1, 0.92, 0.84, 0.84]
      : index === 1
      ? [1, 1, 0.92, 0.92]
      : [1, 1]
  );

  return (
    <motion.div
      className={cn("absolute inset-x-0 top-0 w-full origin-top transition-shadow will-change-transform", className)}
      style={{
        y,
        scale,
        zIndex: 10 + index * 10,
        filter: useTransform(brightness, (b) => `brightness(${b})`),
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const StackingCardsContext = createContext<{
  progress: MotionValue<number>;
  scaleMultiplier?: number;
  totalCards?: number;
} | null>(null);

export const useStackingCardsContext = () => {
  const context = useContext(StackingCardsContext);
  if (!context)
    throw new Error("StackingCardItem must be used within StackingCards");
  return context;
};

export { StackingCardItem };
