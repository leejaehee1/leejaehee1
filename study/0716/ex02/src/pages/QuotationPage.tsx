// itcr
// 임타클반

import QuotationCard from "../components/QuotationCard";
import { quotationMock } from "../data/quotationMock";

export default function QuotationPage() {
  return (
    <main>
      {quotationMock.map((item) => (
        <QuotationCard
          carName={item.carName}
          year={item.year}
          price={item.price}
        />
      ))}
    </main>
  );
}
