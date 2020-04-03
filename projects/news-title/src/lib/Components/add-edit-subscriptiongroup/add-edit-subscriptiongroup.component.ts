import { Component, OnInit, Input, Inject,ViewChild,ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NewsTitleService } from '../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {map, startWith} from 'rxjs/operators';


export interface DialogData {
  msg: string;
}


@Component({
  selector: 'lib-add-edit-subscriptiongroup',
  templateUrl: './add-edit-subscriptiongroup.component.html',
  styleUrls: ['./add-edit-subscriptiongroup.component.css']
})
export class AddEditSubscriptiongroupComponent implements OnInit {


  // =======================declaratiosn=====================
  subGroupForm: FormGroup;
  buttonText: any = "SUBMIT";
  header_name: any = "Add a group to subscriptions";
  configData: any;
  groupname:any;

  nameValForGroup:any='';
  group_array: any;
  dialogRef: any;
  successMessage: any = "Subscription Added Successfully..!!!";
  // ========================================================

  // filtered_group_array: Observable<any[]>;

  // group = new FormControl();

  // visible: boolean = true;
  // selectable: boolean = true;
  // removable: boolean = true;
  // addOnBlur: boolean = false;


  // separatorKeysCodes = [ENTER, COMMA];

  // @ViewChild('fruitInput') groupInput: ElementRef;

  constructor(private formBuilder: FormBuilder, private cookieService: CookieService,
    private newsService: NewsTitleService, private router: Router, public dialog: MatDialog) {

      // this.filtered_group_array = this.group.valueChanges.pipe(startWith(null),
      //   map((item: any) => item ? this.filter(item) : this.nameValForGroup.slice()));

        console.log('filtered_group_array--->',this.nameValForGroup)
     }

  ngOnInit() {

    //generating the form
    this.generateForm();

    //getting the group
    this.getGroup();

    //Switch Case starts here

    switch (this.configData.action) {
      case 'add':
        /* Button text */
        this.buttonText = "SUBMIT";
        this.header_name = "Add a Group";
        break;
      case 'edit':
        /* Button text */
        this.buttonText = "UPDATE";
        this.successMessage = "Subscription Updated Successfully..!!!";
        this.setDefaultValue(this.configData.defaultData);
        this.header_name = "Change/Remove Group";
        break;
    }


  }

  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }


  // =====================generate form==============
  generateForm() {
    this.subGroupForm = this.formBuilder.group({
      fullname: ['',[Validators.required]],
      phone: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      company: ['',[Validators.required]],
      group: [],
      status:[]
    });
  }
  // ================================================

  // ================================================Default value======================================
  setDefaultValue(defaultValue) {
    this.subGroupForm.patchValue({
      fullname: defaultValue.fullname,
      phone: defaultValue.phone,
      email: defaultValue.email,
      company: defaultValue.company,
      group: defaultValue.group,
      status:defaultValue.status
    });

  }
  // ==================================================================================================


  // =========================================MODAL functions==========================================
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(Modal2, {
      width: '250px',
      data: { msg: x }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  // =====================================================================================================
   /** blur function **/
   inputBlur(val: any) {
    this.subGroupForm.controls[val].markAsUntouched();
  }

  // ==========================================SUBMIT=================================================


  onSubmit() {


     /** marking as untouched **/
     for (let x in this.subGroupForm.controls) {
      this.subGroupForm.controls[x].markAsTouched();
    }


        /* stop here if form is invalid */
  
          if (this.subGroupForm.value.status) {
            this.subGroupForm.value.status = parseInt("1");
          } else {
            this.subGroupForm.value.status = parseInt("0");;
          }
        

    // if (this.subGroupForm.value.group == 0)
    //   this.successMessage = "Removed Group!!!";    
    /* stop here if form is invalid */
    if (this.subGroupForm.invalid) {
      return;
    } else {

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.subGroupForm.value, this.configData.condition)
      };
      this.newsService.addData(this.configData.endpoint, postData).subscribe((response: any) => {
        if (response.status == "success") {

          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 2000);
          this.router.navigate([this.configData.callBack]);
        } else {
          alert("Some error occurred. Please try angain.");
        }
      }, (error) => {
        alert("Some error occurred. Please try angain.");
      });
    }
  }
  // =================================================================================================

  // Getting the parent category
  getGroup() {
    let postData: any = {
      source: this.configData.groupData,
      token: this.cookieService.get('jwtToken')

    };
    this.newsService.getData(this.configData.endpoint2 + 'datalist', postData).subscribe((response: any) => {
      this.group_array = response.res;
      console.log('>>>',this.group_array)

 
    })
  }



  // mat chip use for listing 

  // filter(name: any) {
  //   this.nameValForGroup=this.group_array;
  //   for(let i in this.group_array){
  //     // console.log(this.group_array[i].name)
  //    this.groupname=this.group_array[i].name;
  //    return this.groupname.filter(item =>
  //     item.toLowerCase().indexOf(name.toLowerCase()) === 0)

  //   }
  //   ;
  // }

 
  // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;

  //   // Add our fruit
  //   if ((value || '').trim()) {
  //     this.nameValForGroup.push(value.trim());
  //   }

  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }

  //   // this.group.setValue(null);
  // }

  // remove(item: any,index:any): void {
  //   console.log('index-->',item,index)

  //   this.nameValForGroup=this.group_array;
  //   for(let i in this.group_array){
  //     // console.log(this.group_array[i].name)
  //    this.groupname=this.group_array[i].name;

  //     if(this.group_array[i]._id == item){
  //       this.group_array.splice(index,1);
  //     }

  //     // console.log('>>',this.groupname)
  //   }

  //   // const index = this.nameValForGroup.indexOf(item);

  //   if (index >= 0) {
  //   }
  // }

  // // filter(name: string) {
  // //   return this.group_array.filter(fruit =>
  // //       fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
  // // }

  // selected(event: MatAutocompleteSelectedEvent): void {
  //   this.nameValForGroup.push(event.option.viewValue);
  //   this.groupInput.nativeElement.value = '';
  //   // this.group.setValue(null);
  // }

}


// ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-modal',
  templateUrl: 'modal2.html',
})
export class Modal2 {

  constructor(
    public dialogRef: MatDialogRef<Modal2>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
// ======================================================================================================
