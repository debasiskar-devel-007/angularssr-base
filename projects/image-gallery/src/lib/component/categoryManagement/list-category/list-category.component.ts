import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../Service/api.service';

@Component({
  selector: 'lib-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  // for category 
  public headerText: any = "Image & Category Management";
  public serverUrlData: any = '';
  public tokenViaApp: any = '';
  public addupdateRouteUrl: any = '';
  public TableNameViaApp: any = '';
  public DeleteendpointViaApp: any = '';
  public editRouteViaApp: any = '';
  public AddButtonRouteViaApp: any = '';
  public manageButtonRouteViaApp: any = '';
  public searchEndpointval: any = '';
  public searchSourceval: any = '';
  public AddImageButtonRouteViaApp: any = [];
  public tableNameImageViaApp: any = '';
  public imageServerUrlDataViaApp: any = '';
  public imageDeleteendpointViaApp: any = '';
  public imageEditRouteViaApp: any = '';
  public imageAddupdateRouteUrlViaApp: any = '';
  public imageSearchSourcevalViaApp: any = '';
  public imageSearchEndpointval: any = '';
  public date_search_source_count: any ='';
  public datacollection: any = '';
  public dataSourceval: any = '';
  public datacountendpoint: any = '';
  public catupateDeletEendpoint:any;
  // for image 
  public allDataList: any = [];
  public dataListForImage: any = [];
  public tokenForImageViaApp: any;
  public image_date_search_source_count: any;
  public image_datacollection: any;
  public ImageDataViaApp:any;
  public countDataimageViaApp: any;
  public imageUpdateDeleteEndpoint: any;
  public paramsuserid: any='';

  public data_skip: any = ["_id", "description", "title_search", "parent_category_search",
  "date_unix"];
  public previewModal_detail_skip: any = ["_id", "title_search", "parent_category_search","date_unix","status","date_added"];
  public data_modify_header: any = {
    "parent_category": "Parent Category", 
    "title": "Title",
    "priority": "Priority", 
    "status": "Status",
    "createdatetime": "Date"
  };
  public limitcond: any = {                                 
    'limit': 10,
    'skip': 0,
    'pagecount': 1
  };
  public sortdata: any = {
    'type': 'asc',                                              
    'field': 'title',                                      
    'options': [ 'title','priority','createdatetime' ]  
  };
  public libdata: any ={
    // updateendpoint: '',
    // updateendpointmany: '',
    // deleteendpointmany: '',
  };
 

  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  public search_settings: any =
    {
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
      textsearch: [{
        label: "Search By Title", field: 'title_search'
      },
      { label: "Search By Parent Category", field: 'parent_category_search' }],
      datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date", submit:"Search By Date",  field:"createdatetime"}]
    };


  // -------------------image category section-------------- //

  @Input()          //getting search endpoint 
  set SearchEndpoint(Val: any) {
    this.searchEndpointval = (Val) || '<no name set>';
    this.searchEndpointval = Val;
   
  }
  @Input()          //getting search sourcename 
  set SearchSourceName(Val: any) {
    this.searchSourceval = (Val) || '<no name set>';
    this.searchSourceval = Val;
  }

  @Input()          //getting all video data via resolve
  set listingViaResolve(DataVal: any) {
    this.allDataList = (DataVal) || '<no name set>';
    this.allDataList = DataVal;

  }
  @Input()          //getting add button route 
  set AddButtonRoute(Val: any) {
    this.AddButtonRouteViaApp = (Val) || '<no name set>';
    this.AddButtonRouteViaApp = Val;
  }
  @Input()
  set ManageImageButtonRoute(val: any) {
    this.manageButtonRouteViaApp = (val) || '<no name set>';
    this.manageButtonRouteViaApp = val;
  }
  @Input()          //getting edit route
  set editRoute(Val: any) {
    this.editRouteViaApp = (Val) || '<no name set>';
    this.editRouteViaApp = Val;
  }
  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;
  }
  @Input()          //setting the server url from project
  set Token(tokenval: any) {
    this.tokenViaApp = (tokenval) || '<no name set>';
    this.tokenViaApp = tokenval;
  }
  @Input()          //setting the updateendpoint from App
  set updatedEndpoint(val: any) {
    this.addupdateRouteUrl = (val) || '<no name set>';
    this.addupdateRouteUrl = val;
  }
  @Input()          //setting the server url from project
  set TableName(val: any) {
    this.TableNameViaApp = (val) || '<no name set>';
    this.TableNameViaApp = val;
  }
  @Input()
  set DeleteEndpoint(val: any) {
    this.DeleteendpointViaApp = (val) || '<no name set>';
    this.DeleteendpointViaApp = val;
  }

  // count endpoint
  @Input()
  set CountEndpoint(val: any) {
    this.datacountendpoint = (val) || '<no name set>';
    this.datacountendpoint = val;
  }

  @Input()
  set catupdatedeleteendpoint(val: any) {
    this.catupateDeletEendpoint = (val) || '<no name set>';
    this.catupateDeletEendpoint = val;
  }

  // ------------------------image section---------------------- //
public image_libdata: any ={};
  public image_data_skip: any = ["_id", "category_name_search","date_unix", "title_search","aspectratio","croppedfiles","basepath","imagepath","userid","user_type"];
  public image_data_modify_header: any = {

    'category_name': "Category Name",
    'createdatetime': "Date",
    'title': "Title",
    'status': "Status",
    'image': "Image"

  };
  public image_previewModal_detail_skip: any = ["_id",'category_name_search','image',"date_unix", "title_search","aspectratio","croppedfiles","basepath","imagepath","status","userid","user_type"];

  public image_sortdata: any = {
    'type': 'asc',                                              
    'field': 'title',                                      
    'options': [ 'title','priority','createdatetime' ]  
  };
  public img_limitcond: any = {                                 
    'limit': 10,
    'skip': 0,
    'pagecount': 1
  };
  public image_status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];

  public image_search_settings: any =
    {
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.image_status }],
      textsearch: [
        { label: "Search By Title", field: 'title_search' },
        { label: "Search By Category", field: 'category_name_search' }
        ],
        datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date", submit:"Search By Date",  field:"createdatetime"}]
        
    };

  public pendingmodelapplicationarray_detail_datatype: any = [{
    key: "images",
    value: 'image',
    fileurl: 'https://s3.us-east-2.amazonaws.com/image-gallery-bucket/imageGallery/'    // Image path 
  }];

  @Input()
  set AddImageButtonRoute(val: any) {
    this.AddImageButtonRouteViaApp = (val) || '<no name set>';
    this.AddImageButtonRouteViaApp = val
  }

  @Input()
  set TableNameForImage(val: any) {
    this.tableNameImageViaApp = (val) || '< no name set >';
    this.tableNameImageViaApp = val;
  }

  @Input()
  set DataListForImage(val: any) {
    this.dataListForImage = (val) || '< no name set >';
    this.dataListForImage = val;
  }

  @Input()
  set TokenForImage(val: any) {
    this.tokenForImageViaApp = (val) || '< no name set>';
    this.tokenForImageViaApp = val;
  }

  @Input()
  set imageServerUrlData(val: any) {
    this.imageServerUrlDataViaApp = (val) || '< no name set>';
    this.imageServerUrlDataViaApp = val
  }
  @Input()
  set imageDeleteendpoint(val: any) {
    this.imageDeleteendpointViaApp = (val) || '< no name set>';
    this.imageDeleteendpointViaApp = val
  }
  @Input()
  set imageEditRoute(val: any) {
    this.imageEditRouteViaApp = (val) || '< no name set>';
    this.imageEditRouteViaApp = val
  }
  @Input()
  set imageAddupdateRouteUrl(val: any) {
    this.imageAddupdateRouteUrlViaApp = (val) || '< no name set>';
    this.imageAddupdateRouteUrlViaApp = val
  }
  @Input()
  set imageSearchSourceval(val: any) {
    this.imageSearchSourcevalViaApp = (val) || '< no name set>';
    this.imageSearchSourcevalViaApp = val

  }
  @Input()
  set imageSearchEndpoint(val: any) {
    this.imageSearchEndpointval = (val) || '< no name set>';
    this.imageSearchEndpointval = val
  }


  @Input()
  set CountimageEndpoint(val: any) {
    this.countDataimageViaApp = (val) || '<no name set>';
    this.countDataimageViaApp = val;
  }

  @Input()
  set imageupdatedeleteendpoint(val: any) {
    this.imageUpdateDeleteEndpoint = (val) || '<no name set>';
    this.imageUpdateDeleteEndpoint = val;
   
  }

  @Input()
  set UserId(val: any) {
    this.paramsuserid = (val) || '<no name set>';
    this.paramsuserid = val;
  }

  constructor(public router: Router,public apiService: ApiService) {
  //  console.log(';;;', this.searchEndpointval)
  setTimeout(() => {

    this.libdata={
    hidedeletemany: false,
     updateendpoint: this.catupateDeletEendpoint.updateendpoint,
     updateendpointmany: this.catupateDeletEendpoint.updateendpointmany,
     deleteendpointmany:  this.catupateDeletEendpoint.deleteendpointmany,
      tableheaders: ['title','parent_category','priority','status','createdatetime'], 
      detailview_override:[
        { key: "title", val: "Title" },
        { key: "parent_category", val: "Parent Category" },
        { key: "priority", val: "Priority" },
        { key: "description", val: "Description"},
        { key: "createdatetime", val: "Created date" }
      ],
    }

    this.datacollection = this.dataSourceval;
    let catendpoint: any = this.serverUrlData + this.datacountendpoint;
    console.log(catendpoint, 'catendpoint')
    const data: any = {
      condition: {
        limit: 10,
        skip: 0
      },
      sort: {
        type: 'desc',                                           // defalut field sort type
        field: 'title'                                         // default sort field
      }
    };
    this.apiService.CustomRequestPost(data, catendpoint)
      .subscribe((response: any) => {
        this.date_search_source_count = response.count;
        
      });
      console.log('cnt',this.date_search_source_count);
  }, 500);


  // For Images

  setTimeout(() => {
   // console.log('userid>>>>>',this.imageUpdateDeleteEndpoint);
  //  console.log('check>>',this.paramsuserid);
    this.image_libdata={
      basecondition:{},
      updateendpoint: this.imageUpdateDeleteEndpoint.updateendpoint,
      updateendpointmany: this.imageUpdateDeleteEndpoint.updateendpointmany,
      deleteendpointmany:  this.imageUpdateDeleteEndpoint.deleteendpointmany,
      tableheaders:['image','title','status','category_name','createdatetime'],
      detailview_override:[
        { key: "title", val: "Title" },
        { key: "category_name", val: "Category Name" },
        { key: "priority", val: "Priority" },
        { key: "decription", val: "Description"},
        { key: "createdatetime", val: "Created date" }
      ],
    }


    this.image_datacollection = this.ImageDataViaApp;
    let catendpoint: any = this.serverUrlData + this.countDataimageViaApp;
    // console.log(catendpoint, 'catendpoint')
    const data: any = {
      condition: {
        limit: 10,
        skip: 0,
      },
      sort: {
        type: 'desc',                                           // defalut field sort type
        field: 'priority'                                         // default sort field
      }
    };
    if(this.paramsuserid != null && this.paramsuserid != ''){
      data.condition={ limit: 10,skip: 0, userid: this.paramsuserid} 
      this.image_libdata.basecondition = {userid: this.paramsuserid}
    }
    this.apiService.CustomRequestPost(data, catendpoint)
      .subscribe((response: any) => {
        this.image_date_search_source_count = response.count;
      });

  }, 1000);

   }


  ngOnInit() {
    console.log(';;;', this.addupdateRouteUrl)
    console.log('userid>>>>>',this.imageUpdateDeleteEndpoint);
   
  }
  
  AddButton() {
    this.router.navigateByUrl('/' + this.AddButtonRouteViaApp);
  }
  manageButton() {
    this.router.navigateByUrl('/' + this.manageButtonRouteViaApp);
  }

  AddImageButton() {
    this.router.navigateByUrl('/' + this.AddImageButtonRouteViaApp);
  }
}
