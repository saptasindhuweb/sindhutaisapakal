'use client';

import { useEffect } from 'react';

/**
 * Globally watches every <img> in the document and sets data-img-loaded
 * once the image finishes loading. The CSS in globals.css uses that
 * attribute to stop the skeleton shimmer animation.
 */
export default function ImageLoadTracker() {
  useEffect(() => {
    const mark = (img: HTMLImageElement) => {
      img.setAttribute('data-img-loaded', '');
    };

    const attach = (img: HTMLImageElement) => {
      // Apply native lazy loading to every image that isn't explicitly marked eager
      // (hero/above-fold images should have loading="eager" set in their markup)
      if (!img.hasAttribute('loading')) {
        img.loading = 'lazy';
      }

      if (img.complete) {
        mark(img);
      } else {
        img.addEventListener('load', () => mark(img), { once: true });
        img.addEventListener('error', () => mark(img), { once: true });
      }
    };

    // Handle all images already in the DOM
    document.querySelectorAll<HTMLImageElement>('img').forEach(attach);

    // Watch for images added dynamically (e.g. gallery lightbox, tab panels)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) {
            attach(node);
          } else if (node instanceof Element) {
            node.querySelectorAll<HTMLImageElement>('img').forEach(attach);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
