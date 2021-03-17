import gql from 'graphql-tag';


export const FETCH_WRITINGS_BY_COMPILATION = gql`
    query($compilation: String!){
        getWritingsByCompilation(compilation: $compilation){
            id
            title
            body
            compilation
            type
            author
            views
            createdAt
        }
    }
`;