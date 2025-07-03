'use client';


import { getCart } from '@/lib/shopify';
import { Dialog, Transition } from '@headlessui/react';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import type { ShopifyCart } from '@/lib/types';
import { Button, Window, WindowHeader, WindowContent } from 'react95';

// Custom Windows 95 styled components
const GroupBox = ({ label, children, style }: { label?: string; children: React.ReactNode; style?: React.CSSProperties }) => (
    <fieldset style={{
        border: '2px inset #f0f0f0',
        margin: '0.5rem 0',
        padding: '0.5rem',
        backgroundColor: '#f0f0f0',
        ...style
    }}>
        {label && (
            <legend style={{
                backgroundColor: '#f0f0f0',
                padding: '0 0.5rem',
                fontSize: '0.9rem',
                fontWeight: 'bold'
            }}>{label}</legend>
        )}
        {children}
    </fieldset>
);

const Separator = ({ style }: { style?: React.CSSProperties }) => (
    <hr style={{
        border: 'none',
        borderTop: '1px solid #c0c0c0',
        borderBottom: '1px solid #ffffff',
        height: '2px',
        margin: '0.5rem 0',
        ...style
    }} />
);

export function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState<ShopifyCart | null>(null);

    useEffect(() => {
        async function fetchCart() {
            const cartId = getCookie('cartId')?.toString();
            if (cartId) {
                const cart = await getCart(cartId);
                setCart(cart);
            }
        }

        if (isOpen) {
            fetchCart();
        }
    }, [isOpen]);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    return (
        <>
            <Button
                aria-label="Open cart"
                onClick={openCart}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    fontSize: '0.9rem'
                }}
            >
                <span style={{ fontSize: '20px' }}>🛒</span>
                <span>Cart</span>
            </Button>

            <Transition show={isOpen}>
                <Dialog onClose={closeCart} className="relative z-50">
                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="opacity-0 backdrop-blur-none"
                        enterTo="opacity-100 backdrop-blur-sm"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="opacity-100 backdrop-blur-sm"
                        leaveTo="opacity-0 backdrop-blur-none"
                    >
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <div style={{
                            position: 'fixed',
                            bottom: 0,
                            right: 0,
                            top: 0,
                            width: '100%',
                            maxWidth: '400px',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Window style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span>🛒 My Cart</span>
                                    <Button
                                        style={{
                                            width: '20px',
                                            height: '18px',
                                            padding: 0,
                                            minWidth: 'auto',
                                            fontSize: '12px'
                                        }}
                                        onClick={closeCart}
                                    >
                                        ×
                                    </Button>
                                </WindowHeader>
                                <WindowContent style={{
                                    padding: '1.5rem 1rem 1rem 1rem',
                                    backgroundColor: '#f0f0f0',
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden'
                                }}>
                                    {!cart || cart.lines.length === 0 ? (
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flex: 1,
                                            textAlign: 'center'
                                        }}>
                                            <p style={{
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                margin: '1rem 0'
                                            }}>
                                                Your cart is empty.
                                            </p>
                                        </div>
                                    ) : (
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%',
                                            gap: '1rem'
                                        }}>
                                            <GroupBox style={{ flex: 1, overflow: 'hidden', marginTop: '0.5rem' }}>
                                                <div style={{
                                                    maxHeight: '300px',
                                                    overflowY: 'auto',
                                                    padding: '0.5rem'
                                                }}>
                                                    {cart.lines.map((item, index) => (
                                                        <div key={item.id}>
                                                            <div style={{
                                                                display: 'flex',
                                                                gap: '0.75rem',
                                                                padding: '0.75rem 0'
                                                            }}>
                                                                <div style={{
                                                                    width: '60px',
                                                                    height: '60px',
                                                                    border: '1px solid #c0c0c0',
                                                                    overflow: 'hidden'
                                                                }}>
                                                                    <Image
                                                                        src={item.merchandise.image.url}
                                                                        alt={
                                                                            item.merchandise.image.altText ||
                                                                            item.merchandise.product.title
                                                                        }
                                                                        width={60}
                                                                        height={60}
                                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                                    />
                                                                </div>
                                                                <div style={{ flex: 1 }}>
                                                                    <div style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                        marginBottom: '0.25rem'
                                                                    }}>
                                                                        <strong style={{ fontSize: '0.9rem' }}>
                                                                            <Link
                                                                                href={`/product/${item.merchandise.product.handle}`}
                                                                                onClick={closeCart}
                                                                                style={{ textDecoration: 'none', color: 'inherit' }}
                                                                            >
                                                                                {item.merchandise.product.title}
                                                                            </Link>
                                                                        </strong>
                                                                        <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                                                                            ${item.merchandise.price.amount}
                                                                        </span>
                                                                    </div>
                                                                    <div style={{ fontSize: '0.8rem', color: '#666' }}>
                                                                        {item.merchandise.title}
                                                                    </div>
                                                                    <div style={{ fontSize: '0.8rem', color: '#666' }}>
                                                                        Qty: {item.quantity}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {index < cart.lines.length - 1 && (
                                                                <Separator style={{ margin: '0.5rem 0' }} />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </GroupBox>

                                            <GroupBox label="Total">
                                                <div style={{ padding: '0.75rem' }}>
                                                    <div style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        marginBottom: '0.5rem',
                                                        fontSize: '1rem',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        <span>Subtotal:</span>
                                                        <span>${cart.totalAmount}</span>
                                                    </div>
                                                    <div style={{
                                                        fontSize: '0.8rem',
                                                        color: '#666',
                                                        marginBottom: '1rem'
                                                    }}>
                                                        Shipping and taxes calculated at checkout.
                                                    </div>
                                                    <a
                                                        href={cart.checkoutUrl}
                                                        style={{ textDecoration: 'none', width: '100%' }}
                                                    >
                                                        <Button
                                                            style={{
                                                                width: '100%',
                                                                padding: '0.75rem',
                                                                fontSize: '1rem',
                                                                fontWeight: 'bold',
                                                                textAlign: 'center'
                                                            }}
                                                        >
                                                            💳 Checkout
                                                        </Button>
                                                    </a>
                                                </div>
                                            </GroupBox>
                                        </div>
                                    )}
                                </WindowContent>
                            </Window>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    );
} 