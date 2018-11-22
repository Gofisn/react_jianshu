import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import { actionCreaters as loginActonCreators } from "../../pages/login/store";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";
class Header extends Component {
  getListArea() {
    const { page, list, focused, mouseIn, totalPage } = this.props;
    const pageList = [];
    const jsList = list.toJS();
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (jsList[i]) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={this.props.handelMouseEnter}
          onMouseLeave={this.props.handelMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() =>
                this.props.handleChangePage(page, totalPage, this.spinIcon)
              }
            >
              <i
                className="iconfont spin"
                ref={icon => {
                  this.spinIcon = icon;
                }}
              >
                &#xe600;
              </i>{" "}
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>

        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>

          {this.props.login ? (
            <NavItem className="right" onClick={this.props.logout}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}

          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? "focused" : ""}
                onFocus={() => this.props.handleInputFocus(this.props.list)}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>
            <i
              className={
                this.props.focused
                  ? "focused iconfont search"
                  : "iconfont search"
              }
            >
              &#xe60b;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writting">
              <i className="iconfont">&#xe608;</i> 写文章
            </Button>
          </Link>

          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login: state.getIn(["login", "login"])
  };
};
const mapDispathToProps = dispatch => {
  return {
    handleInputFocus(list) {
      if (!list.size) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.getSearchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.getSearchBlur());
    },
    handelMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handelMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spinicon) {
      let originAng = spinicon.style.transform.replace(/[^0-9]/gi, "");
      if (originAng) {
        originAng = parseInt(originAng);
      } else {
        originAng = 0;
      }
      console.log(originAng);
      spinicon.style.transform = "rotate(" + (originAng + 360) + "deg)";
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActonCreators.logout());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
