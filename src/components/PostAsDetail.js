import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostAsDetail extends Component {
  // 생성 시
  constructor(props) {
    console.log("PostAsDetail constructor start");
    super(props);
    this.state = {
      post: { id: 0, title: "?", content: "?", writername: "?" },
    };
    console.log("PostAsDetail constructor end this.state", this.state);
  }

  // 생성 시, 수정 시
  static getDerivedStateFromProps(props, state) {
    console.log(
      "PostAsDetail getDerivedStateFromProps props",
      props,
      "state",
      state
    );

    return null;
  }

  // 수정 시
  // 반환 값에 따라서 랜더링 여부 결정.
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "PostAsDetail shouldComponentUpdate",
      "nextProps",
      nextProps,
      "nextState",
      nextState,
      "this.state.post.id",
      this.state.post.id
    );

    return true;
  }

  // 수정 시
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "PostAsDetail getSnapshotBeforeUpdate prevProps",
      prevProps,
      "prevState",
      prevState,
      "this.state.post.id",
      this.state.post.id
    );

    return null;
  }

  // 생성 시
  componentDidMount() {
    console.log(
      "PostAsDetail componentDidMount this.state.post.id",
      this.state.post.id
    );
  }

  // 수정 시
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "PostAsDetail componentDidUpdate",
      "prevProps",
      prevProps,
      "prevState",
      prevState,
      "snapshot",
      snapshot,
      "this.state.post.id",
      this.state.post.id
    );
  }

  // 제거 시
  componentWillUnmount() {
    console.log(
      "PostAsDetail componentWillUnmount this.state.post.id",
      this.state.post.id
    );
  }

  // 생성 시, 수정 시
  render() {
    console.log("PostAsDetail render this.state.post.id", this.state.post.id);

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>id</th>
              <td>{this.state.post.id}</td>
            </tr>
            <tr>
              <th>title</th>
              <td>{this.state.post.title}</td>
            </tr>
            <tr>
              <th>content</th>
              <td>{this.state.post.content}</td>
            </tr>
            <tr>
              <th>writername</th>
              <td>{this.state.post.writername}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/posts">목록</Link>
        <br />
        <Link to="/posts/1">1</Link>
        <br />
        <Link to="/posts/2">2</Link>
        <br />
        <Link to="/posts/3">3</Link>
      </div>
    );
  }
}

export default PostAsDetail;
