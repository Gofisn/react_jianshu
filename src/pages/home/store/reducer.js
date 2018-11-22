import { fromJS } from "immutable";
import * as actionTypes from "./actionType";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.change_list:
      return state.merge({
        topicList: fromJS(action.data.topicList),
        articleList: fromJS(action.data.articleList),
        recommendList: fromJS(action.data.recommendList)
      });
    case actionTypes.more_list:
      return state.merge({
        articleList: state.get("articleList").concat(action.list),
        articlePage: state.get("articlePage") + 1
      });
    case actionTypes.scrollTop_show:
      return state.set('showScroll',action.show);

    default:
      return state;
  }
};
