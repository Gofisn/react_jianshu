import * as actionTypes from "./actionType";
import axios from "axios";
import {fromJS} from 'immutable';

const changeHomeData=(data)=>{
    return {
        type:actionTypes.change_list,
        data:data
      }
}
const changeMoreData=(list)=>{
    return {
        type:actionTypes.more_list,
        list:fromJS(list)
      }
}
export const toggleScrolllTopShow=(show)=>{
    return {
        type:actionTypes.scrollTop_show,
        show
    }
}

export const getHomeData = () => {
    return (dispatch)=>{
        axios
        .get("/api/home.json")
        .then(res => {
            if(res.data.success){
                const result = res.data.response;
                dispatch(changeHomeData(result));
            }
          
        })
        
    }
  
};
export const getMoreList = (page) => {
    return (dispatch)=>{
        axios
        .get("/api/homeList.json?page="+page)
        .then(res => {
            if(res.data.success){
                const result = res.data.response;
                dispatch(changeMoreData(result));
            }
          
        })
    }
  
};

