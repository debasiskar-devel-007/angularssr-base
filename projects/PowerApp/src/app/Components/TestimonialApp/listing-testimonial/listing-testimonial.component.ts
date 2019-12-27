import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-listing-testimonial',
  templateUrl: './listing-testimonial.component.html',
  styleUrls: ['./listing-testimonial.component.css']
})
export class ListingTestimonialComponent implements OnInit {


  /************** lib list setup start here *************/
  public testimonialListConfig:any = {
    apiBaseUrl: "https://i1kzfac3pe.execute-api.us-east-1.amazonaws.com/dev/api/",
    listEndPoint: "datalist",
    datasource: "",
    tableName: "testimonial",
    updateurl: "addorupdatedata",
    editUrl: "testimonial/edit",
    jwtToken: "",   
    deleteEndPoint: "deletesingledata",
    addLink: "/testimonial/add",
    view: "testimonial_view"
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) { 

  this.activatedRoute.data.subscribe(resolveData => {
    this.testimonialListConfig.datasource = resolveData.testimonialList.res;
    this.testimonialListConfig.jwtToken = this.cookieService.get('jwtToken');
    
  });
}

  ngOnInit() {
  }

}
