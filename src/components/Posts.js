import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: null };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/posts/`).then((response) => {
      this.setState({ posts: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <div>
          {this.state.posts ? (
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>title</th>
                  <th>writer</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>
                      <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </td>
                    <td>{post.user.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3>Loading or Not Found</h3>
          )}
        </div>
      </div>
    );
  }
}

export default Posts;
