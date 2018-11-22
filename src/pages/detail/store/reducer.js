import { fromJS } from "immutable";
import * as actionTypes from "./actionType";

const defaultState = fromJS({
  title: "",
  content: ""
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.change_detail:
      return state.merge({
        title:fromJS(action.title),
        content:fromJS(action.content)
      })
    default:
      return state;
  }
};
