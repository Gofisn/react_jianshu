import * as actionType from "./actionType";
import { fromJS } from "immutable";
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.search_focus:
      return state.set("focused", true);
    case actionType.search_blur:
      return state.set("focused", false);
    case actionType.change_list:
      return state.merge({
          list:action.data,
          totalPage:action.totalPage
      }) 
    case actionType.mouse_enter:
      return state.set("mouseIn", true);
    case actionType.mouse_leave:
      return state.set("mouseIn", false);
    case actionType.change_page:
      return state.set("page", action.page);

    default:
      return state;
  }
};
