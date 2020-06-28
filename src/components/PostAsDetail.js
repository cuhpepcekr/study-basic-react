import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostAsDetail extends Component {
  render() {
    const id = this.props.match.params.id;

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>id</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th>title</th>
              <td>?</td>
            </tr>
            <tr>
              <th>content</th>
              <td>?</td>
            </tr>
            <tr>
              <th>writer</th>
              <td>?</td>
            </tr>
          </tbody>
        </table>
        <Link to="/posts">목록</Link>
      </div>
    );
  }
}

export default PostAsDetail;
