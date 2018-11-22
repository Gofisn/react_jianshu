import { fromJS } from "immutable";
import * as actionTypes from "./actionType";

const defaultState = fromJS({
  login:false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.change_login:
    console.log(action)
      return state.set('login',action.login)
    default:
      return state;
  }
};
