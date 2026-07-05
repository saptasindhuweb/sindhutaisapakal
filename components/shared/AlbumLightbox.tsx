'use client';

import { useEffect } from 'react';

interface Album {
  title: string;
  images: string[];
}

interface AlbumLightboxProps {
  album: Album | null;
  onClose: () => void;
  /** Optional: called when an individual image is clicked (e.g. to open ImageLightbox) */
  onImageClick?: (src: string) => void;
}

export default function AlbumLightbox({ album, onClose, onImageClick }: AlbumLightboxProps) {
  // Close on Escape key
  useEffect(() => {
    if (!album) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [album, onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    if (album) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [album]);

  if (!album) return null;

  return (
    <div className="fixed inset-0 z-100 bg-black/95 flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div>
          <h2 className="text-white text-xl font-bold">{album.title}</h2>
          <p className="text-white/50 text-xs mt-0.5">{album.images.length} photo{album.images.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close album"
          className="text-white/70 hover:text-white transition-colors text-2xl font-light leading-none w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10"
        >
          ✕
        </button>
      </div>

      {/* Image grid */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {album.images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl group cursor-pointer"
              onClick={() => onImageClick?.(src)}
            >
              <img
                src={src}
                alt={`${album.title} – ${i + 1}`}
                className="w-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
