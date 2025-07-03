export type ShopifyProductVariant = {
    id: string;
    title: string;
    availableForSale: boolean;
    price: {
        amount: string;
        currencyCode: string;
    };
};

export type ShopifyProduct = {
    id: string;
    handle: string;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    altText: string | null;
    variants: ShopifyProductVariant[];
};

export type ShopifyCartItem = {
    id: string;
    quantity: number;
    merchandise: {
        id: string;
        title: string;
        product: {
            handle: string;
            title: string;
        };
        price: {
            amount: string;
            currencyCode: string;
        };
        image: {
            url: string;
            altText: string | null;
        };
    };
};

export type ShopifyCart = {
    id: string;
    checkoutUrl: string;
    totalAmount: string;
    lines: ShopifyCartItem[];
}; 