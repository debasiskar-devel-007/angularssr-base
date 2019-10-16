import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class BlogsComponent implements OnInit {
    onSubmit: EventEmitter<{}>;
    fields: any[];
    form: FormGroup;
    constructor();
    ngOnInit(): void;
}
