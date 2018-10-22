import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';

import AppComponent from './app.component';
import config from './app.config';

import NewPostModule from './components/newPost/newPost.module';
import DisplayPostsModule from './components/displayPosts/displayPosts.module';

export default angular.module('app', [
    uiRouter,
    ngRedux,
    ngReduxUiRouter,
    NewPostModule,
    DisplayPostsModule
])
    .config(config)
    .component('interviewApp', AppComponent)
    .name;