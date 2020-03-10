import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./styles.css";

import { Home } from "./component/Home";
import { User } from "./component/User";
import { Contact } from "./component/Contact";
import { Admin } from "./component/Admin";
import { Login } from "./component/Login";
import { Header } from "./component/Header";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  login = () => {
    this.setState({ isLogin: true });
  };

  logout = () => {
    this.setState({ isLogin: false });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/users" component={User} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
        <Route path="/login">
          {this.state.isLogin ? (
            <Redirect to="/admin" />
          ) : (
            <Login onClick={this.login} />
          )}
        </Route>
        <Route path="/admin">
          {this.state.isLogin ? (
            <Admin onClick={this.logout} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </div>
    );
  }
}
