namespace {%=moduleName %} {
  app.config((
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('layout', {
        abstract: true,
        templateUrl: 'layout/layout.html'
      })
      .state('layout.home', {
        templateUrl: 'home/home.html',
        url: '/'
      });
  });
}
