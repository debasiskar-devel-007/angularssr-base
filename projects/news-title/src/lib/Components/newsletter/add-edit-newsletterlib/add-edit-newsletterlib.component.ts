import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'lib-add-edit-newsletterlib',
  templateUrl: './add-edit-newsletterlib.component.html',
  styleUrls: ['./add-edit-newsletterlib.component.css']
})
export class AddEditNewsletterlibComponent implements OnInit {


  // =================declaration==================
  header_name:any="Newsletter"
  buttonText:any="SAVE";
  // ==============================================

    /**ckeditor start here*/
    public Editor = ClassicEditor;  //for ckeditor
    editorConfig = {
      placeholder: 'Content...',
    };
    public model = {
      editorData: ''
    };
    /**ckeditor end here*/
  constructor( private atp : AmazingTimePickerService ) { }

  ngOnInit() {
  }

  open()
  {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time=>{
      console.log(time);
    });
  }
}
