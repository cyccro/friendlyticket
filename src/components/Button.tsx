import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "./ui/button";

/**
 * Default transparent Friendly Tickets button
 */
export function FtcksButtonTransparent({
  className,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  return <Button className={"bg-transparent text-primary hover:bg-transparent hover:shadow-sm hover:shadow-primary shadow-none cursor-pointer duration-150 " + className} {...props}></Button>
}
/**
 * Default colored Friendly Tickets button
 */
export function FtcksButton({
  className,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  return <Button className="bg-primary text-white hover:shadow-md shadow-primary-hover shadow-none hover:cursor-pointer duration-150 transition" {...props}></Button>

}
