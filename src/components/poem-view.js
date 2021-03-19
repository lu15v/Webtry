import React from "react";
import { Image, Header } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { FETCH_WRITING_BY_ID } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import Footer from "./footer";
import Spinner from "./spinner";
import moment from "moment";

import "../styles/poem-view.css";

const PoemView = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(FETCH_WRITING_BY_ID, {
    variables: {
      writingId: id,
    },
    onError(error) {
      console.log(error);
    },
  });

  let component;

  if (loading) {
    component = <Spinner />;
  } else {
    console.log(data)
    const { title, body, compilation, createdAt, author } = data.getWritingById;

    component = (
      <div className="container poem-view-container">
        <div className="poem-header">
          <div className="webtry-title-container">
            <div className="webtry-title">
              <Header as={Link} to="/">
                Webtry.
              </Header>
            </div>
          </div>
          <div className="poem-title-container">
            <div className="poem-title">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
        <div className="panel-left">
          <div className="profile-container">
            <div className="photo-picture">
              <Image
                src="https://miro.medium.com/fit/c/262/262/1*-AnRurxYM1u0PRMIR60Oyg.jpeg"
                size="small"
              />
            </div>
            <div className="author-name">
              <span>{author.username}</span>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="poem-container">
            <div className="poem-desc">
              <p>
                Published in <strong>{compilation}</strong> · {moment(new Date(parseInt(createdAt))).format("MMM Do YY")}
              </p>
            </div>
            <div className="poem-body">
              <p>
                {body}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return component;
};

export default PoemView;
