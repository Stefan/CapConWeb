"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { XIcon } from "lucide-react";
import { useCallback, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

type ScreenshotLightboxProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title?: string;
  layoutId: string;
};

const noopSubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

export function ScreenshotLightbox({
  open,
  onClose,
  src,
  alt,
  title,
  layoutId,
}: ScreenshotLightboxProps) {
  const mounted = useIsMounted();
  const reduceMotion = useReducedMotion();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, handleKeyDown]);

  if (!mounted) return null;

  const transition = {
    duration: reduceMotion ? 0.12 : 0.35,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={title ?? alt}
        >
          <motion.button
            type="button"
            aria-label="Close screenshot"
            className="absolute inset-0 bg-white/15 backdrop-blur-[2px] supports-backdrop-filter:bg-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            onClick={onClose}
          />

          <motion.figure
            layoutId={reduceMotion ? undefined : layoutId}
            className="relative z-[1] flex max-h-[min(90vh,56rem)] w-full max-w-[min(92vw,72rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/30"
            initial={reduceMotion ? { opacity: 0, scale: 0.96 } : false}
            animate={reduceMotion ? { opacity: 1, scale: 1 } : undefined}
            exit={reduceMotion ? { opacity: 0, scale: 0.96 } : undefined}
            transition={transition}
          >
            {title ? (
              <figcaption className="border-b border-slate-100 bg-slate-50/95 px-4 py-2.5 text-sm font-medium text-slate-700">
                {title}
              </figcaption>
            ) : null}
            <div className="flex min-h-0 flex-1 items-center justify-center bg-slate-50 p-2 sm:p-3">
              <img
                src={src}
                alt={alt}
                className="max-h-[min(82vh,50rem)] w-full object-contain"
                decoding="async"
              />
            </div>
          </motion.figure>

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-[2] inline-flex size-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            aria-label="Close screenshot"
          >
            <XIcon className="size-5" aria-hidden />
          </button>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
