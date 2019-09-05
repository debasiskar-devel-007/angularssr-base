# Rolemanagementlib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3.

## Code scaffolding

Run `ng generate component component-name --project rolemanagementlib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project rolemanagementlib`.
> Note: Don't forget to add `--project rolemanagementlib` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build rolemanagementlib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build rolemanagementlib`, go to the dist folder `cd dist/rolemanagementlib` and run `npm publish`.

## Running unit tests

Run `ng test rolemanagementlib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

--------------------------------------------------------------------------------------------------
                                        ROLE MANAGEMENT
--------------------------------------------------------------------------------------------------



----------------------------------------Listing the Roles------------------------------------

    In order to hit the rolemangement library we need to send few specification from the app.

   .ts

    public roleListingConfig: any = {
    1.apiBaseUrl: "http://18.191.148.255:5009/",
    2.listEndPoint: "datalist",
    3.datasource: "",
    4.tableName: "rolemanagement",
    5.updateurl: "addorupdatedata",
    6.editUrl: "role-management/edit",
    7.jwtToken: "",
    8.deleteEndPoint: "deletesingledata",
    }

    The datasource is null but its value has to be generated in this page ,may it be from
    the resolver or as by the user.

    A sample example of fetching the datasource:

    constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private cookieService: CookieService) {
    this.cookieValue = this.cookieService.get('jwtToken');
    this.activatedRoute.data.subscribe(resolveData => {
      this.roleListingConfig.datasource = resolveData.roleListData.res;
      this.roleListingConfig.jwtToken = this.cookieValue;
     
    });
  }
  
  .html

    <lib-rolemanagementlib [config]="roleListingConfig"></lib-rolemanagementlib>


-----------------------------------Add editing the Roles-----------------------------------

  For adding a role we need to send few specifications

   .ts

      public configAddEdit: any = {
      1. action: "add",
      2.endpoint: "http://18.191.148.255:5009/addorupdatedata",
      3.source: "rolemanagement",
      4.condition: {},
      5.defaultData: null,
      6.jwtToken: this.cookieService.get('jwtToken'),
      7.callBack: "role-management",
      8.userData: { id: "18801017007", name: "Admin" },
      }

   The  default data is null but its value has to be generated in this page,may it be from 
   the resover or as by the user.

    A sample exmaple of fetching the default data:
     this.activateRoute.params.subscribe(params => {
      if(params._id) {
        this.activateRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.editData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
         
        });
      }
    }); 


   .html

    <lib-addeditlib [config]="configAddEdit"></lib-addeditlib>
