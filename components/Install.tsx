"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import AnimateIn from "./AnimateIn";

export default function Install() {
  const t = useTranslations("install");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(t("command"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <AnimateIn>
          <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
            {t("title")}
          </h2>

          <div className="relative overflow-hidden rounded-xl border border-card-border bg-code-bg">
            <div className="flex items-center justify-between px-5 py-4">
              <code className="font-mono text-sm text-foreground md:text-base">
                <span className="text-success">$</span> {t("command")}
              </code>
              <button
                onClick={handleCopy}
                className="ml-4 shrink-0 rounded-md border border-card-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-primary hover:text-primary"
              >
                {copied ? t("copied") : t("copy")}
              </button>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-sm text-muted">{t("alt_title")}</p>
            <a
              href="https://github.com/tc6-01/YangDuck/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary transition-colors hover:text-primary/80"
            >
              {t("alt_link")}
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
