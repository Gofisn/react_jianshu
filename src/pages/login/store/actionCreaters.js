import * as actionTypes from "./actionType";
import axios from "axios";
import {fromJS} from 'immutable';

const changeLogin=(login)=>{
    return {
        type:actionTypes.change_login,
        login
      }
}

export const login = (account,password) => {
    return (dispatch)=>{
        axios
        .get("/api/login.json?account="+account+'&?password='+password)
        .then(res => {
            if(res.data.response){
                const result = res.data.response;
                dispatch(changeLogin(true));
            }else{
                alert('登录失败')
            }
          
        })
        
    }
  
};

export const logout = () => {
    return {
        type:actionTypes.change_login,
        login:false
      }
  
};

