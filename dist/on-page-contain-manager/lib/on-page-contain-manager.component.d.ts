import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
export declare class OnPageContainManagerComponent implements OnInit {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    ngOnInit(): void;
    openModal(): void;
}
