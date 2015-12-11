# Front-End JavaScript Frameworks: AngularJS
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