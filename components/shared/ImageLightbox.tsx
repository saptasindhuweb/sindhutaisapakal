"use client";

import { useEffect, useRef, useState } from "react";

type ImageLightboxProps = {
  imageSrc: string | null;
  onRequestClose: () => void;
  alt?: string;
};

const CLOSE_ANIMATION_MS = 220;

const ImageLightbox = ({ imageSrc, onRequestClose, alt = "Expanded image preview" }: ImageLightboxProps) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (imageSrc) {
      setCurrentSrc(imageSrc);
      setIsRendered(true);
      requestAnimationFrame(() => setIsVisible(true));
      return;
    }

    if (isRendered) {
      setIsVisible(false);
      closeTimerRef.current = setTimeout(() => {
        setIsRendered(false);
        setCurrentSrc(null);
      }, CLOSE_ANIMATION_MS);
    }

    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, [imageSrc, isRendered]);

  useEffect(() => {
    if (!isRendered) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onRequestClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isRendered, onRequestClose]);

  if (!isRendered || !currentSrc) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-6 transition-all duration-200 ${
        isVisible ? "bg-black/85 opacity-100" : "bg-black/0 opacity-0"
      }`}
      onClick={onRequestClose}
    >
      <button
        type="button"
        aria-label="Close expanded image"
        className="absolute top-6 right-6 text-white text-3xl leading-none"
        onClick={(event) => {
          event.stopPropagation();
          onRequestClose();
        }}
      >
        X
      </button>
      <img
        src={currentSrc}
        alt={alt}
        className={`max-h-[95vh] max-w-[96vw] w-auto object-contain rounded-xl transition-all duration-200 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
};

export default ImageLightbox;
