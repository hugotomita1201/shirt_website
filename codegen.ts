import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: {
        [`https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json`]: {
            headers: {
                'X-Shopify-Storefront-Access-Token': process.env
                    .NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN as string,
            },
        },
    },
    documents: ['src/**/*.ts', 'src/**/*.tsx'],
    generates: {
        './src/gql/': {
            preset: 'client',
            presetConfig: {
                fragmentMasking: false,
            },
            config: {
                useTypeImports: true,
                enumsAsTypes: true,
                skipTypename: true,
                defaultScalarType: 'string',
            },
        },
    },
};

export default config; 