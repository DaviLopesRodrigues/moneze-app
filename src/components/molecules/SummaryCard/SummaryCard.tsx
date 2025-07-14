import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type SummaryCardTypes = {
  description: string;
  amount: string;
  iconBadge: React.ReactNode;
  textBadge?: string;
  footerDescription?: string | React.ReactNode;
  footerComplementDescription?: string;
};

export function SummaryCard({
  description,
  amount,
  iconBadge,
  textBadge,
  footerDescription,
  footerComplementDescription,
}: SummaryCardTypes) {
  return (
    <Card className="bg-card w-80">
      <CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {amount}
        </CardTitle>
        <CardAction>
          <Badge variant={"outline"}>
            {iconBadge}
            {textBadge}
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <p className="line-clamp-1 flex gap-2 font-medium">
          {footerDescription}
        </p>
        <p className="text-muted-foreground">{footerComplementDescription}</p>
      </CardFooter>
    </Card>
  );
}
