import { getProductByHandle } from '@/lib/shopify';
import { ProductDetails } from './ProductDetails';

interface ProductPageParams {
    params: {
        handle: string;
    };
}

export default async function ProductPage({ params }: ProductPageParams) {
    const product = await getProductByHandle(params.handle);

    return <ProductDetails product={product} />;
} 