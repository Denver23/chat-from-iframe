import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="nav">
            <Link to="/">Home page</Link>
            <Link to="/page1">Fetch json</Link>
          </div>
          <Switch>
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="/">
              <p>Welcome to home page!</p>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

function Page1() {
  const [jsonObject, setJsonObject] = useState("");

  function fetchJson() {
    axios
      .get("http://localhost:4000/api/json")
      .then((response) => {
        const jsonString = JSON.stringify(response.data);
        setJsonObject(jsonString);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <code>{jsonObject}</code>
      </p>
      <a
        className="App-link"
        href="#"
        rel="noopener noreferrer"
        onClick={() => {
          fetchJson();
        }}
      >
        Click to fetch data from server
      </a>
    </>
  );
}

export default App;
