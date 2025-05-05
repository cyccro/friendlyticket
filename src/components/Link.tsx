import Link from "next/link";
import { ReactNode } from "react";

export interface FtcksLinkProps {
  href: string;
  children: ReactNode;
}
/**
 * Default styled Friendly Tickets Link
 */
export default function FtcksLink(props: FtcksLinkProps) {
  return <Link href={props.href} className="text-gray-500 hover:text-primary duration-150">{props.children}</Link>
}
