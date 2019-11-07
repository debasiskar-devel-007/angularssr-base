import { OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
export declare class AddEditNewsletterlibComponent implements OnInit {
    private atp;
    header_name: any;
    buttonText: any;
    /**ckeditor start here*/
    Editor: any;
    editorConfig: {
        placeholder: string;
    };
    model: {
        editorData: string;
    };
    /**ckeditor end here*/
    constructor(atp: AmazingTimePickerService);
    ngOnInit(): void;
    open(): void;
}
