import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';
import NewPostComponent from './newPost.component';
import config from './newPost.config';

export default angular.module('app.newPost', [
    uiRouter,
    ngRedux,
    ngReduxUiRouter,
])
    .config(config)
    .component('newPostApp', NewPostComponent)
    .name;