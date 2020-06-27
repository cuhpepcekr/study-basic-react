import React, { Component } from "react";
import { Link } from "react-router-dom";

const initialPosts = [
  {
    id: 1,
    title: "테스트제목1",
    content: "테스트내용1",
    writer: "테스트작성자1",
  },
  {
    id: 2,
    title: "테스트제목2",
    content: "테스트내용2",
    writer: "테스트작성자2",
  },
  {
    id: 3,
    title: "테스트제목3",
    content: "테스트내용3",
    writer: "테스트작성자3",
  },
];

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: initialPosts, selectedId: null };
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <div>
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
                  <td>{post.writer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Posts;
