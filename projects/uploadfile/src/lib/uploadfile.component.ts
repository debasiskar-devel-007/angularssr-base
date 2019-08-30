import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'lib-uploadfile',
   templateUrl:'uploadfile.component.html',
  styleUrls:['uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {

  public Editor = ClassicEditor;
  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();

    console.log( data );
}

  constructor() { }

  ngOnInit() {
  }
}
