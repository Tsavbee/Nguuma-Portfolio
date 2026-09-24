import { profile } from "@/data/profile";
export function SocialLinks() { return <div className="actions">{profile.socials.map((social) => <a className="button alt" key={social.href} href={social.href}>{social.label}</a>)}</div>; }
