const GQL_QUERY_SINGLE_SPOT_COLLECTION = gql`
    query GQL_QUERY_SINGLE_SPOT_COLLECTION($limit: Int!) {
        singleSpotCollection(limit: $limit, order: id_ASC) {
            total
            items {
                sys {
                    id
                }
                id
                address {
                    lat
                    lon
                }
            }
        }
    }
`

export default GQL_QUERY_SINGLE_SPOT_COLLECTION
