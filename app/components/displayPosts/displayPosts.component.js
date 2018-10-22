import { retrievePosts } from '../../actions/posts.actions';
import { GetAllPostsSelector, GetFetchingSelector } from './displayPosts.selectors'

class DisplayPostsController{
    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
    }

    $onInit(){
        this.controllerActions = {
            retrievePosts,
        }
       
        this.disconnectRedux = this.$ngRedux.connect(this.mapStateToTarget, this.controllerActions)((state, actions) => {
            this.state   = state;
            this.actions = actions;
        });
    }

    mapStateToTarget(state) {
    
        return {
            postsList: GetAllPostsSelector( state ),
            //isFetching: GetFetchingSelector( state ),
        }
    }

    retrievePosts() {
        this.actions.retrievePosts(response => {
            console.log('response:', response);
        });
    }
}

export default {
    template: require( './displayPosts.template.html' ),
    controller: DisplayPostsController,
    bindToController: true,
    bindings: {
        title: "=",
        description: "="
    }
}