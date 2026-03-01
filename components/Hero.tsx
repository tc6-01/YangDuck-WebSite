import { useTranslations } from "next-intl";
import AnimateIn from "./AnimateIn";
import BrandTerminal from "./BrandTerminal";
import TerminalDemo from "./TerminalDemo";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      {/* Nebula glow */}
      <div className="pointer-events-none absolute top-1/4 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary/6 blur-[120px]" />

      <AnimateIn className="flex flex-col items-center text-center">
        <p className="mb-4 max-w-2xl text-xl text-foreground md:text-2xl">
          {t("subtitle")}
        </p>
        <p className="mb-10 max-w-xl text-lg text-muted">
          {t("description")}
        </p>
      </AnimateIn>

      {/* Dual terminal layout */}
      <AnimateIn delay={0.15}>
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
          <BrandTerminal />
          <TerminalDemo />
        </div>
      </AnimateIn>

      {/* CTA buttons below terminals */}
      <AnimateIn delay={0.3} className="mt-12 flex gap-4">
        <a
          href="#install"
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-[#080c18] transition-colors hover:bg-primary/80"
        >
          {t("cta_start")}
        </a>
        <a
          href="https://github.com/tc6-01/YangDuck"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {t("cta_github")} →
        </a>
      </AnimateIn>
    </section>
  );
}
