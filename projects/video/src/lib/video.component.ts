import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './Service/api.service';

@Component({
  selector: 'lib-Video',
  templateUrl: 'video.component.html',
  styleUrls: ['style.css']
})
export class VideoComponent implements OnInit {

  // category section 
  public serverUrlData: any = '';
  public tokenViaApp: any = '';
  public addupdateRouteUrl: any = '';
  public TableNameViaApp: any = '';
  public deleteEndpointViaApp: any = '';
  public editRouteViaApp: any = '';
  public AddButtonRouteViaApp: any = '';
  public manageVideoRouteViaApp: any = '';
  public searchEndpointval: any = '';
  public dataSourceval: any = '';
  public datacountendpoint: any;
  public searchSourcedata: any;


  // video section 
  public AddVideoButtonRouteViaApp: any = '';
  public searchVideoEndpointval: any = '';
  public searchVideoSourceval: any = '';
  public allVideoDataList: any = [];
  public editVideoRouteViaApp: any = '';
  public serverUrlVideoData: any = '';
  public tokenVideoViaApp: any = '';
  public addupdateVideoRouteUrl: any = '';
  public TableNameVideoViaApp: any = '';
  public deleteEndpointVideoViaApp: any = '';

  ;  /**lib-listing start here **/
  public allDataList: any = [];
  public allDataList_skip: any = ["_id", "parent_id", "title_search", "parentvideocategory_search", "date_unix", '_v', 'v'];
  public allDataList_modify_header: any = {
    'title': "Title", 'description': "Description",
    "status": "Status", "priority": "Priority", "parentvideocategory": "Parent Category", "date added": "Date"
  };
  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  public search_settings: any =
    {
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
      textsearch: [{ label: "Search By Title", field: 'title_search' }, { label: "Search By Parent Category", field: 'parentvideocategory_search' }],
      datesearch: [{ startdatelabel: "Start Date", enddatelabel: "End Date", submit: "Search By Date", field: "date_unix" }]
    };
  public previewModal_detail_skip: any = ['_id', 'title_search', 'parentvideocategory_search', "date_unix"];

  public searchendpoint: any = '';

  public date_search_endpoint: any = '';

  public sortdata: any = {
    type: 'asc',                                              //  default sort data ascend and descend (desc)
    field: 'priority',                                         // default field for sorting
    options: ['title', 'priority']
  };
  public datacollection: any;

  public date_search_source_count: '';

  public libdata: any = {
    updateendpoint: 'api1/videocatstatusupdate',
    updateendpointmany: 'api1/videocatstatusupdate',
    deleteendpointmany: 'api1/deletevideocat',
    hideviewbutton: true,
  };

  public limitcond: any = {                                 // send basic limit data
    limit: 10,
    skip: 0,
    pagecount: 1
  };


  /**lib-listing end here **/

  // category section 
  @Input()          //getting search endpoint 
  set SearchEndpoint(Val: any) {
    this.searchEndpointval = (Val) || '<no name set>';
    this.searchEndpointval = Val;

  }
  @Input()          //getting search sourcename 
  set dataSourcename(Val: any) {
    this.dataSourceval = (Val) || '<no name set>';
    this.dataSourceval = Val;

  }

  @Input()          //getting all video data via resolve
  set listingViaResolve(DataVal: any) {
    this.allDataList = (DataVal) || '<no name set>';
    this.allDataList = DataVal;

  }
  @Input()          //gettingadd button route 
  set AddButtonRoute(Val: any) {
    this.AddButtonRouteViaApp = (Val) || '<no name set>';
    this.AddButtonRouteViaApp = Val;

  }
  @Input()
  set VideoManagementRoute(val: any) {
    this.manageVideoRouteViaApp = (val) || '<no name set>';
    this.manageVideoRouteViaApp = val;
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
    this.deleteEndpointViaApp = (val) || '<no name set>';
    this.deleteEndpointViaApp = val;
  }
  // count endpoint
  @Input()
  set CountEndpoint(val: any) {
    this.datacountendpoint = (val) || '<no name set>';
    this.datacountendpoint = val;
  }

  @Input()
  set searchSourceval(val: any) {
    this.searchSourcedata = (val) || '<no name set>';
    this.searchSourcedata = val;
  }






  // video section lib listing

  @Input()          //gettingadd button route for video
  set AddVideoButtonRoute(Val: any) {
    this.AddVideoButtonRouteViaApp = (Val) || '<no name set>';
    this.AddVideoButtonRouteViaApp = Val;

  }
  @Input()          //getting search endpoint for video
  set SearchEndpointForVideo(Val: any) {
    this.searchVideoEndpointval = (Val) || '<no name set>';
    this.searchVideoEndpointval = Val;

  }
  @Input()          //getting search sourcename for video
  set SearchSourceNameForVideo(Val: any) {
    this.searchVideoSourceval = (Val) || '<no name set>';
    this.searchVideoSourceval = Val;

  }

  @Input()          //getting all video data for video
  set listingForVideo(DataVal: any) {
    this.allVideoDataList = (DataVal) || '<no name set>';
    this.allVideoDataList = DataVal;
    console.log(this.allVideoDataList, 'allVideoDataList')

  }


  @Input()          //getting edit route for video
  set editRouteForVideo(Val: any) {
    this.editVideoRouteViaApp = (Val) || '<no name set>';
    this.editVideoRouteViaApp = Val;
  }
  @Input()          //setting the server url from project
  set serverUrlForVideo(serverUrlval: any) {
    this.serverUrlVideoData = (serverUrlval) || '<no name set>';
    this.serverUrlVideoData = serverUrlval;

  }
  @Input()          //setting the server url from project
  set TokenForVideo(tokenval: any) {
    this.tokenVideoViaApp = (tokenval) || '<no name set>';
    this.tokenVideoViaApp = tokenval;
  }
  @Input()          //setting the updateendpoint from App for video
  set updatedEndpointForVideo(val: any) {
    this.addupdateVideoRouteUrl = (val) || '<no name set>';
    this.addupdateVideoRouteUrl = val;
  }
  @Input()          //setting the server url from project for video
  set TableNameForVideo(val: any) {
    this.TableNameVideoViaApp = (val) || '<no name set>';
    this.TableNameVideoViaApp = val;
  }
  @Input()
  set DeleteEndpointForVideo(val: any) {
    this.deleteEndpointVideoViaApp = (val) || '<no name set>';
    this.deleteEndpointVideoViaApp = val;
  }



  public VideoDataListing_skip: any = ["_id", "description", "created_at", "updated_at", "id", "description_html", "parent_category_search", "title_search,video_type", "date_unix", "title_search"];
  public VideoDataListing_modify_header: any = {
    "title": "Title", "priority": "Priority",
    "status": "Status", "videoUrl": "Video Url", "parent category": "Parent Category", "vimeo url": "Vimeo Url", "date added": "Date"
  };
  public video_previewModal_detail_skip: any = ['_id', 'created_at', 'id', 'updated_at', 'title_search', 'parent_category_search', "date_unix"];
  public video_status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  public video_search_settings: any =
    {
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
      textsearch: [{ label: "Search By Title", field: 'title_search' }, { label: "Search By Parent Category", field: 'parent_category_search' }],
      datesearch: [{ startdatelabel: "Start Date", enddatelabel: "End Date", submit: "Search By Date", field: "date_unix" }]

    };

  public video_searchendpoint: any;

  public video_sortdata: any = {
    type: 'asc',                                              //  default sort data ascend and descend (desc)
    field: 'priority',                                         // default field for sorting
    options: ['title', 'priority']
  };

  public video_datacollection: any;

  public video_date_search_source_count: any;

  public video_libdata: any = {
    updateendpoint: 'api1/videocatstatusupdate',
    updateendpointmany: 'api1/videocatstatusupdate',
    deleteendpointmany: 'api1/deletevideocat',
    hideviewbutton: true,
  };

  public video_limitcond: any = {
    limit: 10,
    skip: 0,
    pagecount: 1
  };


  constructor(public activeRoute: ActivatedRoute, public router: Router, public apiService: ApiService) {
    // for cat count      
    setTimeout(() => {
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
          field: 'priority'                                         // default sort field
        }
      };
      this.apiService.CustomRequestPost(data, catendpoint)
        .subscribe((response: any) => {
          this.date_search_source_count = response.count;
        });

    }, 500);

    //for video
    setTimeout(() => {
      this.video_datacollection = 'api1/videogallerydata';
      let catendpoint: any = this.serverUrlData + 'api1/videogallerydata-count';
      console.log(catendpoint, 'catendpoint')
      const data: any = {
        condition: {
          limit: 10,
          skip: 0
        },
        sort: {
          type: 'desc',                                           // defalut field sort type
          field: 'priority'                                         // default sort field
        }
      };
      this.apiService.CustomRequestPost(data, catendpoint)
        .subscribe((response: any) => {
          this.video_date_search_source_count = response.count;
        });

    }, 500);

  }

  ngOnInit() {


  }
  addVideoCategoryButton() {

    this.router.navigateByUrl('/' + this.AddButtonRouteViaApp);
  }

  videoManagementButton() {

    this.router.navigateByUrl('/' + this.AddVideoButtonRouteViaApp);
  }

}