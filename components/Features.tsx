import { useTranslations } from "next-intl";
import AnimateIn from "./AnimateIn";

const featureIcons = ["🛠️", "🤖", "📋", "🎯", "🧰", "⚡"];

export default function Features() {
  const t = useTranslations("features");
  const items = [0, 1, 2, 3, 4, 5];

  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <h2 className="mb-16 text-center text-3xl font-bold text-foreground md:text-4xl">
            {t("title")}
          </h2>
        </AnimateIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <AnimateIn key={i} delay={i * 0.08}>
              <div className="group rounded-2xl border border-[#1a2744] bg-[#0d1525] p-6 transition-all hover:border-primary/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                <span className="mb-4 block text-3xl">{featureIcons[i]}</span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {t(`items.${i}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {t(`items.${i}.description`)}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
