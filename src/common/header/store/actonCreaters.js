import * as actionType from "./actionType";
import axios from 'axios';
import {fromJS} from 'immutable';
const changeList=(data)=>{
  return {
    type:actionType.change_list,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
  }
}

export const getSearchFocus = () => {
  return {
    type: actionType.search_focus
  };
};
export const getSearchBlur = () => {
  return {
    type: actionType.search_blur
  };
};
export const mouseEnter = () => {
  return {
    type: actionType.mouse_enter
  };
};
export const mouseLeave = () => {
  return {
    type: actionType.mouse_leave
  };
};
export const changePage = (page) => {
  return {
    type: actionType.change_page,
    page
  };
};
export const getList = () => {
  return (dispatch)=>{
    axios.get('/api/headerList.json').then((res)=>{
      const data=res.data;
      if(data.success){
        dispatch(changeList(data.response))
      }
    }).catch(()=>{

    })
  }
};
