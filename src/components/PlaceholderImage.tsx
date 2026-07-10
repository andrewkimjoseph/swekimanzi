import avatarAndrew from "../assets/avatar-andrew.png.asset.json";

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
      className={`${aspectClass} w-full bg-muted border border-border rounded-[2px] flex items-center justify-center shadow-brutal-sm ${className}`}
    >
      <span className="font-display text-[11px] uppercase tracking-widest text-foreground/70 px-2 text-center">
        [REPLACE: {label}]
      </span>
    </div>
  );
}

export function AvatarPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      data-asset-id="avatar-andrew"
      className={`aspect-square w-full bg-surface border border-border rounded-[2px] overflow-hidden shadow-brutal ${className}`}
    >
      <img
        src={avatarAndrew.url}
        alt="Andrew Kim Joseph"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
