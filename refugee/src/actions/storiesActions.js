import axios from 'axios';

export const FETCH_STORIES_START = 'FETCH_STORIES_START';
export const FETCH_STORIES_SUCCESS = 'FETCH_STORIES_SUCCESS';
export const FETCH_STORIES_FAILURE = 'FETCH_STORIES_FAILURE';

export const getStories = () => dispatch => {
    dispatch({ type: FETCH_STORIES_START });
    axios
        .get('http://localhost:3300/api/stories')
        .then(res => {
            dispatch({ type: FETCH_STORIES_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: FETCH_STORIES_FAILURE, payload: err }));
};