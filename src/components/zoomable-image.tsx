/* eslint-disable jsx-a11y/no-noninteractive-tabindex -- The scroll region must accept keyboard focus for arrow-key panning. */
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { getLocale } from "@/i18n/locale";
import "@/styles/media-zoom.css";

export function MediaZoom({
  src,
  alt,
  video = false,
}: {
  src: string;
  alt: string;
  video?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const pt = getLocale() === "pt";

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    dialog.current?.showModal();

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        ref={opener}
        aria-label={`${pt ? "Ampliar" : "Enlarge"}: ${alt}`}
        className="media-zoom__open"
        type="button"
        onClick={() => {
          setZoom(1);
          setOpen(true);
        }}
      >
        {video ? (
          pt ? (
            "Ampliar vídeo ↗"
          ) : (
            "Enlarge video ↗"
          )
        ) : (
          <>
            <img alt={alt} loading="lazy" src={src} />
            <span className="media-zoom__hint">
              {pt ? "Toque para ampliar ↗" : "Tap to enlarge ↗"}
            </span>
          </>
        )}
      </button>
      {open &&
        createPortal(
          <dialog
            ref={dialog}
            aria-label={alt}
            className="media-zoom"
            onClose={() => {
              setOpen(false);
              opener.current?.focus({ preventScroll: true });
            }}
          >
            <div className="media-zoom__panel">
              <header>
                <p>{alt}</p>
                <div>
                  {!video && (
                    <>
                      <button
                        aria-label={pt ? "Diminuir" : "Zoom out"}
                        disabled={zoom <= 1}
                        type="button"
                        onClick={() => setZoom(Math.max(1, zoom - 0.5))}
                      >
                        −
                      </button>
                      <span aria-live="polite">{Math.round(zoom * 100)}%</span>
                      <button
                        aria-label={pt ? "Ampliar" : "Zoom in"}
                        disabled={zoom >= 4}
                        type="button"
                        onClick={() => setZoom(Math.min(4, zoom + 0.5))}
                      >
                        +
                      </button>
                    </>
                  )}
                  <button
                    aria-label={pt ? "Fechar" : "Close"}
                    type="button"
                    onClick={() => dialog.current?.close()}
                  >
                    ×
                  </button>
                </div>
              </header>
              {/* Keyboard focus lets visitors scroll the enlarged image with arrow keys. */}
              <div
                aria-label={
                  pt
                    ? "Imagem ampliada; role para explorar"
                    : "Enlarged media; scroll to explore"
                }
                className="media-zoom__viewport"
                tabIndex={0}
              >
                {video ? (
                  <video autoPlay controls muted playsInline src={src} />
                ) : (
                  <img
                    alt={alt}
                    src={src}
                    style={
                      zoom === 1
                        ? undefined
                        : {
                            width: `${zoom * 100}%`,
                            maxWidth: "none",
                            maxHeight: "none",
                          }
                    }
                  />
                )}
              </div>
              {!video && (
                <p className="media-zoom__instructions">
                  {pt
                    ? "Use + para ampliar e role para explorar os detalhes."
                    : "Use + to zoom in and scroll to explore the details."}
                </p>
              )}
            </div>
          </dialog>,
          document.body,
        )}
    </>
  );
}

export const ZoomableImage = MediaZoom;
