import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

/** This is the actuali main blog page **/

@Component({
  selector: 'lib-listing-blogmanagementlib',
  templateUrl: './listing-blogmanagementlib.component.html',
  styleUrls: ['./listing-blogmanagementlib.component.css']
})
export class ListingBlogmanagementlibComponent implements OnInit {

public value:any=[];
public category_names:any=[];

  // ===========================================declaration================================
  blogListConfig: any;
  loader: boolean = false;
  // ======================================================================================
 // send basic sort data
 sortdata:any={
  "type":'desc',
  "field":'priority',
  "options":['author','blogcategory','blogtitle','priority','createdon_datetime']
};
// datacollection
// datacollection: any='getblogmanagementlistdata';
date_search_source_count: any=0;
// send basic limit data
limitcond:any={
  "limit":10,
  "skip":0,
  "pagecount":1
}; 




datasource:any;

public tag_data:any=[];
public authval:any=[];
public wesitesVal:any;
  // ================================================Input For Lib Listing================================
  @Input()
  set config(receivedData: any) {
for (let i in receivedData.datasource) {
  this.value.push(receivedData.datasource[i].blogcategory);
}
for (let i in receivedData.datasource) {
  for (let val in receivedData.datasource[i].tags) {
    this.authval.push(
      { 'name': receivedData.datasource[i].tags[val], val: receivedData.datasource[i].tags[val] }
    );
  }
  

}

// console.log(this.value,'>>>')

  const arr = this.value;
  // console.log(arr)
  const filteredArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
  });
  // this.category_name = [];
  for (const key in filteredArray) {
    // console.log(filteredArray[key])
    this.category_names.push({ name: filteredArray[key], val: filteredArray[key] });
  }
  // console.log(this.category_names,'++>>>')


   this.wesitesVal = receivedData.datasource.website;
  //  console.log("+++++++++++++++++",this.wesitesVal);
    this.blogListConfig = {
      apiUrl: receivedData.apiBaseUrl,
      endpoint :receivedData.endpoint,
      endpointc:receivedData.endpointc,
      listEndPoint: receivedData.listEndPoint,
      datasource: receivedData.datasource,
      tableName: receivedData.tableName,
      datacollection:receivedData.datacollection,
      listArray_skip: ["_id", "userId", "created_at", "updated_at", "metatitle", "metadesc", "credentials", "blogs_file","blogtitle_search","author_search","video","blogcat","profile_picture","tagsearch","featured","maskblog1","maskblog2","maskblog3","tags_search","website",'description'],
      listArray_modify_header: {
        "blogtitle": "Blog Title","date added":"Date","profile picture":"Profile Picture","tags":"Tags",
        "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name",
        "author": "Author","blogcat":"Blog Category","date":"Date","blogcategory":"Blog Category",
        "featured search":"Featured","createdon_datetime":"Added On","featured":"Featured",
        "description": "Blog Description",'video':'Video','image':'Image','description_html':'Blog Description'
      },
      blog_detail_skip:['_id','password','updated_at','id',"blogcat","created_at","profile_picture","tags",'vd_array','img_array','image','video','image_array_field','video_array_field','blog_videos','status','featured','Vd_array','vd array','vd_array','Featured'],
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      // updateurl: receivedData.updateEndpoint,
      editUrl: receivedData.editUrl,
      jwtToken: receivedData.jwtToken,
      deleteEndPoint: receivedData.deleteEndPoint,
      view: receivedData.view,
      search_settings: {

        datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search",  field:"createdon_datetime"}],   // this is use for  date search //created at = field in res which gives date in unix format that changes to ist using moment.js

        textsearch: [{ label: "Search By Blog Title", field: 'blogtitle' },{ label: "Search By Author", field: 'author' }],

        selectsearch: [
          
          { label: 'Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }]
        },
          {label:"Search By Category Name",field:'blogcategory',values:this.category_names},
          // {
          //   label: 'Search By Blog Featured', field: 'featured', values: [{ val: 1, name: "Yes" }, { val: 0, name: 'No' }]
          // },
          // {
          //   label: 'Search By Blog Website', field: 'website', values: [{ val: "Mask Blog 1", name: "Mask Blog 1" }, { val: "Mask Blog 2", name: 'Mask Blog 2' },{val:"Mask Blog 3",name:"Mask Blog 3"}]
          // }
        ],
        search:[{label:"Search By Tags",field:'tags',values:this.authval}]

      },
      //  /*Showing Image in the Modal*/
       pendingmodelapplicationarray_detail_datatype: [
      //    {
      //   key: "image",
      //   value: 'image',
      //   fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/blogs/'             // Image path 
      // }
    ],
    }
    this.loader = false;
  }
  // ====================================================================================================
  libdata:any={
    basecondition:'',
    updateendpoint:'statusupdateforblog',
    hideeditbutton:false,// all these button options are optional not mandatory
    hideviewbutton:true,
    updateendpointmany: 'blogupdate',
    deleteendpointmany: 'blogdelete',

    detailview_override:[
      {key:"blogtitle",val:"Blog Title :"},
      {key:"description",val:"Description :"},
      {key:"priority",val:"Priority :"},
      {key:"status",val:"Status :"},
      {key:"tagsearch",val:"Tags :"},
      {key:"createdon_datetime",val:"Added on :"},
      {key:"blogcategory",val:"Category Name :"},
      {key:'author',val:'Author :'},
      // {key:'image',val:'Image'},
      // {key:'video',val:'Video'},
      {key:'video_title',val:'Video Title :'},
      {key:'featured_search',val:'Featured :'},
      {key:'video_description',val:'Video Description :'},
      {key:'image_array',val:'Images :'},
      {key:'video_array',val:'Videos :'},
      {key:'img_array',val:'Images :'},
      {key:'vd_array',val:'Videos'}

  ], // optional
  
    
    tableheaders:['blogtitle','description_html','author','blogcategory','tags','priority','status','createdon_datetime', 'video','image'], //not required
    custombuttons:[
  //     {
  //       label:"Videos",
  //       type:'action',
  //       datatype:'local',
  //       datafields:['vd_array'],
  //       // cond:'video',
  //       // condval:''

  //   },
  //   {
  //     label:"Images",
  //     type:'action',
  //     datatype:'local',
  //     datafields:['img_array'],
  //     // cond:'image',
  //     // condval:''
  // } ,
  {
    label:"Videos",
    type:'action',
    datatype:'local',
    datafields:['vd_array'],
    cond:'video_array_field',
    condval:1

},
{
  label:"Images",
  type:'action',
  datatype:'local',
  datafields:['img_array'],
  cond:'image_array_field',
  condval:1
} 

    ]
} 
  

  constructor(private apiService: ApiService) {
   
  }

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
        // console.log('in constructor');
        // console.log(result);
        this.date_search_source_count =res.count;
        // console.warn('blogData c',res);

    }, error => {
        // console.log('Oooops!');
    });

    // this.apiService.getDataWithoutToken(endpoint,data).subscribe((res:any) => {
    //   this.datasource=res.results.res;        // console.log('in constructor');
    //     // console.log(result);
    //     // this.pendingmodelapplicationarray =res.results.res;
    //     //console.warn('blogData',res);

    // }, error => {
    //     console.log('Oooops!');
    // });

  }
}

