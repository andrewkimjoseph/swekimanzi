interface PlaceholderImageProps {
  assetId: string;
  label: string;
  className?: string;
  aspect?: "square" | "video" | "wide";
}

export function PlaceholderImage({
  assetId,
  label,
  className = "",
  aspect = "square",
}: PlaceholderImageProps) {
  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "wide"
        ? "aspect-[1200/630]"
        : "aspect-square";
  return (
    <div
      data-asset-id={assetId}
      className={`${aspectClass} w-full bg-[#c9beff] border-2 border-black rounded-[2px] flex items-center justify-center shadow-[3px_3px_0_0_#000000] ${className}`}
    >
      <span className="font-display text-[11px] uppercase tracking-widest text-black/70 px-2 text-center">
        [REPLACE: {label}]
      </span>
    </div>
  );
}

export function AvatarPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      data-asset-id="avatar-andrew"
      className={`aspect-square w-full bg-[#ffdbfd] border-2 border-black rounded-[2px] flex items-center justify-center shadow-[4px_4px_0_0_#000000] ${className}`}
    >
      <span className="font-display font-extrabold text-6xl md:text-7xl text-black tracking-tight">
        AKJ
      </span>
    </div>
  );
}
