import { getProducts } from '@/lib/shopify';
import { HomePage } from './HomePage';

export default async function Page() {
  const products = await getProducts();

  return <HomePage products={products} />;
}
