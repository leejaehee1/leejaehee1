type Product = { name: string; price: number };

export default function ProductItem({ name, price }: Product) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="font-semibold">{name}</h2>
      <p className="text-gray-600">{price.toLocaleString()}원</p>
    </div>
  );
}
