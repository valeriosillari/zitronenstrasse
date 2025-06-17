const GQL_QUERY_SINGLE_SPOT_BY_ID = gql`
    query GQL_QUERY_SINGLE_SPOT_BY_ID($id: String!) {
        singleSpot(id: $id) {
            id
            title
            image {
                title
                url
                # webP (available on CDN)
                webpUrl: url(transform: { format: WEBP })
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
