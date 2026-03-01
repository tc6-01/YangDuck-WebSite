"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const otherLocale = locale === "zh" ? "en" : "zh";
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: t("features") },
    { href: "#install", label: t("install") },
    {
      href: "https://github.com/tc6-01/YangDuck",
      label: t("docs"),
      external: true,
    },
    {
      href: "https://github.com/tc6-01/YangDuck",
      label: t("github"),
      external: true,
    },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#1a2744] bg-[#080c18]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">🦆</span>
          <span className="text-lg font-semibold text-foreground">yduck</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
          <Link
            href={`/${otherLocale}`}
            className="rounded-md border border-card-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-primary hover:text-primary"
          >
            {otherLocale === "zh" ? "中文" : "EN"}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-card-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <Link
              href={`/${otherLocale}`}
              className="text-sm text-muted transition-colors hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {otherLocale === "zh" ? "中文" : "English"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
