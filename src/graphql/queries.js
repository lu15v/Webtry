import gql from 'graphql-tag';


export const FETCH_WRITINGS_BY_COMPILATION = gql`
    query($compilation: String!){
        getWritingsByCompilation(compilation: $compilation){
            id
            title
            body
            compilation
            type
            views
            createdAt
            author{
                id
            }
        }
    }
`;

export const FETCH_AUTHOR_BY_ID = gql`
    query($authorId: ID!){
        getAuthorById(authorId: $authorId){
            id
            username
            firstName
            surname
            createdAt
        }
    }
`;

export const FETCH_WRITING_BY_ID = gql`
    query($writingId: ID!){
        getWritingById(writingId: $writingId){
            title
            body
            compilation
            createdAt
            views
            author{
                username
            }
        }
    }
`;