export default function thunkHelper(dispatch, types, config, extra = '') {
    const $http = getService('$http');
    const $q = getService('$q');
    const [requestType, successType, errorType] = types;
    const deferred = $q.defer();
    //Dispatch BEGIN action
    dispatch({type: requestType});

    $http(config).then(response => {
        //Dispatch SUCCESS action
        dispatch({
            type: successType,
            payload: response.data,
            extra
        });
        deferred.resolve(response);
    }).catch(error => {
        //Dispatch ERROR action
        dispatch({
            type: errorType,
            payload: error
        });
        deferred.reject(error);
    });

    deferred.promise;
}

const getInjector = () => {
    return angular.element(document.querySelector('[ng-app]') || document.querySelector('[ng-controller]')).injector();
};

const getService = (service) => {
    return getInjector().get(service);
};