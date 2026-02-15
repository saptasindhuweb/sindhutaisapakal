"use client";

import { useEffect, useMemo, useState } from "react";

const usePageReady = (imageSources: string[] = []) => {
  const [isPageReady, setIsPageReady] = useState(false);

  const sources = useMemo(
    () => Array.from(new Set(imageSources)),
    [imageSources.join("|")]
  );

  useEffect(() => {
    let isCancelled = false;

    const waitForWindowLoad = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
        return;
      }

      const onLoad = () => {
        window.removeEventListener("load", onLoad);
        resolve();
      };

      window.addEventListener("load", onLoad);
    });

    const preloadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = () => resolve();
        image.src = src;
      });

    const preloadAllImages = Promise.all(sources.map(preloadImage));

    Promise.all([waitForWindowLoad, preloadAllImages]).then(() => {
      if (!isCancelled) {
        setIsPageReady(true);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [sources]);

  return isPageReady;
};

export default usePageReady;
