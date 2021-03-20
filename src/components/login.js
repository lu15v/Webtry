import React,{useState} from "react";
import { Button, Form } from "semantic-ui-react";
import {useForm} from "../util/hooks";

import "../styles/login.css";

const Login = () => {
    const [errors, setErrors] = useState({});

    const { onChange, onSubmit, values} = useForm(() => console.log("hola"),{
        username: '',
        password: '',
    });

  return (
    <div className="login-container">
      <div className="corral">
        <Form onSubmit={onSubmit}>
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

          <Button type="submit" primary>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
