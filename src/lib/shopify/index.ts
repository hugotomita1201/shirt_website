import {
    cartCreateMutation,
    cartLinesAddMutation,
    getCartQuery,
    getProductByHandleQuery,
    getProductsQuery,
    shopifyFetch,
} from '@/lib/shopify/queries';
import type {
    ShopifyCart,
    ShopifyCartItem,
    ShopifyProduct,
    ShopifyProductVariant,
} from '@/lib/types';
import type {
    CartCreateMutation,
    CartLinesAddMutation,
    GetCartQuery,
    GetProductByHandleQuery,
    GetProductsQuery,
} from '@/gql/graphql';

function formatPrice(price: { amount: string; currencyCode: string }) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: price.currencyCode,
    }).format(parseFloat(price.amount));
}

function reshapeCart(cart: GetCartQuery['cart']): ShopifyCart {
    if (!cart) {
        throw new Error('Cart not found');
    }
    return {
        id: cart.id,
        checkoutUrl: cart.checkoutUrl as string,
        totalAmount: formatPrice({
            amount: cart.cost.totalAmount.amount as string,
            currencyCode: cart.cost.totalAmount.currencyCode as string
        }),
        lines: cart.lines.edges.map(
            ({ node }): ShopifyCartItem => ({
                id: node.id,
                quantity: node.quantity,
                merchandise: {
                    id: node.merchandise.id,
                    title: node.merchandise.title,
                    product: {
                        handle: node.merchandise.product.handle,
                        title: node.merchandise.product.title,
                    },
                    price: {
                        amount: node.merchandise.price.amount as string,
                        currencyCode: node.merchandise.price.currencyCode as string,
                    },
                    image: {
                        url: node.merchandise.image?.url as string,
                        altText: node.merchandise.image?.altText || null,
                    },
                },
            }),
        ),
    };
}

function reshapeProduct(
    product: GetProductByHandleQuery['product'],
): ShopifyProduct {
    if (!product) {
        throw new Error('Product not found');
    }

    return {
        id: product.id,
        handle: product.handle,
        title: product.title,
        description: product.descriptionHtml,
        price: formatPrice({
            amount: product.priceRange.minVariantPrice.amount as string,
            currencyCode: product.priceRange.minVariantPrice.currencyCode as string
        }),
        imageUrl: product.images.edges[0].node.url as string,
        altText: product.images.edges[0].node.altText || null,
        variants: product.variants.edges.map(
            ({ node }): ShopifyProductVariant => ({
                id: node.id,
                title: node.title,
                availableForSale: node.availableForSale,
                price: {
                    amount: node.price.amount as string,
                    currencyCode: node.price.currencyCode as string,
                },
            }),
        ),
    };
}

function reshapeProducts(
    products: GetProductsQuery['products'],
): ShopifyProduct[] {
    return products.edges.map(({ node }) => ({
        id: node.id,
        handle: node.handle,
        title: node.title,
        description: '',
        price: formatPrice({
            amount: node.priceRange.minVariantPrice.amount as string,
            currencyCode: node.priceRange.minVariantPrice.currencyCode,
        }),
        imageUrl: node.images.edges[0].node.url as string,
        altText: node.images.edges[0].node.altText || null,
        variants: [],
    }));
}

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
    const data = await shopifyFetch<GetCartQuery>({
        query: getCartQuery,
        variables: { cartId },
        cache: 'no-store',
    });

    if (!data.cart) {
        return null;
    }

    return reshapeCart(data.cart);
}

export async function createCart(): Promise<string> {
    const res = await shopifyFetch<CartCreateMutation>({
        query: cartCreateMutation,
        variables: {
            input: {},
        },
        cache: 'no-store',
    });

    if (!res.cartCreate?.cart.id) {
        throw new Error('Failed to create cart');
    }

    return res.cartCreate.cart.id;
}

export async function addToCart(
    cartId: string,
    lines: { merchandiseId: string; quantity: number }[],
) {
    await shopifyFetch<CartLinesAddMutation>({
        query: cartLinesAddMutation,
        variables: {
            cartId,
            lines,
        },
        cache: 'no-store',
    });
}

export async function getProductByHandle(
    handle: string,
): Promise<ShopifyProduct> {
    const data = await shopifyFetch<GetProductByHandleQuery>({
        query: getProductByHandleQuery,
        variables: { handle },
        cache: 'no-store',
    });
    return reshapeProduct(data.product);
}

export async function getProducts(): Promise<ShopifyProduct[]> {
    const data = await shopifyFetch<GetProductsQuery>({
        query: getProductsQuery,
        cache: 'no-store',
    });
    return reshapeProducts(data.products);
} 