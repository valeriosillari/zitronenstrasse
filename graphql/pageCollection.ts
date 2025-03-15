const GQL_QUERY_PAGE_COLLECTION = gql`
    query GQL_QUERY_PAGE_COLLECTION($limit: Int!, $urlReferenceIn: [String]) {
        pageCollection(
            limit: $limit
            where: { urlReference_in: $urlReferenceIn }
            order: title_ASC
        ) {
            total
            items {
                sys {
                    id
                }
                title
                urlReference
            }
        }
    }
`

export default GQL_QUERY_PAGE_COLLECTION
