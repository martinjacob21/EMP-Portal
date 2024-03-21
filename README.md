


ANGULAR - FRONT END
------------------------------


BASIC COMMANDS
-------------------
1. Project creation - ng new app-name
2. project run - ng s -o
3. components creation - ng g c component-name
4. service creation - ng g s service-folder/service-name
5. routing enabled user module creation : ng g m users-module --route   users-module --module app.module
6. creating pipe : ng g p pipe-folder/pipe-name
7. generating pdf with table : use npm i jspdf-autotable jspdf
8. to add pagination : ise npm i ngx-pagination
9. Install Angular Meterial : ng add @angular/material
10. Instal highcharts : npm install highcharts highcharts-angular
11. Angular guards : ng g g guard-folder/guard

BASIC CONCEPTS
-----------------

  1. Module : root module - AppModule, used to hold components
  2. Components : parts of UI, combination of ts file ,html    file , css file , Root component - App component
  3. set up path for component - use routing-module.ts file
        - use Routes arry , specify path of each component as an object in the array
        - use  router-outlet selector in root component - used to switch component template according to the user requested path
  4. Data Binding : Data shairing within a component
    - One way binding
      - ts (component) to html (view)
        - String Interpolation : use {{component propery}}
        - Property Binding : [attribute]="class-propery"
      - html (view) to ts (component)
        - event binding : (event-name) = "function-call"
        - event binding using $event : (event-name) = "function-call($event)"
        - event binding using template reference variable
    - Two way binding: using ngModel
      -Import FormModule to Module file, then use [(ngModel)]="class-propery
  5. Angular Directive : are classes that add additional behavior to elements.
      - prebuilt Directive
         - Component Directive : component selector used to display compinent template
         - ngModel Directive : used to manage from input controls
         - ngForm Directives : used to manage from
         - Structural Directive : used to add/remove element from angular app
            - *ngif="condition"
            - *mgFor="let array-item of array-name"
            - Attribute Drirective : used to provide style to element
               - ngClass : used to provide class fo style to html elements
  6. Dependence Injection : when two class are dependenet then one class can access other properties and function, it should provide in constructor
      - syntax : access-specifier variable-name:depenedent-class-name
  7. Angular Services : To share common logic with all component
  8. Angular Forms
      - Template driven Forms
      - Model driven Forms
  9. Handling Asynchronous function : Rxjs Library
     - Observable :
        - subscribe(callback/observer object) : resolves state
     - API call :use http ,ethods in  httpClient class ,
       - import HttpClientModule to your module file
  10. ActivateRoute : provides access to information about a route associated with a component
  11. Angular pipes : used to trandform input to another data
  12. parent child communication
      - Input decorator : parent can share a property
      - Output decorator : child can share an event
  13. Angular guards : protect route from unauthorised access
      - 

