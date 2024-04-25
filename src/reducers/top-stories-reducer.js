import * as constants from '../actions/ActionTypes';

const topStoriesReducer = (state, action) => {
  switch (action.type) {
    case constants.GET_TOP_STORIES_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        topStories: action.topStories
      };
    case constants.GET_TOP_STORIES_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default topStoriesReducer;