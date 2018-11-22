import React, { Component } from "react";
import { connect } from "react-redux";
import { DetailWrapper, Header, Content } from "./style";
import { actionCreaters } from "./store";
import {withRouter} from 'react-router-dom'
class Detail extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    );
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id)
  }
}
const mapState = state => {
  return {
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
  };
};
const mapDispacth=(dispatch)=>{
    return{
        getDetail(id){
            dispatch(actionCreaters.getDetail(id))
        }
    }
}
export default connect(
  mapState,
  mapDispacth
)(withRouter(Detail));
