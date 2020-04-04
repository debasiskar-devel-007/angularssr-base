import { OnInit } from '@angular/core';
import { ApiService } from '../api.service';
/** This is the actuali main blog page **/
export declare class ListingBlogmanagementlibComponent implements OnInit {
    private apiService;
    value: any;
    blogListConfig: any;
    loader: boolean;
    sortdata: any;
    datacollection: any;
    date_search_source_count: any;
    limitcond: any;
    config: any;
    constructor(apiService: ApiService);
    ngOnInit(): void;
}
