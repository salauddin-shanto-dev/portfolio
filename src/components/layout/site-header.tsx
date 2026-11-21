"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Monogram } from "@/components/ui/monogram";
import { mainNavigation } from "@/content/navigation";
import { profile } from "@/content/profile";
import { cn, normalizePath } from "@/lib/utils";

function isActive(pathname: string, href: string): boolean {
  const current = normalizePath(pathname);
  const target = normalizePath(href);
  return current === target || current.startsWith(target);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);
  const menuId = useId();

  // Close the mobile menu after client-side navigation.
  if (open && openedAt !== pathname) {
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const toggle = () => {
    setOpenedAt(pathname);
    setOpen((value) => !value);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <Container className="flex h-header items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold tracking-tight text-foreground"
        >
          <Monogram initials={profile.initials} />
          <span>{profile.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {mainNavigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm transition-colors",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls={menuId}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </Container>

      <nav
        id={menuId}
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-border bg-background md:hidden"
      >
        <Container as="ul" className="flex flex-col py-3">
          {mainNavigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between border-b border-border py-3 text-base last:border-b-0",
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                  {active ? (
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </Container>
      </nav>
    </header>
  );
}
