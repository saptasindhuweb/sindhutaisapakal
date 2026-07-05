'use client';

interface AlbumCardProps {
  cover: string;
  title: string;
  photoCount?: number;
  onClick: () => void;
}

export default function AlbumCard({ cover, title, photoCount, onClick }: AlbumCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Cover image */}
      <img
        src={cover}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay — always visible, deepens on hover */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/40" />

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-end justify-between">
        <div>
          <h3 className="text-white text-lg font-bold leading-snug drop-shadow">{title}</h3>
          {photoCount !== undefined && (
            <p className="text-white/70 text-xs mt-0.5">{photoCount} photo{photoCount !== 1 ? 's' : ''}</p>
          )}
        </div>

        {/* "View" indicator — slides up on hover */}
        <span className="text-white/0 group-hover:text-white/90 text-xs font-semibold tracking-wide uppercase transition-colors duration-300">
          View →
        </span>
      </div>
    </div>
  );
}
