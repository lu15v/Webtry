import React, {useContext} from "react";
import PoemCard from "./poem-card";
import { FETCH_WRITINGS_BY_COMPILATION } from "../graphql/queries";
import { useQuery} from "@apollo/client";
import { Context } from "../context/context";
import { nanoid } from 'nanoid';
import Spinner from './spinner';

import "../styles/poem-list.css";

const PoemList = () => {
  const context = useContext(Context);

  const { loading, data } = useQuery(FETCH_WRITINGS_BY_COMPILATION, {
    variables: {
      compilation: context.currentCompilation,
    },
    onError(error) {
      console.log(error);
    },
  });

  return (
      loading ?  <Spinner/> : (
        <div className="poem-list-container">
          {data && data.getWritingsByCompilation &&
            data.getWritingsByCompilation.map(writing =>{
              return <PoemCard key={nanoid()}writingInfo={writing} />
            })
          }
        </div>
      )
  );
};

export default PoemList;
