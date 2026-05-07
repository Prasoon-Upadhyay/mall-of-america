import { useEffect, useRef } from "react";

/**
 * Registers a window event listener while always calling the latest handler.
 *
 * @param eventName - Window event name to subscribe to.
 * @param handler - Function invoked when the event fires.
 * @param enabled - Whether the listener should be attached.
 * @returns Nothing.
 *
 * @example
 * ```ts
 * useWindowEvent("keydown", handleKeyDown, isEnabled);
 * ```
 */
export function useWindowEvent<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  enabled = true,
) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!enabled) return;

    const listener = (event: WindowEventMap[K]) => handlerRef.current(event);
    window.addEventListener(eventName, listener);

    return () => window.removeEventListener(eventName, listener);
  }, [enabled, eventName]);
}
