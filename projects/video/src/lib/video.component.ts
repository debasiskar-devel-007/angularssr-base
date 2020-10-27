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
  public catupateDeletEendpoint:any;

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
  public countDataVideoViaApp:any;
  public VideoDataViaApp:any;
  public videoUpdateDeleteEndpoint:any;
  public paramsuserid: any='';
  ;  /**lib-listing start here **/
  public allDataList: any = [];
  public allDataList_skip: any = ["_id", "parent_id", "title_search", "parentvideocategory_search", "date_unix", '_v', 'v'];
  public allDataList_modify_header: any = {
    'title': "Title", 'description': "Description",
    "status": "Status", "priority": "Priority", "parentvideocategory": "Parent Category",'createdatetime':'Date'
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
    updateendpoint: '',
    updateendpointmany: '',
    deleteendpointmany: '',
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
  
  @Input()
  set catupdatedeleteendpoint(val: any) {
    this.catupateDeletEendpoint = (val) || '<no name set>';
    this.catupateDeletEendpoint = val;
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

  @Input()
  set CountvideoEndpoint(val: any) {
    this.countDataVideoViaApp = (val) || '<no name set>';
    this.countDataVideoViaApp = val;
  }


  @Input()
  set videodataSourcename(val: any) {
    this.VideoDataViaApp = (val) || '<no name set>';
    this.VideoDataViaApp = val;
  }
  @Input()
  set videoupdatedeleteendpoint(val: any) {
    this.videoUpdateDeleteEndpoint = (val) || '<no name set>';
    this.videoUpdateDeleteEndpoint = val;
  }

  @Input()
  set UserId(val: any) {
    this.paramsuserid = (val) || '<no name set>';
    this.paramsuserid = val;
    console.log('Userid',this.paramsuserid)
  }


  public VideoDataListing_skip: any = ["_id", "created_at", "updated_at", "id", "description_html", "parent_category_search", "title_search,video_type", "date_unix", "title_search",'userid'];

  public VideoDataListing_modify_header: any = {
    "title": "Title",'description':'Description', "priority": "Priority",
    "status": "Status", "videoid": "Video ID", "parent_category": "Parent Category", "vimeo url": "Vimeo Url", "date added": "Date",'type':'Type','video':'Video','createdatetime':'Date'
  };

  public video_previewModal_detail_skip: any = ['_id', 'created_at', 'id', 'updated_at', 'title_search', 'parent_category_search', "date_unix",'userid'];
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
    updateendpoint: 'api1/videostatusupdate',
    updateendpointmany: 'api1/videostatusupdate',
    deleteendpointmany: 'api1/deletevideo',
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

      this.libdata={
        hideviewbutton: true,
        updateendpoint: this.catupateDeletEendpoint.updateendpoint,
        updateendpointmany: this.catupateDeletEendpoint.updateendpointmany,
        deleteendpointmany:  this.catupateDeletEendpoint.deleteendpointmany,
        tableheaders:['title','description','priority','status','parentvideocategory','createdatetime']
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
      this.video_libdata={
        basecondition:{},
        hideviewbutton: true,
        updateendpoint: this.videoUpdateDeleteEndpoint.updateendpoint,
        updateendpointmany: this.videoUpdateDeleteEndpoint.updateendpointmany,
        deleteendpointmany:  this.videoUpdateDeleteEndpoint.deleteendpointmany,
        tableheaders:['title','description','priority','status','parent_category','createdatetime','type','videoid','video']
      }

      this.video_datacollection = this.VideoDataViaApp;
      let catendpoint: any = this.serverUrlData + this.countDataVideoViaApp;
      // console.log(catendpoint, 'catendpoint')
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
      if(this.paramsuserid != null && this.paramsuserid != ''){
        data.condition={ limit: 10,skip: 0, userid: this.paramsuserid} 
        this.video_libdata.basecondition = {userid: this.paramsuserid}
      }
      this.apiService.CustomRequestPost(data, catendpoint)
        .subscribe((response: any) => {
          this.video_date_search_source_count = response.count;
        });

    }, 1000);

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
