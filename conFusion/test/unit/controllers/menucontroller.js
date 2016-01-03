describe('Controller: MenuController', function () {

  // load the controller's module
  beforeEach(module('confusionApp'));

  var MenuController, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$httpBackend_,  $rootScope, menuFactory) {

    // place here mocked dependencies
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET("http://localhost:3000/dishes").respond([
      {
        "id": 0,
        "name": "Uthapizza",
        "image": "images/uthapizza.png",
        "category": "mains",
        "label": "Hot",
        "price": "4.99",
        "description": "A",
        "comments": [{}]
      },
      {
        "id": 1,
        "name": "Zucchipakoda",
        "image": "images/zucchipakoda.png",
        "category": "mains",
        "label": "New",
        "price": "4.99",
        "description": "A",
        "comments": [{}]
      }
    ]);

    scope = $rootScope.$new();
    MenuController = $controller('MenuController', {
      $scope: scope, menuFactory: menuFactory
    });

    $httpBackend.flush();
  }));
});
