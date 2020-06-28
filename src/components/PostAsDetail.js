import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class PostAsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  // componentDidMount()는 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출됩니다. DOM 노드가 있어야 하는 초기화 작업은 이 메서드에서 이루어지면 됩니다. 외부에서 데이터를 불러와야 한다면, 네트워크 요청을 보내기 적절한 위치입니다.
  // 출처 : https://ko.reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    axios
      .get(`http://localhost:8080/posts/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({ post: response.data });
      });
  }

  render() {
    return (
      <div>
        {this.state.post ? (
          <>
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
                  <th>writer</th>
                  <td>{this.state.post.user.name}</td>
                </tr>
              </tbody>
            </table>
            <Link to="/posts">목록</Link>
          </>
        ) : (
          <h3>Loading or Not Found</h3>
        )}
      </div>
    );
  }
}

export default PostAsDetail;
