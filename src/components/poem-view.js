import React from "react";
import { Image, Header } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { FETCH_WRITING_BY_ID } from "../graphql/queries";
import {UPDATE_VIEWS} from "../graphql/mutations";
import { useQuery, useMutation } from "@apollo/client";
import Footer from "./footer";
import Spinner from "./spinner";
import moment from "moment";
import avatar from "../assets/avatar.jpeg";

import "../styles/poem-view.css";
import { nanoid } from "nanoid";

const PoemView = () => {
  const { id } = useParams();
  const [updateViews] = useMutation(UPDATE_VIEWS,{
    variables:{
      writingId: id
    }
  });

  const { loading, data } = useQuery(FETCH_WRITING_BY_ID, {
    variables: {
      writingId: id,
    },
    onCompleted: () => updateViews(id)
    ,onError(error) {
      console.log(error);
    },
  });
  
  let component;

  if (loading) {
    component = <Spinner />;
  } else {
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
                srcSet={avatar}
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
                Published in <strong>{compilation}</strong> ??{" "}
                {moment(new Date(parseInt(createdAt))).format("MMM Do YY")}
              </p>
            </div>
            <div className="poem-body">
            {body.replace(/\\n/g, '\n').split('\n').map(paragraph => (
              <p key={nanoid()}>{paragraph}</p>
            ))}
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
