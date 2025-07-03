'use client';

import { ProductGrid } from '@/components/products/ProductGrid';
import { getProducts } from '@/lib/shopify';
import { AnimatedTitle } from '@/components/layout/AnimatedTitle';

export function HomePage({
    products,
}: {
    products: Awaited<ReturnType<typeof getProducts>>;
}) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                padding: 'clamp(0.5rem, 2vw, 1rem)',
                position: 'relative'
            }}
        >
            <ProductGrid products={products} />
            {/* Animated title overlaying the webpage */}
            <div style={{
                position: 'absolute',
                top: 'clamp(3rem, 6vw, 4rem)',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10
            }}>
                <AnimatedTitle />
            </div>
        </div>
    );
} 