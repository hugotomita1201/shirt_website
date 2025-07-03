'use client';

import type { ShopifyProduct } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'react95';

interface ProductCardProps {
    product: ShopifyProduct;

}

export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <Link
            href={`/product/${product.handle}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <Button
                style={{ width: '100%', height: '100%', flexDirection: 'column' }}
            >
                <div style={{ height: 200, position: 'relative', width: '100%', overflow: 'hidden', padding: '0.5rem' }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                        <Image
                            src={product.imageUrl}
                            alt={product.altText || product.title}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
                <div
                    style={{
                        padding: '0.5rem',
                        textAlign: 'left',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flexGrow: 1,
                    }}
                >
                    <p>{product.title}</p>
                    <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>
                        {product.price}
                    </p>
                </div>
            </Button>
        </Link>
    );
}; 