import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InformationPanelProps } from "@/interfaces/InformationPanelProps";

const InformationPanel = ({
  title,
  description,
  bgColor,
  image,
}: InformationPanelProps) => {
  return (
    <Card className="w-80 xl:flex-1 group" style={{ backgroundColor: bgColor }}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex justify-center items-center">
      <img
          className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
          width={300}
          src={image}
          alt={title}
        />
      </CardContent>
    </Card>
  );
};

export default InformationPanel;
