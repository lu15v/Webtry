import React, {useContext, useState} from "react";
import PoemCard from "./poem-card";
import { FETCH_WRITINGS_BY_COMPILATION } from "../graphql/queries";
import { useQuery} from "@apollo/client";
import { Context } from "../context/context";
import { nanoid } from 'nanoid';
import Spinner from './spinner';
import Modal from './modal';

import "../styles/poem-list.css";

const PoemList = () => {
  const context = useContext(Context);
  const [open, setOpen] = useState(true);

  const { loading, error, data } = useQuery(FETCH_WRITINGS_BY_COMPILATION, {
    variables: {
      compilation: context.currentCompilation,
    },
    onError(error) {
      console.log(error);
    },
  });
  
  if(error){
    return(
      <div className="poem-list-container">
          <Modal open={open} setOpen={setOpen} header='Error al mostrar los resultados' description="Ocurrio un error al procesar la peticion, por favor intenta de nuevo"/>
      </div>
    )
  }
  if(data && Object.keys(data.getWritingsByCompilation).length === 0){
    return(
      <div className="poem-list-container">
          <Modal open={open} setOpen={setOpen} header='Ups' description="Todavia no hay escritos en esta sección ¡Pero mantente al pendiente, que muy pronto habrá!"/>
      </div>
    )
  }
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
