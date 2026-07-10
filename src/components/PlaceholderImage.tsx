import avatarAndrew from "../assets/avatar-andrew.png.asset.json";
import logoCanvassing from "../assets/logo-canvassing.png.asset.json";
import logoCeleste from "../assets/logo-celeste.png.asset.json";
import logoCelina from "../assets/logo-celina.png.asset.json";
import logoGoclaim from "../assets/logo-goclaim.png.asset.json";
import logoGoodpax from "../assets/logo-goodpax.png.asset.json";
import logoPax from "../assets/logo-pax.png.asset.json";
import logoRez from "../assets/logo-rez.png.asset.json";
import logoSalamander from "../assets/logo-salamander.png.asset.json";

const ASSET_MAP: Record<string, { url: string }> = {
  "logo-canvassing": logoCanvassing,
  "logo-celeste": logoCeleste,
  "logo-celina": logoCelina,
  "logo-goclaim": logoGoclaim,
  "logo-goodpax": logoGoodpax,
  "logo-pax": logoPax,
  "logo-rez": logoRez,
  "logo-salamander": logoSalamander,
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
          className="w-full h-full object-cover"
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
        src={avatarAndrew.url}
        alt="Andrew Kim Joseph"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
