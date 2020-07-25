import { OnInit } from '@angular/core';
import { ApiService } from '../api.service';
/** This is the actuali main blog page **/
export declare class ListingBlogmanagementlibComponent implements OnInit {
    private apiService;
    value: any;
    category_names: any;
    blogListConfig: any;
    loader: boolean;
    sortdata: any;
    date_search_source_count: any;
    limitcond: any;
    datasource: any;
    tag_data: any;
    authval: any;
    wesitesVal: any;
    config: any;
    libdata: any;
    constructor(apiService: ApiService);
    ngOnInit(): void;
}
