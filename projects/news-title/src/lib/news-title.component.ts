import { Component, OnInit, Inject, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from './api.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

export interface DialogData {
  name: string;
  serverUrlValue: any
}



@Component({
    selector: 'lib-newsTitle',
  // templateUrl:'./news-title.component.html',
  template: ``,
  styleUrls: ['./news-title.component.css']
})
export class NewsTitleComponent implements OnInit {
  public name: string;
  public formTitleValue: any = '';
  public serverUrlValue: any = '';
  public addEndpointValue: any = '';

  @Input()
  set formTitle(formTitleVal : any) {
    this.formTitleValue = formTitleVal;
  }
  @Input()        // setting the server url from project
  set serverUrl(serverUrlVal: any) {
    this.serverUrlValue = (serverUrlVal) || '<no name set>';
    this.serverUrlValue = serverUrlVal;
    // console.log(this.serverUrlValue);

  }
  @Input()        // set the endpoint And source
  public set addEndpoint(addEndpointVal: any) {
    this.addEndpointValue = addEndpointVal;
    // console.log(this.addEndpointValue)
  }
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  
public durationInSeconds: any = 10;

  public newsTitleForm: FormGroup;
  constructor(public fb: FormBuilder, public apiService: ApiService, private _snackBar: MatSnackBar,public dialog: MatDialog) {
      this.newsTitleForm = this.fb.group({
        fullname:['',Validators.required],
        phone:['',Validators.required],
        company:['',Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
      });


      // setInterval(()=> {
      //   this.openSnackBar(); },4000); 
      this.openDialog();
    }

    openSnackBar() {
      this._snackBar.openFromComponent(NewsTitleComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }
  

    ngOnInit() {
      this.apiService.clearServerUrl();       //  Clear the server url
      setTimeout(() => {
        this.apiService.setServerUrl(this.serverUrlValue);        //  set the server url
      }, 50);
      // console.log(this.serverURL);
  
  
      this.apiService.clearaddEndpoint();       //  Clear the endpoint
      setTimeout(() => {
        this.apiService.setaddEndpoint(this.addEndpointValue.endpoint);   //  set the endpoint
      }, 50);
    }

  newsTitleFormSubmit() {
    for (const key in this.newsTitleForm.controls) {
      this.newsTitleForm.controls[key].markAsTouched();
    }
    if (this.newsTitleForm.valid) {
      console.log(this.newsTitleForm.value);
      let data: any = {
        'data': this.newsTitleForm.value,
        "source": this.addEndpointValue.source
      };
      this.apiService.addData(data).subscribe((responce) =>{
        console.log(responce);
        let result : any ={};
        result = responce;
        if (result.status == "success") {
          this.formDirective.resetForm();
        }
      })
    }
   
  }

  inputUntouched(val: any) {
    console.log('ok----');
    this.newsTitleForm.controls[val].markAsUntouched();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(modalData, {
      // width: '250px',
      // data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }



 
}


@Component({
  selector: 'modalData',
  templateUrl: './modale.html',   
  // template:`
  // <mat-form-field>
  //               <input matInput placeholder="Name ">

  //           </mat-form-field>
  // `
})
export class modalData{

  public newsLatterForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<modalData>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
     public apiService: ApiService, public fb: FormBuilder) {

      this.newsLatterForm = this.fb.group({
        fullname:['',Validators.required],
        phone:['',Validators.required],
        company:['',Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  newsLatterFormSubmit() {
    console.log(this.newsLatterForm.value)
  }
  


  inputUntouched(val: any) {
    console.log('ok----');
    // this.newsTitleForm.controls[val].markAsUntouched();
  }

}

