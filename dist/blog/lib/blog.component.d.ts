/** This is the category listing **/
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';
export declare class BlogComponent implements OnInit {
    apiService: ApiService;
    blodata: any;
    sortdata: any;
    date_search_source_count: any;
    limitcond: any;
    datasource: any;
    libdata: any;
    blogListConfig: any;
    loader: boolean;
    value: any;
    config: any;
    constructor(apiService: ApiService);
    ngOnInit(): void;
}
