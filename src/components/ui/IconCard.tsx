export function IconCard({ title, children }: { title: string; children: React.ReactNode }) { return <article className="card"><h3>{title}</h3><p>{children}</p></article>; }
