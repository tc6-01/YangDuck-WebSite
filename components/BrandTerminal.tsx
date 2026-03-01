"use client";

const ASCII_DUCK = `    __
   ( o>
   //\\
   V_/_`;

export default function BrandTerminal() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-primary/20 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
      {/* Title bar */}
      <div className="flex items-center gap-2.5 bg-[#0d1525] px-5 py-4">
        <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
        <span className="ml-4 text-sm text-muted">yduck — brand</span>
      </div>
      {/* Content */}
      <div className="flex flex-col items-center bg-[#0a1128]/80 px-8 py-10 backdrop-blur-sm">
        <pre className="font-mono text-lg leading-tight text-primary">
          {ASCII_DUCK}
        </pre>
        <div className="mt-6 flex items-center gap-2">
          <span className="font-mono text-lg text-success">&gt;_</span>
          <span className="text-2xl font-bold tracking-tight text-foreground">
            yduck
          </span>
        </div>
        <p className="mt-2 text-center text-sm text-muted">
          Mac Dev Setup CLI
        </p>
      </div>
    </div>
  );
}
