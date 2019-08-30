import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LessionManagementService } from '../../lession-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-list-lession',
  templateUrl: './list-lession.component.html',
  styleUrls: ['./list-lession.component.css']
})

export class ListLessionComponent implements OnInit {

  public lessionListingConfig: any;
  public loader: boolean = true;

  @Input()
  set config(receivedLessionData: any) {
    this.lessionListingConfig = receivedLessionData;
    this.loader = false;
  }

  constructor(private httpRequest: LessionManagementService, private router: Router) { }

  ngOnInit() {
  }

}
