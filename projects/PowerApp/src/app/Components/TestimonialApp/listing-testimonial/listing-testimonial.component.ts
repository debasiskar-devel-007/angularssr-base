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
    apiBaseUrl: "https://9v41bpikik.execute-api.us-east-1.amazonaws.com/dev/api/",
    listEndPoint: "datalist",
    datasource: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1ODMyMjIwMzQsImlhdCI6MTU4MzEzNTYzNH0.xAZvv_UbqrKksHklYMClsbqntHE5YXFNEp7uM9f-H0s",
    tableName: "testimonial_view",
    updateurl: "addorupdatedata",
    editUrl: "testimonial/edit",
    jwtToken: "",   
    deleteEndPoint: "deletesingledata",
    addLink: "/testimonial/add",
    view: "testimonial_view"
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) { 

  this.activatedRoute.data.subscribe(resolveData => {
    console.warn(resolveData);
    this.testimonialListConfig.datasource = resolveData.testimonialList.res;
    this.testimonialListConfig.jwtToken = this.cookieService.get('jwtToken');
    
  });
}

  ngOnInit() {
  }

}
