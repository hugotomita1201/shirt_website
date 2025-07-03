'use client';

import { AddToCartButton } from '@/components/products/AddToCartButton';
import type { ShopifyProduct } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import {
    Window,
    WindowContent,
    WindowHeader,
    GroupBox,
    Separator,
    Button,
} from 'react95';

export function ProductDetails({ product }: { product: ShopifyProduct }) {
    const firstVariantId = product.variants.find(
        (v) => v.availableForSale,
    )?.id;

    return (
        <div style={{ padding: '2rem' }}>
            <Window style={{ width: '100%' }}>
                <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>{product.title}.exe</span>
                    <div style={{ display: 'flex', gap: '2px' }}>
                        <Button
                            style={{
                                width: 'clamp(16px, 4vw, 24px)',
                                height: 'clamp(14px, 3.5vw, 20px)',
                                padding: 0,
                                minWidth: 'auto',
                                fontSize: 'clamp(10px, 2.5vw, 12px)'
                            }}
                            onClick={() => { }}
                        >
                            -
                        </Button>
                        <Button
                            style={{
                                width: 'clamp(16px, 4vw, 24px)',
                                height: 'clamp(14px, 3.5vw, 20px)',
                                padding: 0,
                                minWidth: 'auto',
                                fontSize: 'clamp(10px, 2.5vw, 12px)'
                            }}
                            onClick={() => { }}
                        >
                            □
                        </Button>
                        <Button
                            style={{
                                width: 'clamp(16px, 4vw, 24px)',
                                height: 'clamp(14px, 3.5vw, 20px)',
                                padding: 0,
                                minWidth: 'auto',
                                fontSize: 'clamp(10px, 2.5vw, 12px)'
                            }}
                            onClick={() => { }}
                        >
                            ×
                        </Button>
                    </div>
                </WindowHeader>
                <WindowContent>
                    {/* Back to Store button */}
                    <div style={{ marginBottom: '1rem' }}>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <Button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span>←</span>
                                <span>Back to Store</span>
                            </Button>
                        </Link>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <GroupBox label="Image" style={{ flex: '1 1 300px' }}>
                            <Image
                                src={product.imageUrl}
                                alt={product.altText || product.title}
                                width={400}
                                height={400}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </GroupBox>
                        <div style={{ flex: '1 1 300px' }}>
                            <h1>{product.title}</h1>
                            <p style={{ fontSize: '1.5rem', margin: '1rem 0' }}>
                                {product.price}
                            </p>
                            <Separator />
                            <GroupBox
                                label="Description"
                                style={{ margin: '1rem 0' }}
                            >
                                <div
                                    style={{ padding: '0.5rem', lineHeight: '1.4' }}
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            </GroupBox>
                            <AddToCartButton variantId={firstVariantId} />
                        </div>
                    </div>
                </WindowContent>
            </Window>
        </div>
    );
} 