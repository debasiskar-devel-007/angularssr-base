import { Component, OnInit, ViewChild, Input, Inject,
  ComponentFactoryResolver, ComponentRef, Directive,
  ViewContainerRef } from '@angular/core';

@Component({
  selector: 'lib-lession-management',
  templateUrl: 'lession-management.component.html',
  styleUrls: [ './style.css' ]
})

export class LessionManagementComponent implements OnInit {

  public lessionData: any;
  @Input()
  set config(receivedLessionData: any) {
    this.lessionData = receivedLessionData;
  }

  constructor() { }

  ngOnInit() {
  }

}
