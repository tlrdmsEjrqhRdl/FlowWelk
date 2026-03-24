export default function Page() {
  return (
    <div className="mx-auto mt-16 max-w-3xl px-6">
      <section className="fw-surface rounded-[2.5rem] p-10">
        <span className="fw-label text-brand-muted">FlowWerk Brand</span>
        <h1 className="fw-title mt-3 text-brand-text">FlowWerk</h1>
        <p className="fw-subtitle mt-2 text-brand-primary-soft">
          효율적인 팀 협업의 시작, 플로우워크
        </p>
        <p className="fw-body mt-6 text-brand-muted">
          Deep Dark & Electric Blue 테마가 Tailwind 토큰으로 저장되었습니다.
        </p>
      </section>
      <div className="mt-6 flex gap-3">
        <button className="rounded-2xl bg-brand-primary px-4 py-2 text-sm font-bold text-white shadow-brand-soft">
          Primary
        </button>
        <button className="rounded-2xl bg-brand-success px-4 py-2 text-sm font-bold text-white">
          Success
        </button>
        <button className="rounded-2xl bg-brand-danger px-4 py-2 text-sm font-bold text-white">
          Danger
        </button>
      </div>
      <p className="fw-body mt-4 text-brand-muted/80">
        Typography 기준: title(4xl italic), subtitle(xl), label(11px uppercase),
        body(sm medium)
      </p>
    </div>
  )
}
