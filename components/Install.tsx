"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import AnimateIn from "./AnimateIn";

export default function Install() {
  const t = useTranslations("install");
  const [copiedMain, setCopiedMain] = useState(false);
  const [copiedAlt, setCopiedAlt] = useState(false);

  const copy = async (text: string, setter: (v: boolean) => void) => {
    await navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <section id="install" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <AnimateIn>
          <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
            {t("title")}
          </h2>

          {/* Homebrew (primary) */}
          <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-[#0a1128]/80 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
            <div className="flex items-center justify-between px-5 py-4">
              <code className="font-mono text-sm text-foreground md:text-base">
                <span className="text-success">$</span> {t("command")}
              </code>
              <button
                onClick={() => copy(t("command"), setCopiedMain)}
                className="ml-4 shrink-0 rounded-md border border-card-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-primary hover:text-primary"
              >
                {copiedMain ? t("copied") : t("copy")}
              </button>
            </div>
          </div>

          {/* curl (alternative) */}
          <div className="mt-6">
            <p className="mb-2 text-sm text-muted">{t("alt_title")}</p>
            <div className="relative overflow-hidden rounded-lg border border-[#1a2744]/60 bg-[#0a1128]/50">
              <div className="flex items-center justify-between px-4 py-3">
                <code className="font-mono text-xs text-muted md:text-sm">
                  <span className="text-success">$</span> {t("alt_command")}
                </code>
                <button
                  onClick={() => copy(t("alt_command"), setCopiedAlt)}
                  className="ml-4 shrink-0 rounded-md border border-card-border px-2.5 py-1 text-xs text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  {copiedAlt ? t("copied") : t("copy")}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <a
              href="https://github.com/tc6-01/YangDuck/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary transition-colors hover:text-primary/80"
            >
              {t("releases_link")}
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
