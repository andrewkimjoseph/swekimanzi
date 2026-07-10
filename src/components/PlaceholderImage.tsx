const ASSET_MAP: Record<string, { url: string; fit?: "cover" | "contain" }> = {
  "logo-canvassing": { url: "/logo-canvassing.png" },
  "logo-celeste": { url: "/logo-celeste.png" },
  "logo-celina": { url: "/logo-celina.png" },
  "logo-goclaim": { url: "/logo-goclaim.png" },
  "logo-goodpax": { url: "/logo-goodpax.png" },
  "logo-partify": { url: "/logo-partify.png" },
  "logo-pax": { url: "/logo-pax.png" },
  "logo-rez": { url: "/logo-rez.png" },
  "logo-salamander": { url: "/logo-salamander.png" },
  "photo-team-canvassing": { url: "/photo-team-canvassing.jpg", fit: "cover" },
  "photo-salamander-community": { url: "/photo-salamander-community.jpg", fit: "cover" },
  "badge-bwc7": { url: "/badge-bwc7.png", fit: "contain" },
  "badge-celo": { url: "/badge-celo.png", fit: "contain" },
  "badge-gooddollar": { url: "/badge-gooddollar.png", fit: "contain" },
  "badge-prezenti": { url: "/badge-prezenti.png", fit: "contain" },
};

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
  const asset = ASSET_MAP[assetId];
  return (
    <div
      data-asset-id={assetId}
      className={`${aspectClass} w-full bg-surface border border-border rounded-[2px] overflow-hidden flex items-center justify-center shadow-brutal-sm ${className}`}
    >
      {asset ? (
        <img
          src={asset.url}
          alt={label}
          className={`w-full h-full ${asset.fit === "contain" ? "object-contain p-4" : "object-cover"}`}
        />
      ) : (
        <span className="font-display text-[11px] uppercase tracking-widest text-foreground/70 px-2 text-center">
          [REPLACE: {label}]
        </span>
      )}
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
        src="/avatar-andrew.png"
        alt="Andrew Kim Joseph"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
