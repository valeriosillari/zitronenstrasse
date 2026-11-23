// where tip:
// https://stackoverflow.com/questions/66675721/is-it-possible-to-filter-a-collection-based-on-a-collection-field-on-the-content

const GQL_QUERY_PAGE_BY_URL_REFERENCE = gql`
    query GQL_QUERY_PAGE_BY_URL_REFERENCE(
        $limit: Int!
        $urlReference: String!
    ) {
        pageCollection(limit: $limit, where: { urlReference: $urlReference }) {
            items {
                title
                urlReference
                description {
                    json
                }
            }
        }
    }
`

export default GQL_QUERY_PAGE_BY_URL_REFERENCE
