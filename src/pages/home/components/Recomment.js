import React,{Component} from 'react';
import {connect} from 'react-redux';
// import {
//     RecommendWrapper,
//     RecommendItem
// } from '../style'
import * as CSS from '../style'
class Recomment extends Component{
    render(){
        return(
            <CSS.RecommendWrapper>
                {
                    this.props.list.map((item)=>{
                        return (
                            <CSS.RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></CSS.RecommendItem>
                        )
                    })
                }
                
            </CSS.RecommendWrapper>
        )
    }
}
const mapState=(state)=>{
    return({
        list:state.getIn(['home','recommendList'])
    })
}
export default connect(mapState,null)(Recomment);