import GQL_QUERY_PAGE_COLLECTION from '@/graphql/pageCollection'
import type { TypePageCollection } from '@Types/TypePageCollection'

const SITE_PAGE_REFERENCES = ['about', 'contacts', 'privacy']

export const useSitePageLinks = () => {
    const runtimeConfig = useRuntimeConfig()

    return useAsyncQuery<TypePageCollection>(GQL_QUERY_PAGE_COLLECTION, {
        limit: runtimeConfig.public.limitQueryGql,
        urlReferenceIn: SITE_PAGE_REFERENCES,
    })
}
