"use client";

export default function TerminalDemo() {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-primary/20 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
      {/* Title bar */}
      <div className="flex items-center gap-2.5 border-b border-primary/10 bg-[#0d1525] px-5 py-4">
        <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
        <span className="ml-4 text-sm text-muted">Terminal — zsh</span>
      </div>
      {/* Content */}
      <div className="bg-[#0a1128]/80 px-7 py-6 font-mono text-base leading-loose backdrop-blur-sm">
        <p className="text-muted">
          <span className="text-success">~</span>{" "}
          <span className="text-foreground">$ yduck</span>
        </p>
        <div className="mt-4 max-w-sm rounded-xl border border-primary/15 bg-[#0d1525]/60 px-6 py-5">
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
