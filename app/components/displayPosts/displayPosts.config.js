export default function config($stateProvider,  $locationProvider, $httpProvider, $ngReduxProvider) {

    $httpProvider.useApplyAsync(true);// deffered the resolution of the XHR calls and avoid call one $digest for XHR call.
    $locationProvider.html5Mode(true);// remove the /# from the url and necessary to work with the webpack configuration.

    $stateProvider.state("app.dp",{
        url: 'display-posts',
        template: "<display-posts-app></display-posts-app>"
    });
}