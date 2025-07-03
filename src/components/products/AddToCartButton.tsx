'use client';

import { addToCart, createCart } from '@/lib/shopify';
import { getCookie, setCookie } from 'cookies-next';
import { useState } from 'react';
import { Button } from '@/components/ui/Windows95Components';

export function AddToCartButton({
    variantId,
}: {
    variantId: string | undefined;
}) {
    const [isLoading, setIsLoading] = useState(false);

    async function handleAddToCart() {
        if (!variantId) return;

        setIsLoading(true);
        let cartId = getCookie('cartId')?.toString();

        if (!cartId) {
            cartId = await createCart();
            setCookie('cartId', cartId);
        }

        await addToCart(cartId, [{ merchandiseId: variantId, quantity: 1 }]);
        setIsLoading(false);
        // You can use the `useCart` hook here to show the cart
        alert('Added to cart!');
    }

    return (
        <Button
            onClick={handleAddToCart}
            disabled={isLoading || !variantId}
            style={{ marginTop: '2rem', width: '100%' }}
        >
            {isLoading ? 'Adding...' : 'Add to cart'}
        </Button>
    );
} 