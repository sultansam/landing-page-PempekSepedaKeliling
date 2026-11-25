// Ilustrasi vektor buatan sendiri (warna mengikuti logo): ringan, tajam di semua layar.

type SvgProps = { className?: string; title?: string };

function a11y(title?: string) {
  return title ? { role: "img" as const, "aria-label": title } : { "aria-hidden": true as const };
}

/** Pempek lenjer: lonjong, irisan miring. */
export function PempekLenjer({ className, title }: SvgProps) {
  return (
    <svg viewBox="0 0 120 80" className={className} {...a11y(title)}>
      <ellipse cx="60" cy="66" rx="46" ry="7" fill="#2B1A12" opacity="0.12" />
      <rect x="10" y="22" width="100" height="36" rx="18" fill="#E9B872" />
      <rect x="10" y="22" width="100" height="36" rx="18" fill="url(#lenjerShade)" />
      <path d="M30 24 Q34 40 30 56" stroke="#C98B45" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M60 23 Q64 40 60 57" stroke="#C98B45" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M90 24 Q94 40 90 56" stroke="#C98B45" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="44" cy="30" rx="14" ry="3.5" fill="#FFF3DC" opacity="0.7" />
      <defs>
        <linearGradient id="lenjerShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="1" stopColor="#A86A2C" stopOpacity="0.35" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Pempek kapal selam terbelah: kuning telur di tengah. */
export function PempekKapalSelam({ className, title }: SvgProps) {
  return (
    <svg viewBox="0 0 120 90" className={className} {...a11y(title)}>
      <ellipse cx="60" cy="78" rx="48" ry="7" fill="#2B1A12" opacity="0.12" />
      <path d="M12 60 Q14 18 60 16 Q106 18 108 60 Q100 74 60 74 Q20 74 12 60 Z" fill="#E2A75E" />
      <path d="M12 60 Q14 18 60 16 Q106 18 108 60" fill="none" stroke="#B9783A" strokeWidth="3" />
      <ellipse cx="60" cy="52" rx="30" ry="18" fill="#FFF6E5" />
      <circle cx="60" cy="52" r="12" fill="#F6B21B" />
      <circle cx="56" cy="48" r="3.5" fill="#FFD76A" />
      <path d="M26 32 Q40 22 56 21" stroke="#FFE7BF" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/** Pempek adaan: bulat. */
export function PempekAdaan({ className, title }: SvgProps) {
  return (
    <svg viewBox="0 0 90 90" className={className} {...a11y(title)}>
      <ellipse cx="45" cy="78" rx="30" ry="6" fill="#2B1A12" opacity="0.12" />
      <circle cx="45" cy="44" r="30" fill="#D9984F" />
      <circle cx="45" cy="44" r="30" fill="url(#adaanShade)" />
      <circle cx="35" cy="32" r="7" fill="#FFE2B0" opacity="0.6" />
      <circle cx="55" cy="52" r="2" fill="#A86A2C" />
      <circle cx="40" cy="58" r="1.6" fill="#A86A2C" />
      <circle cx="60" cy="38" r="1.6" fill="#A86A2C" />
      <defs>
        <radialGradient id="adaanShade" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.2" />
          <stop offset="1" stopColor="#8A531F" stopOpacity="0.4" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/** Mangkuk cuko dengan uap. */
export function CukoBowl({ className, title }: SvgProps) {
  return (
    <svg viewBox="0 0 120 110" className={className} {...a11y(title)}>
      <path d="M44 30 q-8 -10 0 -20 q8 -10 0 -20" transform="translate(0 22)" stroke="#CE3213" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.45" />
      <path d="M62 26 q-8 -10 0 -20 q8 -10 0 -20" transform="translate(0 22)" stroke="#CE3213" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.35" />
      <path d="M80 30 q-8 -10 0 -20 q8 -10 0 -20" transform="translate(0 22)" stroke="#CE3213" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.45" />
      <ellipse cx="60" cy="100" rx="40" ry="6" fill="#2B1A12" opacity="0.12" />
      <path d="M14 58 H106 Q102 96 60 96 Q18 96 14 58 Z" fill="#CE3213" />
      <ellipse cx="60" cy="58" rx="46" ry="10" fill="#4A1E0C" />
      <ellipse cx="60" cy="57" rx="40" ry="7" fill="#6B2A10" />
      <circle cx="46" cy="56" r="3" fill="#7BB661" />
      <circle cx="66" cy="58" r="2.5" fill="#7BB661" />
      <circle cx="78" cy="55" r="2" fill="#F6C343" />
      <path d="M24 70 Q60 84 96 70" stroke="#FFFFFF" strokeWidth="3" fill="none" opacity="0.25" />
    </svg>
  );
}

/** Roda sepeda (dekorasi). */
export function BikeWheel({ className }: { className?: string }) {
  const spokes = Array.from({ length: 12 }, (_, index) => index * 30);
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="6" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      {spokes.map((angle) => (
        <line key={angle} x1="50" y1="50" x2={50 + 36 * Math.cos((angle * Math.PI) / 180)} y2={50 + 36 * Math.sin((angle * Math.PI) / 180)} stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      ))}
      <circle cx="50" cy="50" r="6" fill="currentColor" />
    </svg>
  );
}

/** Garis gelombang pemisah antar bagian. */
export function WaveDivider({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={className} aria-hidden="true" style={flip ? { transform: "scaleY(-1)" } : undefined}>
      <path d="M0 40 C 180 80 360 0 540 30 C 720 60 900 80 1080 40 C 1260 0 1350 20 1440 36 L1440 80 L0 80 Z" fill="currentColor" />
    </svg>
  );
}

/** Kilau kecil (dekorasi). */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.37-2.48V9.66a5.73 5.73 0 0 0-.77-.05A5.69 5.69 0 0 0 4.17 15.3 5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.25-1.48Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
