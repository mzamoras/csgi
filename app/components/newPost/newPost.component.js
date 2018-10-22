import { savePost, persistPost } from '../../actions/posts.actions';
import { GetAllPostsSelector, GetUnSavedPostsSelector } from './newPost.selectors';

class NewPostController{
    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
    }

    $onInit(){
        this.controllerActions = {
            savePost,
            persistPost,
        }

        this.disconnectRedux = this.$ngRedux.connect(this.mapStateToTarget, this.controllerActions)((state, actions) => {
            this.state   = state;
            this.actions = actions;
        });
    }

    mapStateToTarget(state) {
        return {
            postsList: GetAllPostsSelector(state),//state.posts.postsList.concat( state.posts.unSavedPosts ),
            unSavedPosts: GetUnSavedPostsSelector(state)//state.posts.unSavedPosts,
            //isFetching: state.posts.isFetching,
            //error: state.posts.error
        }
    }

    savePost( title, body ){
        if( title && body ){
            const nextID = this.state.postsList.reduce( ( val, el ) => el.id > val ? el.id : val , 0);
            this.actions.savePost( {
                id: (nextID + 1), title, author: body
            } )
        }
    }

    persistPost( ){
        for (let index = 0; index < this.state.unSavedPosts.length; index++) {
            const element = this.state.unSavedPosts[index];
            this.actions.persistPost( element );
        }
    }
}

export default {
    template: require( './newPost.template.html' ),
    controller: NewPostController,
    bindToController: true,
    bindings: {
        title: "=",
        body: "="
    }
}