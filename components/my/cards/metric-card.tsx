import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const MetricCard = ({
  desciption,
  total
}: {
  desciption: string;
  total: number;
}) => {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{desciption}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {total}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default MetricCard;
