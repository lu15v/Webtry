import React, { useState, useContext } from "react";
import { Form, TextArea, Button, Select } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { CREATE_WRITING } from "../graphql/mutations";
import { useForm } from "../util/hooks";
import { Context } from "../context/context";
import { Link } from "react-router-dom";
import Modal from './modal';

import "../styles/new-writing.css";

const compilation = [{ key: "Default", text: "Default", value: "default" },
                     { key: "Esto soy", text: "Esto soy", value: "Esto soy" },
                     { key: "Sobre el amor", text: "Sobre el amor", value: "Sobre el amor" },
                     { key: "Para un corazón roto", text: "Para un corazón roto", value: "Para un corazón roto" },
                     { key: "Vol 1", text: "Vol 1", value: "Vol 1" },
                     { key: "Vol 2", text: "Vol 2", value: "Vol 2" },
                     { key: "Vol 3", text: "Vol 3", value: "Vol 3" }];

const typeOfWriting = [
  { key: "poem", text: "Poema", value: "poem" },
  { key: "writing", text: "Escrito", value: "writing" },
  { key: "song", text: "Canción", value: "song" },
];

const NewWriting = () => {
  const {
    user: { username },
  } = useContext(Context);

  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);
  const [open, setOpen] = useState(true);

  const { onChange, onSubmit, values } = useForm(() => submitWriting(), {
    title: "",
    body: "",
    compilation: "",
    type: "",
    username: username,
    createdAt: ""
  });

  const [createWriting, { loading }] = useMutation(CREATE_WRITING, {
    update(_, { data }) {
      console.log(data);
      setSaved(true);
    },
    onError(err) {
    //   console.log(JSON.stringify(err, null, 2));
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function submitWriting() {
    console.log(values)
    createWriting();
  }

  return (
    <div className="writing-container">
      <div className="corral-writing">
        {saved && <Modal open={open} setOpen={setOpen}/>}
        <h1>Las grandes ideas, comienzan siendo escritas</h1>
        <Form
          onSubmit={onSubmit}
          noValidate
          className={loading ? "loading" : ""}
        >
          <Form.Input
            label="Titulo"
            placeholder="Titulo.."
            name="title"
            type="text"
            value={values.title}
            error={errors.title}
            onChange={onChange}
          />
          <Form.Field
            control={Select}
            label="Colección"
            placeholder="Colleccion.."
            name="compilation"
            options={compilation}
            value={values.compilation}
            onChange={onChange}
          />
          <Form.Field
            control={Select}
            label="Tipo"
            placeholder="Tipo.."
            name="type"
            options={typeOfWriting}
            value={values.type}
            onChange={onChange}
          />
          <Form.Input
            label="Fecha"
            placeholder="Fecha.."
            name="createdAt"
            type="text"
            value={values.createdAt}
            error={errors.createdAt}
            onChange={onChange}
          />
          <TextArea
            placeholder="La grandes ideas, comienzan siendo escritas"
            name="body"
            value={values.body}
            style={{ minHeight: 100 }}
            onChange={onChange}
          />
          {errors.body && (
            <div className="ui red message">
              <ul className="list">
                <li>{errors.body}</li>
              </ul>
            </div>
          )}
          <Button type="submit" primary>
            Crear
          </Button>
          <Button type="submit" color="red" as={Link} to="/">
            Volver
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewWriting;
