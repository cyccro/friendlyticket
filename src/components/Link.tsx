import Link from "next/link";
import { ReactNode } from "react";

/**
 * Default styled Friendly Tickets Link
 */
export default function FtcksLink(props: React.ComponentProps<'link'>) {
  return <Link className="text-gray-500 hover:text-primary duration-150" {...props}>{props.children}</Link>
}
