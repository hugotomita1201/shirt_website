import { getProductByHandle } from '@/lib/shopify';
import { ProductDetails } from './ProductDetails';

interface ProductPageParams {
    params: Promise<{
        handle: string;
    }>;
}

export default async function ProductPage({ params }: ProductPageParams) {
    const { handle } = await params;
    const product = await getProductByHandle(handle);

    return <ProductDetails product={product} />;
} 