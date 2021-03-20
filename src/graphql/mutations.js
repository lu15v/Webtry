import gql from 'graphql-tag';


export const UPDATE_VIEWS = gql`
    mutation updateViews($writingId: ID! ){
        updateViews(writingId: $writingId)
    }
`