import Link from "next/link";
export function Button({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) { return <Link className={`button${secondary ? " alt" : ""}`} href={href}>{children}</Link>; }
