import React, { Component } from "react";
import axios from "axios";

class UserToCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      user: { ...this.state.user, [event.target.name]: event.target.value },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const user = this.state.user;

    axios.post(`http://localhost:8080/users`, user).then((response) => {
      alert("회원가입이 성공했습니다.");
      this.props.history.goBack();
    });
  };
  handleReset = (event) => {
    this.setState({ user: null });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="username">username</label>
                </th>
                <td>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="password">password</label>
                </th>
                <td>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="name">name</label>
                </th>
                <td>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">가입</button>
          <button type="reset">초기화</button>
        </form>
      </div>
    );
  }
}

export default UserToCreate;
