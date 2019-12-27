import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-addedit-testimonial',
  templateUrl: './addedit-testimonial.component.html',
  styleUrls: ['./addedit-testimonial.component.css']
})
export class AddeditTestimonialComponent implements OnInit {
/* Config for add and edit start */
public configAddEdit: any = {
  action: "add",
  endpoint: "https://i1kzfac3pe.execute-api.us-east-1.amazonaws.com/dev/api/addorupdatedata",
  source: "testimonial",
  condition: {},
  defaultData: null,
  jwtToken: this.cookieService.get('jwtToken'),
  callBack: "testimonial/list",
  userData: { id: "18801017007", name: "Admin" },
}

public configData: any = {
  baseUrl: "https://fileupload.influxhostserver.com/",
  endpoint: "uploads",
  size: "51200", // kb
  format: ["jpg", "jpeg","png"], // use all small font
  type: "testimonial-image",
  path: "testimonial",
  prefix: "testimonial-image_",
  formSubmit: false,
  conversionNeeded: 0,
  bucketName: "crmfiles.influxhostserver"
}

/* Config for add and edit end */

  constructor( private router : Router , private activatedRoute : ActivatedRoute ,private cookieService : CookieService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.testimonialData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}
