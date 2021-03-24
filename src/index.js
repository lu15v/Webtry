import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PoemView from "./components/poem-view";
import Login from "./components/login";
import { Provider } from "./context/context";
import AuthRoute from "./components/auth-roote";
import NewWriting from "./components/new-writing";

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:5000",
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <Provider>
        <Router>
          <Route exact path="/" component={App} />
          <Route exact path="/poem/:id" component={PoemView} />
          <Route exact path="/login" component={Login} />
          <AuthRoute exact path="/new-writing" component={NewWriting}/>
        </Router>
      </Provider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
