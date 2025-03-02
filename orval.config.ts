import {defaultConfig} from 'orval'

export default defineConfig ({
    api: {
        input: {
            target: 'openapi/openapi-docs.yaml',
        }
        output: {
            target: 'src/gen/endpoints',
            schemas: 'src/gen/models',
            mode: 'tag-split',
            client: 'swr',
            override: {
                query: {
                    useSuspenseQuery: true,
                    useMutation: true,
                },
                mutator: {
                    path: 'src/lib/apiClient.ts',
                    name: 'customInstance',
                },
            },
            clean: true,
        },
    },
    zod: {
        input: {
            target: 'openapi/openapi-docs.yaml',
        },
        output: {
            mode: 'tags-split',
            client: 'zod',
            target: 'src/gen/endpoints',
            fileExtension: '.zod.ts',
            override: {
                zod: {
                    generate: {
                        param: true,
                        query: true,
                        header: true,
                        body: true,
                        response: true,
                    },
                    coerce: {
                        body: true,
                    },
                },
            },
        },
    },
})