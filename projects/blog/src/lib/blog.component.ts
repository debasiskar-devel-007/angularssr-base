
/** This is the category listing **/

import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'lib-Blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['style.css']
})
export class BlogComponent implements OnInit {
  public blodata:any=[];
 // send basic sort data
 sortdata:any={
  "type":'desc',
  "field":'priority',
  "options":['priority','blogtitle','blogcat_count','parentcategoryname']
};
// datacollection
// datacollection: any='getbloglistdata';
date_search_source_count: any=0;
// send basic limit data
limitcond:any={
  "limit":10,
  "skip":0,
  "pagecount":1
}; 

datasource:any;

libdata:any={
  basecondition:'',
  updateendpoint:'statusupdateforblogcategory',        // update endpoint set
  hideeditbutton:false, // (hide edit button ) all these button options are optional not mandatory

  updateendpointmany: 'blogcatupdate',
  deleteendpointmany: 'blogcatdelete',

  tableheaders:['blogtitle','description','priority','status','parentcategoryname','blogcat_count'], //not required (table header name)
  detailview_override:[
    {key:"blogtitle",val:"Category Name"},
    {key:"description",val:"Description"},
    {key:"priority",val:"Priority"},
    {key:"status",val:"Status"},
    {key:"blogcat_count",val:"Category Count"},
    {key:"parentcategoryname",val:"Parent Category Name"},
    {key:"blogcat_count",val:"Category Count"}
], // optional


//   custombuttons:[
//       {
//           label:"fb search with blog title",        // fb search button name
//           link:"https://www.facebook.com/search/top/",  // fb search link
//           type:'externallink',                          // external link
//           param:[{key:'blogtitle',q:'q'}],              // passed parameter like https://www.facebook.com/search/top/?q=VPOTips%20You%20Should%20Know%20For%20Buying%20Used%20CarsWJY
//       },
//       {
//           label:"G search with blog title ACtive",      // google search button name 
//           link:"https://www.google.com/search",         // google search link
//           type:'externallink',                          // external link
//           param:[{key:'blogtitle',q:'q'},{key:'author',q:'oq'}], //passed parameter like https://www.google.com/search?q=VPOTips%20You%20Should%20Know%20For%20Buying%20Used%20CarsWJY&oq=YmattZ
//           cond:'status',                                // condition for status
//           condval: 0                                   // condition value status=0 , if value=1 and status =0 then the button will dissappear
//       },{
//           label:"mask blog",                                    //mask blog search button name
//           link:"https://mask-blog1.influxiq.com/blog-details",  // mask search link
//           type:'externallink',                                   // external link
//           paramtype:'angular',                                  // showing front end 
//           param:['blogtitle','_id'],                            // passed to parameter with blog title and id
//           cond:'status', // condition for status
//           condval: 0      // condition value status=0 , if value=1 and status =0 then the button will dissappear
//       },
//       {
//           label:" fb profile ",                             // fb profile button 
//           link:"https://www.facebook.com/debasiskar007",     // profile link
//           type:'externallink'
//       },
//       {
//           label:" fb profile for inactive",                  // fb profile for inactive status
//           link:"https://www.facebook.com/debasiskar007",     // profile link
//           type:'externallink',
//           cond:'status',                                       // condition for status
//           condval:0                                         // condition value status=0 , if value=1 and status =0 then the button will dissappear
//       },
//       {
//           label:" fb profile for active",                       // fb profile for active status
//           link:"https://www.facebook.com/debasiskar007",        // profile link
//           type:'externallink',                                   // external link
//           cond:'status',                                         //condition for status
//           condval:1 //condition value status=1 if value=0 and status =1 then the button will dissappear
//       },
//       {
//           label:"see brand",            // see brand button
//           route:"brand",               // go to brand route
//           type:'internallink',          // same application but different page .
//           cond:'status',                 // condition for status
//           condval:0                     // condition value status=0 , if value=1 and status =0 then the button will dissappear
//       },
//       {
//           label:"see brand with param",     // see brand button with param
//           route:"brand",                    // go to brand route
//           type:'internallink',             // same application but different page with params .
//           cond:'status',                    // condition for status
//           condval:0,                       //condition value status=0 , if value=1 and status =0 then the button will dissappear
//           param:['_id','blogtitle'],    // passed with params
//       }
//   ]
}
  // ===========================================declaration================================
  
  blogListConfig:any;
  loader:boolean=false;
  // ======================================================================================

  // ================================================Input For Lib Listing================================
  // public value:any=[{val:'','name':''}];
  public value:any=[];
  @Input()
  set config(receivedData: any) { 
    console.log(receivedData.datasource,'===+++++===')
     for (let i in receivedData.datasource) {
       this.value.push(
         { 'name': receivedData.datasource[i].parentcategoryname, val: receivedData.datasource[i].parentcategoryname }
         );
   }

    this.blogListConfig = {
      apiUrl: receivedData.apiBaseUrl,
      endpoint :receivedData.endpoint,
      endpointc:receivedData.endpointc,
      listEndPoint: receivedData.listEndPoint,
      datacollection:receivedData.datacollection,
      datasource:receivedData.datasource,
      // tableName: receivedData.tableName,
      blogcategory_detail_skip:["_id","createdon_datetime","parent_id",'id'],
      listArray_skip: ["_id", "userId", "created_at", "updated_at","image","description","parentcategoryname_search","blogtitle_search","blogtitlesearch","createdon_datetime"],
      listArray_modify_header: { "blogtitle":"Category Name", "priority": "Priority", "status": "Status" ,"parentcategoryname":"Parent Category Name","blogcat_count":"Category Count","date":"Date",'description':'Description'},
      // admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      updateurl: receivedData.updateEndpoint,
      editUrl: receivedData.editUrl,
      jwtToken: receivedData.jwtToken,
      deleteEndPoint: receivedData.deleteEndPoint,
      date_search_source: receivedData.date_search_source,

      search_settings:{
        // datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search",  field:"createdon_datetime"}],
        textsearch: [{ label: "Search by Category Name", field: 'blogtitle' },{ label: "Search by Parent Category Name", field: 'parentcategoryname' }],
        selectsearch: [
          { label: 'Search By Status', field: 'status',values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }]
        },
          // {label:"Search By Parent Category Name",field:'parentcategoryname',values:this.value}
        ]

        // search:[{label:"Search By Parent Category",field:'parentcategoryname',values:this.value}]
      }
      //  /*Showing Image in the Modal*/
      //  pendingmodelapplicationarray_detail_datatype: [{
      //   key: "image",
      //   value: 'image',
      //   fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/testimonial/'             // Image path 
      // }],
      
    }
    this.loader = false;
  }
  // ====================================================================================================

  constructor(public apiService:ApiService) { }

  ngOnInit() {
    let endpoint=this.blogListConfig.endpoint;
    let endpointc=this.blogListConfig.endpointc;

    let data:any={
        "condition":{
            "limit":10,
            "skip":0
        },
    sort:{
        "type":'desc',
        "field":'priority'
    }

    }
    this.apiService.getDataWithoutToken(endpointc, data).subscribe((res:any) => {
        this.date_search_source_count =res.count;
        console.log( this.date_search_source_count ,'++++++++++')
      
    }, error => {
        console.log('Oooops!');
    });

    // this.apiService.getDataWithoutToken(endpoint,data).subscribe((res:any) => {
    //   this.datasource=res.results.res;
    //   // console.log(res,'+++')
      
    
    // }, error => {
    //     console.log('Oooops!');
    // });

  }
  

}

