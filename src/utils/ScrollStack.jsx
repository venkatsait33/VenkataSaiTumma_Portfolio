import { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div

  className={`scroll-stack-card relative w-full md:my-12 md:rounded-[40px] md:shadow-[0_10px_30px_rgba(0,0,0,0.08)] box-border origin-top ${itemClassName}`}

    style={{
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
      willChange: "transform",
      transform: "translateZ(0)",
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 120,
  itemScale = 0.05,
  stackPosition = 0.25, // 25% of viewport
  baseScale = 0.9,
  rotationAmount = 0,
  useWindowScroll = true,
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const lenisRef = useRef(null);
  const animationFrameRef = useRef(null);

  const updateTransforms = useCallback(() => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    cardsRef.current.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardTop = rect.top + scrollTop;

      const triggerPoint = cardTop - viewportHeight * stackPosition;

      const progress = Math.min(
        Math.max((scrollTop - triggerPoint) / viewportHeight, 0),
        1,
      );

      const scale = Number(
        (1 - progress * (1 - (baseScale + index * itemScale))).toFixed(3),
      );

      const translateY = Number((progress * index * itemDistance).toFixed(2));

      const rotate = rotationAmount
        ? Number((progress * rotationAmount * index).toFixed(2))
        : 0;

      const transform = `
        translate3d(0px, ${translateY}px, 0px)
        scale3d(${scale}, ${scale}, 1)
        rotateZ(${rotate}deg)
      `;

      card.style.transform = transform;
    });
  }, [itemScale, itemDistance, stackPosition, baseScale, rotationAmount]);

  useLayoutEffect(() => {
    cardsRef.current = Array.from(
      document.querySelectorAll(".scroll-stack-card"),
    );

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      lerp: 0.1,
    });

    lenis.on("scroll", () => {
      requestAnimationFrame(updateTransforms);
    });

    const raf = (time) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };

    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;

    updateTransforms();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      lenis.destroy();
    };
  }, [updateTransforms]);

  return (
    <div ref={scrollerRef} className={`relative w-full ${className}`}>
      <div className="md:pt-[40vh] md:px-20 md:pb-[60vh] min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
