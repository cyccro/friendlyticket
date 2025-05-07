import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

export interface FeatureProps {
  icon: React.ReactElement
  title: string;
  description: string;
  className?: string;
};

export default function Feature(props: FeatureProps) {
  return <div className={props.className}>
    <Alert className="w-full">
      {props.icon}
      <AlertTitle>{props.title}</AlertTitle>
      <AlertDescription className="text-gray-500 font-medium">{props.description}</AlertDescription>
    </Alert>
  </div>
}
