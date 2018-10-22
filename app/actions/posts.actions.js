import ThunkHelper from '../utilities/thunkHelper';
const API_URL = 'http://localhost:3004';

export const RETRIEVE_POSTS = {
    BEGIN: 'RETRIEVE_POSTS_BEGIN',
    SUCCESS: 'RETRIEVE_POSTS_SUCCESS',
    FAILURE: 'RETRIEVE_POSTS_FAILURE'
};

const RETRIEVE_POSTS_EVENTS = [
    RETRIEVE_POSTS.BEGIN,
    RETRIEVE_POSTS.SUCCESS,
    RETRIEVE_POSTS.FAILURE
];

export const PERSIST_POSTS = {
    BEGIN: 'PERSIST_POSTS_BEGIN',
    SUCCESS: 'PERSIST_POSTS_SUCCESS',
    FAILURE: 'PERSIST_POSTS_FAILURE'
};

const PERSIST_POSTS_EVENTS = [
    PERSIST_POSTS.BEGIN,
    PERSIST_POSTS.SUCCESS,
    PERSIST_POSTS.FAILURE
];

export const SAVE_POST_EVENT = "SAVE_POST_EVENT";

export const retrievePosts = () => {
    return dispatch => {
        return ThunkHelper(dispatch, RETRIEVE_POSTS_EVENTS, {
            method: 'get',
            url: `${API_URL}/posts`
        });
    }
};

export const savePost = ( payload ) => {
    return {
        type: SAVE_POST_EVENT,
        payload: payload
    }
}

export const persistPost = post => {
   
    return dispatch => {
        return ThunkHelper(dispatch, PERSIST_POSTS_EVENTS , {
            method: 'post',
            url: `${API_URL}/posts`,
            data: post
        }, post);
    }
}
