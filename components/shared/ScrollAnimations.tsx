"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

const SECTION_SELECTOR = "section, article, [data-scroll-section]";
const EXCLUDED_SELECTOR = "[data-scroll-skip], dialog, [role='dialog']";

/** Progressive enhancement: content is never hidden while waiting to intersect. */
export default function ScrollAnimations({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stopObserving: (() => void) | undefined;

    const updateMotionPreference = () => {
      stopObserving?.();
      stopObserving = undefined;
      if (motionPreference.matches) return;

      const tracked = new Set<HTMLElement>();
      let frame = 0;

      const finish = (element: HTMLElement) => {
        element.dataset.scrollReveal = "complete";
      };

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const element = entry.target as HTMLElement;
            // Responsive desktop/mobile duplicates must wait until displayed.
            if (!entry.isIntersecting || !entry.boundingClientRect.width || !entry.boundingClientRect.height) continue;
            observer.unobserve(element);
            if (element.contains(document.activeElement)) {
              finish(element);
            } else {
              element.dataset.scrollReveal = "animating";
            }
          }
        },
        // Start just before entry; threshold 0 also supports very tall sections.
        { threshold: 0, rootMargin: "0px 0px 48px 0px" }
      );

      const registerSections = () => {
        frame = 0;
        for (const element of tracked) {
          if (!root.contains(element)) {
            observer.unobserve(element);
            delete element.dataset.scrollReveal;
            tracked.delete(element);
          }
        }

        root.querySelectorAll<HTMLElement>(SECTION_SELECTOR).forEach((element) => {
          if (tracked.has(element) || element.closest(EXCLUDED_SELECTOR)) return;
          // Animate the outer section only, not its cards or nested sections too.
          if (element.parentElement?.closest(SECTION_SELECTOR)) return;
          const position = getComputedStyle(element).position;
          if (position === "fixed" || position === "sticky") return;

          tracked.add(element);
          const rect = element.getBoundingClientRect();
          if (rect.width && rect.height && rect.top < window.innerHeight && rect.bottom > 0) {
            // Keep the initial viewport, restored scroll positions and LCP immediate.
            finish(element);
          } else {
            element.dataset.scrollReveal = "pending";
            observer.observe(element);
          }
        });
      };

      const finishAnimation = (event: AnimationEvent) => {
        if (event.animationName === "section-enter" && event.target instanceof HTMLElement) {
          finish(event.target);
        }
      };

      const revealFocusedSection = (event: FocusEvent) => {
        if (!(event.target instanceof Element)) return;
        const element = event.target.closest<HTMLElement>("[data-scroll-reveal]");
        if (element) {
          observer.unobserve(element);
          finish(element);
        }
      };

      const mutations = new MutationObserver(() => {
        if (!frame) frame = window.requestAnimationFrame(registerSections);
      });

      registerSections();
      // Include async blog/event sections without polling or scroll listeners.
      mutations.observe(root, { childList: true, subtree: true });
      root.addEventListener("animationend", finishAnimation);
      root.addEventListener("focusin", revealFocusedSection);

      stopObserving = () => {
        observer.disconnect();
        mutations.disconnect();
        window.cancelAnimationFrame(frame);
        root.removeEventListener("animationend", finishAnimation);
        root.removeEventListener("focusin", revealFocusedSection);
        tracked.forEach((element) => delete element.dataset.scrollReveal);
      };
    };

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => {
      stopObserving?.();
      motionPreference.removeEventListener("change", updateMotionPreference);
    };
  }, [pathname]);

  return <div ref={rootRef} className="contents" data-scroll-root>{children}</div>;
}