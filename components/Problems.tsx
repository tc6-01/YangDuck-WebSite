import { useTranslations } from "next-intl";
import AnimateIn from "./AnimateIn";

const icons = {
  problem: ["🔄", "⚙️", "❓"],
  solution: ["📋", "🎯", "🎁"],
};

export default function Problems() {
  const t = useTranslations("problems");
  const items = [0, 1, 2];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <h2 className="mb-16 text-center text-3xl font-bold text-foreground md:text-4xl">
            {t("title")}
          </h2>
        </AnimateIn>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="rounded-2xl border border-[#1a2744] bg-[#0d1525] p-6 transition-all hover:border-primary/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                {/* Problem */}
                <div className="mb-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-xl">{icons.problem[i]}</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-red-400">
                      ✕
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {t(`items.${i}.problem`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {t(`items.${i}.problem_desc`)}
                  </p>
                </div>

                <div className="mb-6 border-t border-primary/10" />

                {/* Solution */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-xl">{icons.solution[i]}</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-success">
                      ✓
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    {t(`items.${i}.solution`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {t(`items.${i}.solution_desc`)}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
