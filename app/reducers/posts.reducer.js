import Immutable from 'seamless-immutable';
import {
    RETRIEVE_POSTS, SAVE_POST_EVENT, PERSIST_POSTS
} from '../actions/posts.actions';

export const INITIAL_STATE = Immutable({
    postsList: [],
    error: {},
    isFetching: false,
    unSavedPosts: []
});

export default function postReducer(state = INITIAL_STATE, {type, payload = {}, extra = {}}) {
    switch (type) {
        case RETRIEVE_POSTS.BEGIN:
            return state.set('isFetching', true);
        case RETRIEVE_POSTS.FAILURE:
            return state
                .set('error', payload)
                .set('isFetching', false);
        case RETRIEVE_POSTS.SUCCESS:
            return state
                .set('postsList', payload)
                .set('isFetching', false)
        case SAVE_POST_EVENT:
            return state
                .set( 'unSavedPosts', [...state.unSavedPosts, payload] )
                .set( 'error', {} )
                .set('isFetching', false);
        case PERSIST_POSTS.BEGIN:
            return state
                .set( 'isFetching', true );
        case PERSIST_POSTS.FAILURE:
            return state
                .set( 'isFetching', false )
                .set( 'error', {} )
        case PERSIST_POSTS.SUCCESS:
                return state
                .set( 'unSavedPosts', [...state.unSavedPosts.filter( post => post.id !== extra.id ) ] )
                .set( 'postsList', [ ...state.postsList, ...state.unSavedPosts.filter( post => post.id === extra.id ) ])
                .set( 'isFetching', false )
        default:
            return state;
    }
}