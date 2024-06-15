import { Card } from "@/components/ui/card";
import Link from "next/link";

type LandingCardProps = {
  link: string;
  count: number;
  type: string;
};

export const LandingCard = ({ link, count, type }: LandingCardProps) => {
  return (
    <Card className="h-32 grid place-items-center text-3xl font-medium uppercase">
      <Link href={link}>
        {count} {type}
      </Link>
    </Card>
  );
};
