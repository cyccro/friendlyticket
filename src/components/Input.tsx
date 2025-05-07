import { Input } from "./ui/input";

export function FtcksInput(props: React.ComponentProps<'input'>) {
  return <Input className="bg-transparent backdrop-blur-xs border-primary placeholder:text-gray-500 text-white" {...props} />
}
