import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './component/common/dialog/dialog.component';

@Component({
  selector: 'lib-on-page-contain-manager',
  templateUrl: 'on-page-contain-manager.html',
  styleUrls: ['./style.css']
})
export class OnPageContainManagerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModal() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
