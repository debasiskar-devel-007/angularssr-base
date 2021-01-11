import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'lib-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})



export class ResetPasswordComponent implements OnInit {
  //   FormGroupDirective: It is a directive that binds an existing FormGroup to a DOM element.
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  public resetPasswordForm: FormGroup;
  public fromTitleNameValue: any = '';
  public serverUrlValue: any = '';
  public message: any = '';
  public addEndpointValue: any = '';

  public logoValue: any = '';
  // public signUpRouteingUrlValue: any = '';
  public durationInSeconds = 5;             // This is SnackBar set time
  public validationMessageValue: any ='';

  @Input()         // Set the Form name
  set fromTitleName(fromTitleNameVal: any) {
    this.fromTitleNameValue = (fromTitleNameVal) || '<no name set>';
    this.fromTitleNameValue = fromTitleNameVal;
    console.log(this.fromTitleNameValue);
  }


  @Input()        // setting the server url from project
  set serverUrl(serverUrlVal: any) {
    this.serverUrlValue = (serverUrlVal) || '<no name set>';
    this.serverUrlValue = serverUrlVal;
    console.log(this.serverUrlValue);

  }

  @Input()        // set the endpoint and source

  public set addEndpoint(addEndpointVal: any) {
    this.addEndpointValue = addEndpointVal;
  }

  @Input()      // set the from logo

  set logo(logoVal: any) {
    this.logoValue = logoVal;
  }

  @Input()      // set the from logo

  set validationMessage(validationMessageVal: any) {
    this.validationMessageValue = validationMessageVal;
  } 


  // @Input()          // setting the navigate By Sign Up Url from project
  // set validationMessage(validationMessageval: any) {
  //   this.validationMessageValue = (validationMessageval) || '<no name set>';
  //   this.validationMessageValue = validationMessageval;
  //   console.log(this.validationMessageValue);
  // }
  public accesscode: string;

  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router, public route: ActivatedRoute, public apiService: ApiService, private snackBar: MatSnackBar) {

    this.route.params.subscribe(params => {

      this.accesscode = params['token'];
      // console.log(this.accesscode);
    })


    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, this.PasswordStrengthValidator]],
      // password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this.machpassword('password', 'confirmPassword')
    })

    console.log('++++++++', this.resetPasswordForm)
  }

  ngOnInit() {
    this.apiService.clearServerUrl();       // Clear the server url
    setTimeout(() => {
      this.apiService.setServerUrl(this.serverUrlValue);       // set the server url 
    }, 50);
    // console.log(this.serverURL);


    this.apiService.clearaddEndpoint();       // clear the endpoint 
    setTimeout(() => {
      this.apiService.setaddEndpoint(this.addEndpointValue.endpoint);       // set the endpoint
    }, 50);
    // console.log(this.addEndpointData.endpoint);

  }
  //  this function is use for mach password and confirm Password 

  machpassword(passwordkye: string, confirmpasswordkye: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordkye],
        confirmpasswordInput = group.controls[confirmpasswordkye];
      if (passwordInput.value !== confirmpasswordInput.value) {
        return confirmpasswordInput.setErrors({ notEquivalent: true });
      }
      else {
        return confirmpasswordInput.setErrors(null);
      }
    };
  }


  PasswordStrengthValidator = function (control: AbstractControl): ValidationErrors  | null {
    let value: string = control.value || '';
    if (!value) {
      return null
    }
console.log(control)
    // Upper Case Validation
    // if (typeof (this.validationMessageValue) != 'undefined' && this.validationMessageValue.upperCaseCharacters != null && typeof (this.validationMessageValue.upperCaseCharacters) != 'undefined' && this.validationMessageValue.upperCaseCharacters.test(value) === false) {
    //   return { passwordStrength: this.validationMessageValue.upperCaseCharactersMessage };
    // }


    // // Lower Case Validation
    // if (typeof (this.validationMessageValue) != 'undefined' && this.validationMessageValue.lowerCaseCharacters != null && typeof (this.validationMessageValue.lowerCaseCharacters) != 'undefined' && this.validationMessageValue.lowerCaseCharacters.test(value) === false) {
    //   return { passwordStrength: this.validationMessageValue.lowerCaseCharactersMessage };
    // }

    // // Number of Characters Validation
    // if (typeof (this.validationMessageValue) != 'undefined' && this.validationMessageValue.numberCharacters != null && typeof (this.validationMessageValue.numberCharacters) != 'undefined' && this.validationMessageValue.numberCharacters.test(value) === false) {
    //   console.log(value, '+++')
    //   return { passwordStrength: this.validationMessageValue.numberCharactersMessage };
    // }


    // // Psecial Case Validation
    // if (typeof (this.validationMessageValue) != 'undefined' && this.validationMessageValue.specialCharacters != null && typeof (this.validationMessageValue.specialCharacters) != 'undefined' && this.validationMessageValue.specialCharacters.test(value) === false) {
    //   console.log(value, '+++')
    //   return { passwordStrength: this.validationMessageValue.specialCharactersMessage };
    // }

    // // Min Number Validation
    // if (typeof (this.validationMessageValue) != 'undefined' && this.validationMessageValue.minLengthOfCharacters != null && typeof (this.validationMessageValue.minLengthOfCharacters) != 'undefined' && value.length <= this.validationMessageValue.minLengthOfCharacters) {
    //   console.log(value, '+++')
    //   return { passwordStrength: this.validationMessageValue.minLengthOfCharactersMessage };
    // }


    // // Max Number Validation
    // if (typeof (this.validationMessageValue) != 'undefined' && this.validationMessageValue.maxLengthOfCharacters != null && typeof (this.validationMessageValue.maxLengthOfCharacters) != 'undefined' && value.length >= this.validationMessageValue.maxLengthOfCharacters) {
    //   console.log(value, '+++')
    //   return { passwordStrength: this.validationMessageValue.maxLengthOfCharactersMessage };
    // }

    let upperCaseCharacters = /[A-Z]+/g
    if (upperCaseCharacters.test(value) === false) {
      return { passwordStrength: `Password at least one Upper case character` };
    }

    let lowerCaseCharacters = /[a-z]+/g
    if (lowerCaseCharacters.test(value) === false) {
      return { passwordStrength: `Password at least one lower case character` };
    }


    let numberCharacters = /[0-9]+/g
    if (numberCharacters.test(value) === false) {
      return { passwordStrength: `Password at least one number characters` };
    }

    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    if (specialCharacters.test(value) === false) {
      return { passwordStrength: `Password at least one special character` };
    }

if (value.length <=6 ) {
      return { passwordStrength: `Password must contain 6 character` };
    }
    
    return null;
  }




  /********* Reset Password Form Submit start here*********/
  resetPasswordSubmit() {
    console.log(this.resetPasswordForm.value);
    let x: any;
    for (x in this.resetPasswordForm.controls) {
      this.resetPasswordForm.controls[x].markAsTouched();
    }
    if (this.resetPasswordForm.valid) {
      let data1: any = { "password": this.resetPasswordForm.value.password, "accesscode": this.accesscode }
      let data: any = {
        'data': data1,
        "source": this.addEndpointValue.source
      }


      // data.accesscode = this.accesscode;

      this.apiService.addData(data).subscribe((response) => {
        let result: any = {};
        result = response;
        console.log(result);
        if (result.status == "success") {
          if (this.addEndpointValue.redirect_url != null) {
            this.router.navigateByUrl(this.addEndpointValue.redirect_url);
          }
          this.openSnackBar();
          this.formDirective.resetForm();       // Use for reset the form
          this.message = '';
        } else {
          this.message = result.msg;
        }
      })
    }
  }


  openSnackBar() {
    this.snackBar.openFromComponent(snackBarResetComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }


  /********* Reset Password Form Submit end here*********/


  inputUntouched(val: any) {
    this.resetPasswordForm.controls[val].markAsUntouched();
  }




}

@Component({
  selector: 'snack-bar-modale',
  template: `Password changed successfully`,
  styles: [`
    .example {
      color: aliceblue;
      background-color: yellowgreen;
    }
  `],
})
export class snackBarResetComponent { }