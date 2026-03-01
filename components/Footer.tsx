import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-card-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-sm text-muted md:flex-row md:justify-between">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/tc6-01/YangDuck"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {t("github")}
          </a>
          <a
            href="https://github.com/tc6-01/YangDuck"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {t("docs")}
          </a>
          <span>{t("license")}</span>
        </div>
        <p>{t("made_with")} ♥</p>
      </div>
    </footer>
  );
}
