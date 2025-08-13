import { products } from "../data/products";
import ProductItem from "../components/ProductItem";

export default function ProductListPage() {
  return (
    <main className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((item) => (
        <ProductItem key={item.id} name={item.name} price={item.price} />
      ))}
    </main>
  );
}
