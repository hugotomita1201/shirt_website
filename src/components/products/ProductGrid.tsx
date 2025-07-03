'use client';

import type { ShopifyProduct } from '@/lib/types';
import { ProductCard } from './ProductCard';
import { Window, WindowContent, WindowHeader, Button } from 'react95';
import { Cart } from '@/components/layout/Cart';

interface ProductGridProps {
    products: ShopifyProduct[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
    return (
        <Window style={{ width: '100%', maxWidth: '95vw', minHeight: '100vh' }}>
            <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>🌐 Internet Explorer</span>
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
            <WindowContent style={{ padding: '1rem', backgroundColor: 'white', minHeight: 'calc(100vh - 60px)' }}>
                {/* Space for animated title window overlay */}
                <div style={{
                    height: '120px',
                    marginBottom: '2rem',
                    position: 'relative'
                }}>
                </div>

                {/* Three boxes below the title - positioned outside the overlay area */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'clamp(0.5rem, 2vw, 1rem)',
                    alignItems: 'center',
                    marginBottom: '2rem'
                }}>
                    {/* About us box */}
                    <Button
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            fontSize: '0.9rem'
                        }}
                    >
                        <span style={{ fontSize: '16px' }}>📄</span>
                        <span>About us</span>
                    </Button>

                    {/* Instagram box */}
                    <a
                        href="https://www.instagram.com/bulletholevintage/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                fontSize: '0.9rem'
                            }}
                        >
                            <span style={{ fontSize: '16px' }}>📷</span>
                            <span>Instagram</span>
                        </Button>
                    </a>

                    {/* Cart box */}
                    <Cart />
                </div>

                {/* Products section */}
                <div>
                    <h2 style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                        color: '#000080',
                        margin: '0 0 1rem 0'
                    }}>
                        Our Products ({products.length} item{products.length !== 1 ? 's' : ''})
                    </h2>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(180px, 45vw, 220px), 1fr))',
                            gap: 'clamp(1rem, 3vw, 1.5rem)',
                        }}
                    >
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </WindowContent>
        </Window>
    );
}; 