import * as actions from './../../actions';
import * as constants from './../../actions/ActionTypes';

describe('Top stories reducer actions', () => {
  it('get TopStoriesSuccess should create GET_TOP_STORIES_SUCCESS action', () => {
    const topStories = "An article";
    expect(actions.getTopStoriesSuccess(topStories)).toEqual({
      type: constants.GET_TOP_STORIES_SUCCESS,
      topStories
    });
  });

  it('getTopStoriesFailure should create GET_TOP_STORIES_FAILURE action', () => {
    const error = "An error";
    expect(actions.getTopStoriesFailure(error)).toEqual({
      type: constants.GET_TOP_STORIES_FAILURE,
      error
    });
  });

})