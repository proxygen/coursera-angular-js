# Front-End JavaScript Frameworks: AngularJS

## Prerequisite
### NodeJS
#### Install on Ubuntu 15.10
```shell
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs

# To compile and install native addons from npm you may also need to install build tools:
sudo apt-get install -y build-essential
```
### Install node module globally
```shell
# bower
sudo npm install -g bower

# gulp
sudo npm install -g gulp

# json-server
sudo npm install -g json-server

# karma
sudo npm install -g karma-cli

# protractor
sudo npm install -g protractor

# Yo
sudo npm install -g yo

# Generators
sudo npm install -g generator-angular
```

## Intro to Front-End JavaScript Frameworks
### Popular JavaScript Framworks:
* Angular
* Ember
* Backbone
* React
* Aurelia
* Meteor
* Polymer
* Knockout
* Vue
* Mercury

## Intro to AngularJS
### Angular Vocabulary:
* Two-way Data Binding
* Scope
* Directives
* Templates
* Routing
* Testing
* Modules
* Controllers
* Filters
* Factory
* Service
* Provider

### Use AngularJS
To use AngularJS, just include the angular code to the html file.
```javascript
<script src="scripts/angular.min.js"></script>
```

### Angular Built-in Directives
#### HTML custom attributes
* data-\*; attributes (Bootstrap/jQuery)
* Angular: ng-\* attributes / data-ng-\*

#### ng-app Directives
Is applied to specify the root of the application.

#### ng-model Directives
The ngModel directive binds the input value to a variable within the scope.
```html
<div class="media-body">
    ...
    <p> {{dish.description}} </p>
    <p>Comment: {{dish.comment}} </p>
    <p>Type your comment: <input type="text" ng-model="dish.comment"></p>
</div>
```

#### ng-init Directives
To evaluate an expression or initialize a JavaScript variable
```html
<p ng-init="index = 1"> </p>
<div class="row row-content" ng-init="dish= { name:'Uthapizza', ... } "> </div>
```

#### Angular Expression
Is simple JavaScript expression:
* Evaluated against an Angular scope object
* No conditionals, loops or exceptions
* Expressions enclosed in {{ expression }}
Example:
```html
<p>6 + 5 = {{ 6 + 5 }}</p>
<div class="media-body">
    <h2 class="media-heading"> {{dish.name}} </h2>
    <p> {{dish.description}} </p>
</div>
```

#### ng-repeat Directives
Loops over items in a collection and instantiates a template for each item.
```html
<ul class="media-list">
    <li class="media" ng-repeat="dish in dishes">
        ...
    </li>
</ul>
```

## Angular Modules and Controllers
### Modules
An Angular module is a collection of:
* Controllers
* Directives
* Filters
* Services
* Other configuration information
```html
<html ngApp=“confusionApp”>
    ...
    <body>
        ...
        <script> var app = angular.module(‘confusionApp’,[]); </script>
    </body>
</html>
```

### Controller
Angular Controller is JavaScript object containing attributes/properties and functions. It exposes variables and functionality to expressions and directives.
A controller can e defined using a ng-controller directive on an HTML element.
```html
<div class="row row-content" ng-controller="menuController as menuCtrl">
</div>
<script>
    var app = angular.module('confusionApp',[]);
    app.controller('menuController', function() { });
</script>
```

## Angular Filters
An Angular Filter format the value of an expression for display but do not modify the underlying data, can be used in view templates,controllers or services.

### Built-in Filters
* uppercase / lowercase: converts the text
* currency: formats the number as a currency
* date: formats the date as per the formatting specified
* filter: selects a subset of an array based on the criteria specified and returns a new array
* orderBy: orders the array basedon the criteria specified
* others like json, limitTo etc.
```html
<li class="media" ng-repeat="dish in menuCtrl.dishes | filter:menuCtrl.filtText"> … </li>
<script>
    Var filtText = “”;
    this.select = function(setTab) {
        this.tab = setTab;
        if (setTab === 2)
            this.filtText = "appetizer";
        else if (setTab === 3)
            this.filtText = "mains";
        else if (setTab === 4)
            this.filtText = "dessert";
        else this.filtText = "";
    }
</script>
```
## Angular Factory and Service
### Dependency Injection
#### Roles of DI
* The service
* The client
* The interfaces
* The injector
#### Dependency Annotation in Angular
* Inline array annotation
```javascript
module.controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
}]);
```

* $inject property annotation
```javascript
var MenuController = function($scope, menuFactory) {
};
MenuController.$inject = ['$scope', 'menuFactory'];
module.controller('MenuController', MenuController);
```

* Implicit annotation
```javascript
module.controller('MenuController', function($scope, menuFactory){
});
```

### Angular services
* Substitutable objects wired together using ID
* Allows organizing and sharing code across an app
* Lazily instantiated
* Singletons

#### Built-in services
AN Angular's built-in service always start with '$' and being injected using DI. ex. $http, $scope, $rootScope, $location, $parse, $templateCache, $animate, $injector
Five functions that declare services:
* service()
* factory()
* provider()
* constant()
* value()

### Angular Factory
```javascript
// Declaration of Factory
angular.module('confusionApp')
    .factory('menuFactory', function() {
        var menufac = {};
        var dishes = [ … ];
        menufac.getDishes = function() {
            return dishes;
        };
        menufac.getDish = function (index) {
            return dishes[index];
        };
        return menufac;
    });

// Usage of Factory
angular.module('confusionApp')
.controller('MenuController', ['$scope',
    'menuFactory', function($scope, menuFactory)
{
    $scope.dishes = menuFactory.getDishes();
}]);

// Declaration of Service
angular.module('confusionApp')
    .service('menuFactory', function() {
        var dishes = [ … ];
        this.getDishes = function() {
            return dishes;
        };
        this.getDish = function (index) {
            return dishes[index];
        };
    });

// Usage of Service is exactly the same as Factory
```

## Angular Templates
### ng-include Directive
```html
<div ng-include="'menu.html'"></div>
<ng-include src="'menu.html'"></ng-include>
```

## Single Page Applications (SPAs) and Angular ng-route
### Deep Linking
Hyperlink that specifies a link to a searchable or indexed piece of web content.
Example:
```url
http://www.conFusion.food/index.html#/menu/0
```

The section after the '#' sign called hash. Any change to the hash portion does not cause a page reload.

### The $location Service
* Expose the current URL in the browser address bar:
  * watch and observe the URL
  * change the URL
* Synchroniwes the URL with the browser when the user:
  * changes the address bar
  * clicks the back/forward buttons
  * clicks on a link
* Allows you to manipulate the hash portion of a URL
  * url(): get/set the URL
  * path(): get/set the path
  * search(): get/set the search part
  * hash(): get/set the hash part

### Angular ngRoute Module
* Install
```shell
bower install angular-route -S
```

* Manages the interaction between the $location service and the rendered view

* Dependency injection into the module:
```javascript
angular.module('conFusionApp',[ngRoute])
```

### The $routeProvider
An Angular provider that enables mapping from the routes to handlers. Handler are an object that defines template URL and controller.

#### $routeProvider configuration
```javascript
angular.module('confusionApp', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
        .when('/contactus', { // route for the contactus page
            templateUrl : 'contactus.html', controller : 'ContactController'
        })
        .when('/menu', { // route for the menu pag
            templateUrl : 'menu.html', controller : 'MenuController'
        })
        .when('/menu/:id', { // route for the dish details page
            templateUrl : 'dishdetail.html', controller  : 'DishDetailController'
        })
        .otherwise('/contactus');
});
```

#### $routeParams
* menu.html:
```html
    <a ng-href="#/menu/{{dish._id}}"></a>
```

* DishDetailController:
```javascript
.controller('DishDetailController', ['$scope', '$routeParams',
    'menuFactory', function($scope, $routeParams, menuFactory) {
        var dish= menuFactory.getDish(parseInt($routeParams.id,10));
        $scope.dish = dish;
}]);
```

### ngView Directive
Works together with $route service to include the rendered template of the current route into the main layout
Usage:
```html
<ng-view></ng-view>
<div ng-view></div>
```

## Angular UI-Router
* Differ to ngView, a page can have more than one UI-Router.
* UI-Router based on the state of the application
* support multiple views and nested views

### install UI Router and DI into the module
```shell
bower install angular-ui-router -S
```

```javascript
angular.module('confusionApp', ['ui.router'])
```

### Usage of UI-Router
```javascript
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', { // route for the home page
            url:'/',
            views: {
                'header': { templateUrl : 'views/header.html' },
                'content': { template : '<h1>To be Completed</h1>', controller  : 'IndexController' },
                'footer': { templateUrl : 'views/footer.html' }
            }
        })
        .state('app.aboutus', { // route for the aboutus page
            url:'aboutus',
            views: {
                'content@': { template: '<h1>To be Completed</h1>', controller  : 'AboutController'  }
            }
        });
    $urlRouterProvider.otherwise('/');
});
```

#### uiView Directive
Indicates where to include the views
```html
<div ui-view="header"></div>
<div ui-view="content"></div>
<div ui-view="footer"></div>
```

#### ui-sref
* Use ui-sref="state" to indicate which state to move to when clicked
```html
<a ui-sref="app"></a>
<a ui-sref="app.aboutus"></a>
<a ui-sref="app.menu"></a>
```

* Corresponding href will be generated upon compilation

#### $stateParams
* menu.html
```html
<a ui-sref="app.dishdetails({id: dish._id})"> . . . </a>
```

```javascript
.controller('DishDetailController', ['$scope', '$stateParams',
    'menuFactory', function($scope, $stateParams, menuFactory) {
        var dish= menuFactory.getDish(parseInt($stateParams.id,10));
        $scope.dish = dish;
}]);
```

## Angular $http Service
Core Angular service to communicate with servers using the HTTP protocol via the browser's XMLHttpRequest or JSONP

### Promise
Angular $q service: run functions asynchronously and use the return value (or exceptions) when they are done processing

### The $http Service
* The $http service returns a promise:
```javascript
$http({method: 'GET', url: '/dishes'})
    .then(function() {...}, function() {...})
```

* Shortcut methods:
$http.\[get | put | post | delete | jsonp | head]()

### HTTP GET example
```javascript
$http.get(baseURL + "dishes")
.then(
    function(response) {
        $scope.dishes = response.data;
        $scope.showMenu = true;
    },
    fuction(response) {
        $scope.message = "Error:" + response.status + " " + response.statusText;
    }
);
```

### HTTP Response
Response of the HTTP request:
* response.data: String/object containing the body of the message
* response.status: status code
* response.headers: header information
* response.config: configuration object
* response.statusText: HTTP status text of the response

## Client-Server Communication using $resource
### Angular ngResource
* The ngResource module provides a higher level abstraction than $http for interacting with a RESTful API server
* Not part of Angular core

### Installation and Using ngResource
```shell
bower install angular-resource -S
```

```javascript
angular.module('confusionApp', ['ui.router', 'ngResource'])
```

### Angular $resource Service
* wrapper around a REST API to perform CRUD operations
 * no need to deal with $http directly, higher level abstraction
* Dependency injection
```javascript
 .service(menuFactory', ['$resource', 'baseURL', function($resource, base URL') {
    ...
 }])
 ```
* Usage:
```javascript
$resource(url, [paramDefault], [action], options);
```

### $resource default actions
```javascript
{'get': {method: 'GET'},
 'save': {method: 'POST'},
 'query': {method: 'GET', isArray: true},
 'remove': {method: 'DELETE'},
 'delete': {method: 'DELETE'}};
```

### Using $resource Example
```javascript
$resource(baseURL + "dishes/:id", null, {'update': {method: 'PUT'}});

// $resource methods: .query(), .get(), .save(), .remove(), .delete()

$scope.dishes = $resource(baseURL + "dishes/:id", null,
    {'update': {method: 'PUT'}}).query();

// '$' prefix can be used with all non GET methods
var dish = $resource(baseURL + "dishes/:id", null,
    {'update': {methode: 'PUT'}}).get({id: 0}, function() {
        dish.name = "dovanut";
        dish.$save();
    });

// Custom PUT request
$resource(baseURL + "dishes/:id", null, {'update': {method: 'PUT'}})
    .update({id: $scope.dish.id}, $scope.dish);

// Error handling
$resource(baseURL + "dishes/:id", null, {'update': {method: 'PUT'}})
    .query(
        function(response) {
            $scope.dishes = response;
            $scope.showMenu = true;
        },
        function(response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
        }
    );
```

## End-to-end Testing Angular Applications
### protractor
* Node program that enables running of end-to-end tests
 * Runs tests against your application running in a browser and interacting with it like a real user
* User WebDriver to control browsers to carry out the tests
 * Selenium browser automation framework
 * Can use Direct Connect to test with Chrome and Firefox
* Uses Jasmine for expression the test syntax

### Protractor Configuration
```javascript
exports.config={
  allScriptsTimeout: 11000,
  specs: ['e2e/*.js'],
  capabilities: {'browserName': 'chrome'},
  baseUrl: 'http://localhost:3001/',
  framework: 'jasmine',
  directConnect: true,
  jasmineNodeOpts: {defaultTimeoutInterval: 30000}
};
```

### Protractor Test Example
```javascript
'use strict';
describe('conFusion App E2E Testing', function() {
  it('should automaticallyredirect to / when location hash/fragment is empty',
    Function() {
      browser.get('index.html');
      expect(browser.getLocationAbsUrl()).toMatch("/");
    });
});

describe('menu 0 item', function() {
  beforeEach(function() {
    browser.get('index.html#/menu/0');
  });

  it('should have a name', function() {
    var name = element(by.binding('dish.name'));
    expect(name.getText()).toEqual('Uthapizza npm install protractor -gHot $4.99');
  });

  it('should show the first comment author as', function() {
    element(by.model('orderText')).sendKeys('author');

    expect(element.all(by.repeater('comment in dish.comments'))
      .count()).toEqual(5);

    var author = element.all(by.repeater('comment in dish.comments'))
      .first().element(by.binding('comment.author'));

    expect(author.getText()).toContain('25 Cent');
  });
});
```

## Yo and Yeoman
### Web tools
* Bower: Package Manager for the Web
* Grunt and Gulp: task automation
* Yo: Web App Scaffolding
* Yeoman: Workflow designed around using Yo, Bower and Grunt

### Yo Scaffolding
* Quickly scaffold out new projects
 * Hand crafting all the project folder hierarchy
 * Assembling together all the tools
 * Designing the Workflow
* Yo scaffolding tool takes care of:
 * Scaffolding out your next application
  * Generators to help you scaffold out your application
  * Robust opinionated client-side stack
 * Setting up all the tools for the Workflow
  * leverages the successful open-sourc tools being used in the community

### Scaffolding out a project
1. Create a project folder
2. Go to the project folder and type:
```shell
yo angular
```
