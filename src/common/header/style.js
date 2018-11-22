import styled from "styled-components";
import logoPic from "../../static/logo.png";

export const HeaderWrapper = styled.div`
  height: 55px;
  border-bottom: 1px solid #ccc;
  position: relative;
  z-index:1;
  background:#fff;
`;
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 90px;
  box-sizing: border-box;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .slide-enter,
  .slide-exit {
    transition: all 0.3s ease-out;
  }

  .search {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
    &.focused {
      background: #999;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  background-color: #eee;
  font-size: 14px;
  margin-left: 20px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 220px;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background:#fff;

`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 14px;
  .spin{
    transition:all .2s ease-in;
    font-size:12px;
    display:block;
    transform-origin: center center;
    float:left;
  }
`;
export const SearchInfoItem = styled.a`
  padding:0 5px;
font-size:12px;
line-height:20px;
border:1px solid #dddddd;
border-radius:2px;
margin:5px;
color: #ddd;
display:inline-block;

`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;
