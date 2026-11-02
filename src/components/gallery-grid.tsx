"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import type { GalleryItem } from "@/lib/data";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const open = (index: number) => {
    setActive(index);
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  const step = useCallback(
    (delta: number) =>
      setActive((i) => (i === null ? i : (i + delta + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, step]);

  const current = active === null ? null : items[active];

  return (
    <>
      {/* CSS колони дават masonry подредба без JS — снимките са с различни пропорции. */}
      <ul className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <li key={item.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`Отвори в цял екран: ${item.alt}`}
              className="group relative block w-full overflow-hidden bg-graphite-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <>
                  <video
                    src={item.src}
                    poster={item.poster}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    aria-hidden
                    className="h-auto w-full"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-graphite-950/20">
                    <span className="flex size-14 items-center justify-center rounded-full bg-accent text-graphite-950">
                      <Play className="ml-1 size-6" aria-hidden />
                    </span>
                  </span>
                </>
              )}
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-label="Галерия"
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-graphite-950/95 p-0 text-white backdrop:bg-graphite-950/80"
      >
        {current && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 py-3">
              <p className="text-sm text-white/70">
                {(active ?? 0) + 1} / {items.length}
              </p>
              <button
                type="button"
                onClick={close}
                aria-label="Затвори"
                className="flex size-11 items-center justify-center hover:text-accent-soft"
              >
                <X className="size-7" aria-hidden />
              </button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4">
              {current.type === "image" ? (
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  width={current.width}
                  height={current.height}
                  sizes="100vw"
                  className="max-h-full w-auto object-contain"
                />
              ) : (
                <video
                  key={current.src}
                  src={current.src}
                  poster={current.poster}
                  controls
                  autoPlay
                  playsInline
                  aria-label={current.alt}
                  className="max-h-full w-full max-w-4xl"
                />
              )}
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Предишна"
                className="absolute left-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center bg-graphite-950/60 hover:text-accent-soft"
              >
                <ChevronLeft className="size-8" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Следваща"
                className="absolute right-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center bg-graphite-950/60 hover:text-accent-soft"
              >
                <ChevronRight className="size-8" aria-hidden />
              </button>
            </div>
            <p className="px-4 pb-5 text-center text-sm text-white/80">{current.alt}</p>
          </div>
        )}
      </dialog>
    </>
  );
}
