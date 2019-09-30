import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
public headerText:any="Image Category List";
  constructor() { }

  ngOnInit() {
  }

}
