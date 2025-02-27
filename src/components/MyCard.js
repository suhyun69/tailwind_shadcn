import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MyCard() {
  return (
    <Card className="bg-card text-card-foreground p-6 rounded-xl border shadow">
      <CardHeader>
        <CardTitle>ShadCN 카드</CardTitle>
      </CardHeader>
      <CardContent>
        <p>이 카드는 ShadCN의 테마를 따릅니다.</p>
      </CardContent>
    </Card>
  );
}
