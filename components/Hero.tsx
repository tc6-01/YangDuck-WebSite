import { useTranslations } from "next-intl";
import AnimateIn from "./AnimateIn";
import TerminalDemo from "./TerminalDemo";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16">
      {/* Glow effect */}
      <div className="pointer-events-none absolute top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      <AnimateIn className="flex flex-col items-center text-center">
        <h1 className="mb-4 text-6xl font-bold tracking-tight text-foreground md:text-8xl">
          <span className="text-primary">{t("title")}</span>
        </h1>
        <p className="mb-3 max-w-2xl text-xl text-foreground md:text-2xl">
          {t("subtitle")}
        </p>
        <p className="mb-8 max-w-xl text-lg text-muted">
          {t("description")}
        </p>

        <div className="mb-16 flex gap-4">
          <a
            href="#install"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-primary/80"
          >
            {t("cta_start")}
          </a>
          <a
            href="https://github.com/tc6-01/YangDuck"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-card-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {t("cta_github")} →
          </a>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.2}>
        <TerminalDemo />
      </AnimateIn>
    </section>
  );
}
