import React, { Component } from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recomment from "./components/Recomment";
import Writer from "./components/Writer";
import { getHomeData } from "./store/actionCreaters";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { actionCreaters } from "./store";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4579/0e3caa20d3d30658dc4b393d1ea105baa7e78248.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recomment />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>TOP</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeDate();
    this.bindEvents();
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollShow);
   
  }
}
const mapState = state => {
  return {
    showScroll: state.getIn(["home", "showScroll"])
  };
};
const mapDispatch = dispatch => {
  return {
    changeHomeDate() {
      dispatch(getHomeData());
    },
    changeScrollShow() {
      if (document.documentElement.scrollTop > 200) {
        dispatch(actionCreaters.toggleScrolllTopShow(true));
      } else {
        dispatch(actionCreaters.toggleScrolllTopShow(false));
      }
    }
  };
};
export default connect(
  mapState,
  mapDispatch
)(Home);
