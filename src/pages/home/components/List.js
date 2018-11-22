import React, { Component } from "react";
import { connect } from "react-redux";
import {actionCreaters} from '../store'
import { ListItem, ListInfo ,LoadMore} from "../style";
import {Link} from 'react-router-dom'
class List extends Component {
  render() {
const {getMoreList,page,list}=this.props;
    return (
      <div>
        {list.map((item,index) => {
          return (
            <Link key={index} to={'/detail/'+item.get('id')}>
              <ListItem>
              <img className="pic" src={item.get("imgUrl")} alt='' />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("content")}</p>
              </ListInfo>
            </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={()=>getMoreList(page)}>加载更多</LoadMore>
      </div>
    );
  }
}
const mapState = state => ({
  list: state.getIn(['home','articleList']),
  page:state.getIn(['home','articlePage'])
});
const mapDispatch=(dispatch)=>{
  return {
    getMoreList(page){
      dispatch(actionCreaters.getMoreList(page))
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(List);
