import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-newsTitle',
  templateUrl:'./news-title.component.html',
  styleUrls: ['./news-title.component.css']
})
export class NewsTitleComponent implements OnInit {

  public newsTitleForm: FormGroup;
  constructor(public fb: FormBuilder) {
      this.newsTitleForm = this.fb.group({
        fullname:['',Validators.required],
        phone:['',Validators.required],
        company:['',Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
      })
    }
    ngOnInit() {

    }

  newsTitleFormSubmit() {
    for (const key in this.newsTitleForm.controls) {
      this.newsTitleForm.controls[key].markAsTouched();
    }
    if (this.newsTitleForm.valid) {
      console.log(this.newsTitleForm.value);
    }
   
  }

  inputUntouched(val: any) {
    console.log('ok----');
    this.newsTitleForm.controls[val].markAsUntouched();
  }



 
}
