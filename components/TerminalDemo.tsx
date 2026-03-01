"use client";

export default function TerminalDemo() {
  return (
    <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-card-border shadow-2xl shadow-primary/10">
      {/* Title bar */}
      <div className="flex items-center gap-2.5 bg-card px-5 py-4">
        <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
        <span className="ml-4 text-sm text-muted">Terminal — zsh</span>
      </div>
      {/* Content */}
      <div className="bg-code-bg px-7 py-6 font-mono text-base leading-loose">
        <p className="text-muted">
          <span className="text-success">~</span>{" "}
          <span className="text-foreground">$ yduck</span>
        </p>
        <div className="mt-4 max-w-sm rounded-xl border border-card-border bg-card/50 px-6 py-5">
          <p className="mb-4 text-lg font-semibold text-primary">
            🦆 yduck
          </p>
          <div className="flex flex-col gap-2.5 text-[15px]">
            <p className="text-primary">
              {">"} 🛠️  CLI 工具安装
            </p>
            <p className="text-muted">
              {"  "} 🤖  AI 扩展配置
            </p>
            <p className="text-muted">
              {"  "} 📦  套餐一键装
            </p>
            <p className="text-muted">
              {"  "} 🔍  搜索配方
            </p>
            <p className="text-muted">
              {"  "} ⚕️  环境检查
            </p>
          </div>
        </div>
        <p className="mt-4 text-muted">
          <span className="animate-pulse text-primary">▊</span>
        </p>
      </div>
    </div>
  );
}
