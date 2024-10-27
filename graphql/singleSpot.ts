const GQL_QUERY_SINGLE_SPOT_BY_ID = gql`
    query GQL_QUERY_SINGLE_SPOT_BY_ID($id: String!) {
        singleSpot(id: $id) {
            id
            title
            image {
                title
                url
            }
            imageCredits
            addressStreet
            urlWebsite
            urlFacebook
            urlInstagram
        }
    }
`

export default GQL_QUERY_SINGLE_SPOT_BY_ID
