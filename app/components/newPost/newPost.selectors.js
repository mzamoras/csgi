import {createSelector} from 'reselect';

const GetPostsState = state => state.posts;

export const GetAllPostsSelector = createSelector(
    [GetPostsState],
    (postsState) => {
        return postsState.postsList.concat( postsState.unSavedPosts );
    }
);

export const GetUnSavedPostsSelector = createSelector(
    [GetPostsState],
    (postsState) => {
        return postsState.unSavedPosts;
    }
);