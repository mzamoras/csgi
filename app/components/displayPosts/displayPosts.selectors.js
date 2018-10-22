import {createSelector} from 'reselect';

const GetPostsState = state => state.posts;

export const GetAllPostsSelector = createSelector(
    [GetPostsState],
    (postsState) => {
        return postsState.postsList.concat( postsState.unSavedPosts );
    }
);

export const GetFetchingSelector = createSelector(
    [GetPostsState],
    (postsState) => {
        return postsState.isFetching;
    }
);