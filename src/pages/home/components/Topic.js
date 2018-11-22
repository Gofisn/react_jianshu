import React, { Component } from "react";
import { connect } from "react-redux";
import {fromJS} from 'immutable'

import { TopicWripper, TopicItem } from "../style";
class Topic extends Component {
  render() {
    return (
      <TopicWripper>
        {this.props.list.map(item => {
          return(
            <TopicItem key={item.get('id')}>
            <img
              src={item.get('imgUrl')}
              className="topic-pic"
            alt=''/>
            {item.get('title')}
          </TopicItem>
          )
        })}
      </TopicWripper>
    );
  }
}
const mapState = state => ({
  list: state.get("home").get("topicList")
});
export default connect(
  mapState,
  null
)(Topic);
