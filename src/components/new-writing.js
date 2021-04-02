import React, { useState, useContext } from "react";
import { Form, TextArea, Button, Select } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { CREATE_WRITING } from "../graphql/mutations";
import { useForm } from "../util/hooks";
import { Context } from "../context/context";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

import "../styles/new-writing.css";

const compilation = [{ key: "default", text: "Default", value: "default" }];

const typeOfWriting = [
  { key: "poem", text: "Poema", value: "poem" },
  { key: "writing", text: "Escrito", value: "writing" },
];

const NewWriting = () => {
  const {
    user: { username },
  } = useContext(Context);

  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(() => submitWriting(), {
    title: "",
    body: "",
    compilation: "",
    type: "",
    username: username,
  });

  const [createWriting, { loading }] = useMutation(CREATE_WRITING, {
    update(_, { data }) {
      console.log(data);
    },
    onError(err) {
    //   console.log(JSON.stringify(err, null, 2));
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function submitWriting() {
    createWriting();
  }

  return (
    <div className="writing-container">
      <div className="corral-writing">
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
