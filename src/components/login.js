import React, { useState, useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import { useForm } from "../util/hooks";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";
import {Context} from "../context/context";
import {nanoid} from 'nanoid';

import "../styles/login.css";

const Login = (props) => {
  const [errors, setErrors] = useState({});
  const {userLogin} = useContext(Context);

  const { onChange, onSubmit, values } = useForm(() => loginUser(), {
    username: "",
    password: "",
  });

  const [login, { loading }] = useMutation(LOGIN, {
    update(_, { data: { login: userData } }) {
      userLogin(userData);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function loginUser() {
    login();
  }

  return (
    <div className="login-container">
      <div className="corral">
        <Form
          onSubmit={onSubmit}
          noValidate
          className={loading ? "loading" : ""}
        >
          <h1>Webtry.</h1>
          <Form.Input
            label="Username"
            placeholder="Username.."
            name="username"
            type="text"
            value={values.username}
            error={errors.username}
            onChange={onChange}
          />
          <Form.Input
            label="Password"
            placeholder="Password.."
            name="password"
            type="password"
            value={values.password}
            error={errors.password}
            onChange={onChange}
          />

          <Button type="submit" primary className={values.username && values.password ? "enabled" : "disabled"}>
            Login
          </Button>
        </Form>
        {Object.keys(errors).filter((key) => key === "general").length > 0 && (
          <div className="ui error message">
            <ul className="list">
              {Object.values(errors).map((error) => (
                <li key={nanoid()}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
