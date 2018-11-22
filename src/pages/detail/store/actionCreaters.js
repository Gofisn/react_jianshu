import * as actionTypes from "./actionType";
import axios from "axios";
import {fromJS} from 'immutable';

const changeDetail=(data)=>{
    return {
        type:actionTypes.change_detail,
        title:data.title,
        content:data.content
      }
}

export const getDetail = (id) => {
    return (dispatch)=>{
        axios
        .get("/api/detail.json?id="+id)
        .then(res => {
            if(res.data.success){
                const result = res.data.response;
                dispatch(changeDetail(result));
            }
          
        })
        
    }
  
};

