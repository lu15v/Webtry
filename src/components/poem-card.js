import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";
import { FETCH_AUTHOR_BY_ID } from "../graphql/queries";
import "../styles/poem-card.css";
import { useQuery } from "@apollo/client";

const PoemCard = ({ writingInfo: { title, author, body, createdAt, id, views } }) => {
  const { data } = useQuery(FETCH_AUTHOR_BY_ID, {
    variables: {
      authorId: author.id,
    },
    onError(error) {
      console.log(error);
    },
  });

  const username = data && data.getAuthorById && data.getAuthorById.username;

  return (
    <Card as={Link} to={`/poem/${id}`}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{`${username} - ${moment(
          new Date(parseInt(createdAt))
        ).format("MMM Do YY")}`}</Card.Meta>
        <Card.Description>
          {body.substring(0, 100).concat("...")}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>
          <i className="eye icon"></i>{views}
        </span>
        <span className="right floated">
          <i className="heart outline like icon"></i>
          17 likes
        </span>
      </Card.Content>
    </Card>
  );
};

export default PoemCard;
