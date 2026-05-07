import { useState } from "react";
import { LoaderCircle } from "lucide-react";

type HeroVideoProps = {
  asset: {
    video: string;
  };
};

/**
 * Renders the hero media layer.
 *
 * @param props - Hero media props.
 * @param props.asset - Hero video asset reference.
 * @returns Hero background media.
 *
 * @example
 * ```tsx
 * <HeroVideo asset={propertyData.heroAsset} />
 * ```
 */
export function HeroVideo({ asset }: HeroVideoProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  return (
    <div className="hero-media absolute inset-0" aria-hidden="true">
      {status !== "ready" ? (
        <div className="hero-video-loader absolute inset-0 grid place-items-center">
          {status === "error" ? (
            <span>Video unavailable</span>
          ) : (
            <LoaderCircle className="animate-spin text-[var(--gold)]" size={34} aria-hidden="true" />
          )}
        </div>
      ) : null}
      <video
        className={status === "ready" ? "h-full w-full object-cover opacity-100" : "h-full w-full object-cover opacity-0"}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setStatus("ready")}
        onError={() => setStatus("error")}
        onLoadedData={() => setStatus("ready")}
      >
        <source src={asset.video} />
      </video>
    </div>
  );
}
