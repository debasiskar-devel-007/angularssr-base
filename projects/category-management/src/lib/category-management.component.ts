import { Component, OnInit, ViewChild, Input, Inject,
        ComponentFactoryResolver, ComponentRef, Directive,
        ViewContainerRef } from '@angular/core';

@Component({
  selector: 'lib-category-management',
  templateUrl: 'category-management.component.html',
  styleUrls: [ './style.css' ]
})

export class CategoryManagementComponent implements OnInit {

  public categoryData: any;
  @Input()
  set config(receivedCategoryData: any) {
    this.categoryData = receivedCategoryData;
  }

  constructor() { 
    
  }

  ngOnInit() {
  }

}
