import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style";
import Header from "./common/header";
import { IconfontStyle } from "./static/iconfont/iconfont.js";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
            
            <BrowserRouter>
              <div>
              <Header />
                <Route path="" exact component={Home} />
                <Route path="/detail/:id" exact component={Detail} />
                <Route path="/login" exact component={Login} />
                <Route path="/write" exact component={Write} />
              </div>
            </BrowserRouter>
        </Provider>
        <GlobalStyle />
        <IconfontStyle />
      </Fragment>
    );
  }
}
export default App;
