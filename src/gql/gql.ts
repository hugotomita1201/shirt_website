/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query getProducts {\n    products(first: 10) {\n      edges {\n        node {\n          id\n          title\n          handle\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          images(first: 1) {\n            edges {\n              node {\n                url\n                altText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetProductsDocument,
    "\n  query getProductByHandle($handle: String!) {\n    product(handle: $handle) {\n      id\n      title\n      handle\n      descriptionHtml\n      priceRange {\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      images(first: 1) {\n        edges {\n          node {\n            url\n            altText\n          }\n        }\n      }\n      variants(first: 10) {\n        edges {\n          node {\n            id\n            title\n            availableForSale\n            price {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetProductByHandleDocument,
    "\n  mutation cartCreate($input: CartInput!) {\n    cartCreate(input: $input) {\n      cart {\n        id\n      }\n    }\n  }\n": typeof types.CartCreateDocument,
    "\n  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        id\n      }\n    }\n  }\n": typeof types.CartLinesAddDocument,
    "\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      id\n      checkoutUrl\n      cost {\n        totalAmount {\n          amount\n          currencyCode\n        }\n      }\n      lines(first: 100) {\n        edges {\n          node {\n            id\n            quantity\n            merchandise {\n              ... on ProductVariant {\n                id\n                title\n                product {\n                  id\n                  title\n                  handle\n                }\n                price {\n                  amount\n                  currencyCode\n                }\n                image {\n                  url\n                  altText\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetCartDocument,
};
const documents: Documents = {
    "\n  query getProducts {\n    products(first: 10) {\n      edges {\n        node {\n          id\n          title\n          handle\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          images(first: 1) {\n            edges {\n              node {\n                url\n                altText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProductsDocument,
    "\n  query getProductByHandle($handle: String!) {\n    product(handle: $handle) {\n      id\n      title\n      handle\n      descriptionHtml\n      priceRange {\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      images(first: 1) {\n        edges {\n          node {\n            url\n            altText\n          }\n        }\n      }\n      variants(first: 10) {\n        edges {\n          node {\n            id\n            title\n            availableForSale\n            price {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProductByHandleDocument,
    "\n  mutation cartCreate($input: CartInput!) {\n    cartCreate(input: $input) {\n      cart {\n        id\n      }\n    }\n  }\n": types.CartCreateDocument,
    "\n  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        id\n      }\n    }\n  }\n": types.CartLinesAddDocument,
    "\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      id\n      checkoutUrl\n      cost {\n        totalAmount {\n          amount\n          currencyCode\n        }\n      }\n      lines(first: 100) {\n        edges {\n          node {\n            id\n            quantity\n            merchandise {\n              ... on ProductVariant {\n                id\n                title\n                product {\n                  id\n                  title\n                  handle\n                }\n                price {\n                  amount\n                  currencyCode\n                }\n                image {\n                  url\n                  altText\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetCartDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProducts {\n    products(first: 10) {\n      edges {\n        node {\n          id\n          title\n          handle\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          images(first: 1) {\n            edges {\n              node {\n                url\n                altText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProducts {\n    products(first: 10) {\n      edges {\n        node {\n          id\n          title\n          handle\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          images(first: 1) {\n            edges {\n              node {\n                url\n                altText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProductByHandle($handle: String!) {\n    product(handle: $handle) {\n      id\n      title\n      handle\n      descriptionHtml\n      priceRange {\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      images(first: 1) {\n        edges {\n          node {\n            url\n            altText\n          }\n        }\n      }\n      variants(first: 10) {\n        edges {\n          node {\n            id\n            title\n            availableForSale\n            price {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProductByHandle($handle: String!) {\n    product(handle: $handle) {\n      id\n      title\n      handle\n      descriptionHtml\n      priceRange {\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      images(first: 1) {\n        edges {\n          node {\n            url\n            altText\n          }\n        }\n      }\n      variants(first: 10) {\n        edges {\n          node {\n            id\n            title\n            availableForSale\n            price {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation cartCreate($input: CartInput!) {\n    cartCreate(input: $input) {\n      cart {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation cartCreate($input: CartInput!) {\n    cartCreate(input: $input) {\n      cart {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      id\n      checkoutUrl\n      cost {\n        totalAmount {\n          amount\n          currencyCode\n        }\n      }\n      lines(first: 100) {\n        edges {\n          node {\n            id\n            quantity\n            merchandise {\n              ... on ProductVariant {\n                id\n                title\n                product {\n                  id\n                  title\n                  handle\n                }\n                price {\n                  amount\n                  currencyCode\n                }\n                image {\n                  url\n                  altText\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      id\n      checkoutUrl\n      cost {\n        totalAmount {\n          amount\n          currencyCode\n        }\n      }\n      lines(first: 100) {\n        edges {\n          node {\n            id\n            quantity\n            merchandise {\n              ... on ProductVariant {\n                id\n                title\n                product {\n                  id\n                  title\n                  handle\n                }\n                price {\n                  amount\n                  currencyCode\n                }\n                image {\n                  url\n                  altText\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;