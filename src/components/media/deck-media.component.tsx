import { useEffect, useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { useVideoPlaybackInView } from "../../hooks/use-video-playback-in-view";

type DeckMediaProps = {
  src: string;
  loading?: "eager" | "lazy";
  fit?: "cover" | "contain";
};

const videoPattern = /\.(mp4|webm)(\?.*)?$/i;

/**
 * Checks whether a media URL should render as video.
 *
 * @param src - Media URL or asset token.
 * @returns Whether the source points to a supported video file.
 *
 * @example
 * ```ts
 * isVideoMedia("https://example.com/clip.mp4");
 * ```
 */
export function isVideoMedia(src: string) {
  return videoPattern.test(src);
}

/**
 * Renders deck media as an image, scroll-aware video, or temporary asset stub.
 *
 * @param props - Media source and loading configuration.
 * @param props.src - Image or video URL.
 * @param props.loading - Image loading strategy.
 * @param props.fit - Object-fit behavior for image and video media.
 * @returns A fitted media element for deck frames.
 *
 * @example
 * ```tsx
 * <DeckMedia src="/videos/why-moa.mp4" />
 * ```
 */
export function DeckMedia({ src, loading = "lazy", fit = "cover" }: DeckMediaProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    setStatus("loading");
  }, [src]);

  const mediaClassName = [
    "deck-media-element",
    fit === "contain" ? "object-contain" : "object-cover",
    status === "ready" ? "is-ready" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="deck-media-shell">
      {status !== "ready" ? <MediaLoadingState hasError={status === "error"} /> : null}
      {isVideoMedia(src) ? (
        <VideoMedia
          className={mediaClassName}
          src={src}
          onError={() => setStatus("error")}
          onReady={() => setStatus("ready")}
        />
      ) : (
        <img
          className={mediaClassName}
          src={src}
          alt=""
          loading={loading}
          decoding="async"
          onError={() => setStatus("error")}
          onLoad={() => setStatus("ready")}
        />
      )}
    </div>
  );
}

/**
 * Renders a muted looping video with in-view playback control.
 *
 * @param props - Video source and readiness handlers.
 * @param props.src - Public video URL.
 * @returns A fitted video element.
 *
 * @example
 * ```tsx
 * <VideoMedia src="/videos/pitch-tenants.mp4" onReady={handleReady} onError={handleError} />
 * ```
 */
function VideoMedia({
  src,
  className,
  onError,
  onReady,
}: Pick<DeckMediaProps, "src"> & {
  className: string;
  onError: () => void;
  onReady: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoPlaybackInView(videoRef);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      onCanPlay={onReady}
      onError={onError}
      onLoadedData={onReady}
    />
  );
}

/**
 * Renders a neutral loading/error state for remote media.
 *
 * @param props - Loading state props.
 * @param props.hasError - Whether media loading failed.
 * @returns A non-content placeholder while media resolves.
 *
 * @example
 * ```tsx
 * <MediaLoadingState hasError={false} />
 * ```
 */
function MediaLoadingState({ hasError }: { hasError: boolean }) {
  return (
    <div className="deck-media-loader absolute inset-0 grid place-items-center">
      {hasError ? (
        <span>Media unavailable</span>
      ) : (
        <LoaderCircle className="animate-spin text-(--gold)" size={28} aria-hidden="true" />
      )}
    </div>
  );
}
