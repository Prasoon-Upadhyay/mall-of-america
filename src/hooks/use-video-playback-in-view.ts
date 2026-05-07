import { type RefObject, useEffect } from "react";
import { useInView } from "framer-motion";

/**
 * Plays a muted video while it is meaningfully visible and pauses it offscreen.
 *
 * @param videoRef - Ref attached to the video element.
 * @returns Whether the video is currently in view.
 *
 * @example
 * ```tsx
 * const videoRef = useRef<HTMLVideoElement>(null);
 * const isInView = useVideoPlaybackInView(videoRef);
 * ```
 */
export function useVideoPlaybackInView(videoRef: RefObject<HTMLVideoElement | null>) {
  const isInView = useInView(videoRef, { amount: 0.35 });

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isInView) {
      void video.play().catch(() => undefined);
      return;
    }

    video.pause();
  }, [isInView, videoRef]);

  return isInView;
}
