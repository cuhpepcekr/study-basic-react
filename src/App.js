import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import Home from "./components/Home";
import PostAsDetail from "./components/PostAsDetail";
import UserToCreate from "./components/UserToCreate";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/usertocreate">회원가입</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
        <hr />
        <Route path="/" component={Home} exact />
        <Route path="/usertocreate" component={UserToCreate} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/posts/:id" component={PostAsDetail} exact />
      </div>
    );
  }
}

export default App;
