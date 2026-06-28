"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LocaleSwitcher } from "@/components/i18n/locale-switcher";
import { BrandLockup } from "@/components/layout/brand-lockup";
import { useSite } from "@/components/providers/site-provider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { locale, dict, brandLine, navLinks, demoUrl, appSignupUrl } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        data-capcon-navbar
        className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:h-20 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-6 lg:px-8"
        aria-label={dict.a11y.mainNav}
      >
        <Link
          href={`/${locale}`}
          className="flex min-w-0 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          aria-label={`${brandLine} – ${dict.a11y.home}`}
        >
          <BrandLockup logoSize={40} showTagline className="min-w-0" priority />
        </Link>

        <ul
          data-capcon-nav-links
          className="hidden min-w-0 items-center justify-center gap-5 xl:gap-7 lg:flex"
        >
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-navy-950"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          data-capcon-nav-actions
          className="flex items-center justify-end gap-1.5 sm:gap-2"
        >
          <LocaleSwitcher className="hidden shrink-0 lg:inline-flex" />
          <Button
            render={<Link href={demoUrl} />}
            size="sm"
            className="hidden shrink-0 bg-indigo-600 px-3 text-white hover:bg-indigo-700 lg:inline-flex xl:px-4"
          >
            {dict.nav.bookDemo}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden"
                  aria-label={dict.a11y.openMenu}
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetHeader>
                <SheetTitle className="sr-only">{brandLine}</SheetTitle>
                <BrandLockup logoSize={72} />
              </SheetHeader>
              <ul className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-slate-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <LocaleSwitcher className="w-fit" />
                <Button
                  render={
                    <Link
                      href={appSignupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    />
                  }
                  variant="ghost"
                  className="w-full"
                  size="lg"
                >
                  {dict.nav.startTrial}
                </Button>
                <Button
                  render={
                    <Link href={demoUrl} onClick={() => setOpen(false)} />
                  }
                  className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
                  size="lg"
                >
                  {dict.nav.bookDemo}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
