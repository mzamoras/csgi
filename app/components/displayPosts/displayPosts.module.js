import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';
import DisplayPostsComponent from './displayPosts.component';
import config from './displayPosts.config';

export default angular.module('app.displayPosts', [
    uiRouter,
    ngRedux,
    ngReduxUiRouter,
])
    .config(config)
    .component('displayPostsApp', DisplayPostsComponent)
    .name;