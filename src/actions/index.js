import * as constants from './ActionTypes';

export const getTopStoriesSuccess = (topStories) => ({
  type: constants.GET_TOP_STORIES_SUCCESS,
  topStories
});

export const getTopStoriesFailure = (error) => ({
  type: constants.GET_TOP_STORIES_FAILURE,
  error
});