import GQL_QUERY_PAGE_COLLECTION from '@/graphql/pageCollection'
import type { TypePageCollection } from '@Types/TypePageCollection'

export const usePageList = async (urlReferenceIn: string[]) => {
    const runtimeConfig = useRuntimeConfig()

    const { data } = await useAsyncQuery<TypePageCollection>(
        GQL_QUERY_PAGE_COLLECTION,
        {
            limit: runtimeConfig.public.limitQueryGql,
            urlReferenceIn,
        }
    )

    const pages = computed(() => data.value?.pageCollection?.items ?? [])

    return { pages }
}
