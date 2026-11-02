"use client";

import { useId, useState, useSyncExternalStore } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Must match Tailwind's `md` breakpoint used in the classes below.
const DESKTOP_QUERY = "(min-width: 768px)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(DESKTOP_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

// Text is always visible from `md` up via CSS, so the server snapshot can
// assume mobile without causing a flash on desktop.
function useIsDesktop() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false
  );
}

function Collapsible({
  id,
  expanded,
  children,
}: {
  id: string;
  expanded: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      inert={!expanded}
      className={cn(
        "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none md:grid-rows-[1fr]",
        expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}
    >
      <div className="min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}

// On phones the title toggles the text; on desktop everything stays open.
export function MobileDisclosure({
  title,
  titleClassName,
  between,
  children,
}: {
  title: string;
  titleClassName?: string;
  between?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const isDesktop = useIsDesktop();
  const expanded = open || isDesktop;
  const panelId = useId();

  return (
    <>
      <h3 className={titleClassName}>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          tabIndex={isDesktop ? -1 : undefined}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-start justify-between gap-4 text-left md:pointer-events-none"
        >
          {title}
          <ChevronDown
            aria-hidden
            className={cn(
              "mt-1 size-5 shrink-0 text-accent transition-transform duration-300 md:hidden",
              open && "rotate-180"
            )}
          />
        </button>
      </h3>
      {between}
      <Collapsible id={panelId} expanded={expanded}>
        {children}
      </Collapsible>
    </>
  );
}

// Shows the first paragraph and hides the rest behind a toggle on phones.
export function MobileReadMore({
  paragraphs,
  className,
}: {
  paragraphs: string[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const isDesktop = useIsDesktop();
  const expanded = open || isDesktop;
  const panelId = useId();
  const [first, ...rest] = paragraphs;

  return (
    <div className={className}>
      <p>{first}</p>
      {rest.length > 0 && (
        <>
          <Collapsible id={panelId} expanded={expanded}>
            <div className="space-y-5 pt-5">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Collapsible>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent-dark md:hidden"
          >
            {open ? "Скрий" : "Прочетете още"}
            <ChevronDown
              aria-hidden
              className={cn("size-4 transition-transform duration-300", open && "rotate-180")}
            />
          </button>
        </>
      )}
    </div>
  );
}
