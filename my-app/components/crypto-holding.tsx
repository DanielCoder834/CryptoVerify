import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const holdings = [
  { symbol: "BTC", amount: 10000 },
  { symbol: "ETH", amount: 50000 },
  { symbol: "USDT", amount: 100000 },
];

export function CryptoHoldings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crypto Holdings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {holdings.map((holding) => (
            <div
              key={holding.symbol}
              className="flex items-center justify-between"
            >
              <div className="font-medium">{holding.symbol}</div>
              <div className="font-mono">
                ${holding.amount.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
