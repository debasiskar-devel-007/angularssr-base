/**
 * @fileoverview added by tsickle
 * Generated from: lib/listing.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, Inject, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from './api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { FormBuilder, FormControl } from '@angular/forms';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from "@angular/router";
import { startWith, map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';
import * as momentImported from 'moment';
/** @type {?} */
var moment = momentImported;
var ListingComponent = /** @class */ (function () {
    // myForm:any;
    function ListingComponent(_apiService, dialog, bottomSheet, fb, router, resolver, container, _http, sanitizer) {
        var _this = this;
        this._apiService = _apiService;
        this.dialog = dialog;
        this.bottomSheet = bottomSheet;
        this.fb = fb;
        this.router = router;
        this.resolver = resolver;
        this.container = container;
        this._http = _http;
        this.sanitizer = sanitizer;
        this.myControl = new FormControl();
        this.columns = [];
        this.olddata = [];
        this.tsearch = [];
        this.autosearch = [];
        this.result = {};
        this.sh = false;
        this.art = false;
        this.aud2 = false;
        this.aud = false;
        /* this variable for artist xp preview */
        this.previewFlug = false;
        /* artistxp preview end */
        this.stateGroups = this.searchListval;
        this.displayedColumns = [];
        this.datacolumns = [];
        this.displayedColumnsheader = [];
        this.formarray = [];
        this.dateSearch_condition = {};
        this.selectSearch_condition = {};
        this.autoSearch_condition = {};
        this.textSearch_condition = {};
        this.loading = false;
        this.preresult = {};
        //dataSource = new MatTableDataSource(this.datasourceval);
        this.dataSource = new MatTableDataSource;
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (true) {
                case event instanceof NavigationStart: {
                    _this.loading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    _this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        }));
        /* this.myForm = this.fb.group({
           email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
           password: ['', Validators.required]
         });*/
    }
    Object.defineProperty(ListingComponent.prototype, "search_settings", {
        set: /**
         * @param {?} search_settings
         * @return {?}
         */
        function (search_settings) {
            this.search_settingsval = search_settings;
            console.log('this.search_settingsval');
            console.log(this.search_settingsval);
            /*for (let i= 0; i<= this.search_settingsval.search.length; i++) {
              console.log(this.search_settingsval.search[i].label);
            }*/
            /*  console.log(this.search_settingsval.selectsearch);
              console.log(this.search_settingsval.selectsearch[0].label);
              console.log(this.search_settingsval.selectsearch[0].values);
              console.log(this.search_settingsval.datesearch);*/
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "click_to_add_ananother_page", {
        set: /**
         * @param {?} click_to_add_ananother_page
         * @return {?}
         */
        function (click_to_add_ananother_page) {
            this.click_to_add_ananother_pageval = click_to_add_ananother_page;
            console.log('this.click_to_add_ananother_pageval');
            console.log(this.click_to_add_ananother_pageval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "grab_link", {
        set: /**
         * @param {?} grab_link
         * @return {?}
         */
        function (grab_link) {
            this.grab_linkval = grab_link;
            console.log('this.grab_linkval');
            console.log(this.grab_linkval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "custombutton", {
        set: /**
         * @param {?} custombutton
         * @return {?}
         */
        function (custombutton) {
            this.custombuttonval = custombutton;
            console.log('this.custombuttonval');
            console.log(this.custombuttonval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "date_search_source", {
        set: /**
         * @param {?} date_search_source
         * @return {?}
         */
        function (date_search_source) {
            this.date_search_sourceval = date_search_source;
            console.log('this.date_search_sourceval');
            console.log(this.date_search_sourceval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "date_search_endpoint", {
        set: /**
         * @param {?} date_search_endpoint
         * @return {?}
         */
        function (date_search_endpoint) {
            this.date_search_endpointval = date_search_endpoint;
            console.log('this.date_search_endpointval');
            console.log(this.date_search_endpointval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "url", {
        set: /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            this.urlval = url;
            console.log('this.urlval');
            console.log(this.urlval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "searchendpoint", {
        set: /**
         * @param {?} searchendpoint
         * @return {?}
         */
        function (searchendpoint) {
            this.searchendpointval = searchendpoint;
            console.log('this.searchendpointval');
            console.log(this.searchendpointval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "pdf_link", {
        set: /**
         * @param {?} pdf_link
         * @return {?}
         */
        function (pdf_link) {
            this.pdf_link_val = pdf_link;
            console.log('this.pdf_link_val');
            console.log(this.pdf_link_val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "searchList", {
        set: /**
         * @param {?} searchList
         * @return {?}
         */
        function (searchList) {
            this.searchListval = searchList;
            console.log('this.searchListval');
            console.log(this.searchListval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "datasource", {
        set: /**
         * @param {?} datasource
         * @return {?}
         */
        function (datasource) {
            this.datasourceval = datasource;
            console.log('this.datasourceval');
            console.log(this.datasourceval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "skip", {
        set: /**
         * @param {?} skip
         * @return {?}
         */
        function (skip) {
            this.skipval = skip;
            console.log('this.skipval');
            console.log(this.skipval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "detail_datatype", {
        set: /**
         * @param {?} detail_datatype
         * @return {?}
         */
        function (detail_datatype) {
            this.detail_datatypeval = detail_datatype;
            console.log('this.detail_datatypeval');
            console.log(this.detail_datatypeval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "detail_skip_array", {
        set: /**
         * @param {?} detail_skip_array
         * @return {?}
         */
        function (detail_skip_array) {
            this.detail_skip_arrayval = detail_skip_array;
            console.log('this.detail_skip_arrayval');
            console.log(this.detail_skip_arrayval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "sourcedata", {
        set: /**
         * @param {?} sourcedata
         * @return {?}
         */
        function (sourcedata) {
            this.sourcedataval = sourcedata;
            console.log('this.sourcedataval');
            console.log(this.sourcedataval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "modify_header_array", {
        set: /**
         * @param {?} modify_header_array
         * @return {?}
         */
        function (modify_header_array) {
            this.modify_header_arrayval = modify_header_array;
            console.log('this.modify_header_arrayval');
            console.log(this.modify_header_arrayval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "deleteendpoint", {
        set: /**
         * @param {?} deleteendpointval
         * @return {?}
         */
        function (deleteendpointval) {
            this.deleteendpointval = deleteendpointval;
            console.log('this.deleteendpointval');
            console.log(this.deleteendpointval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "updateendpoint", {
        set: /**
         * @param {?} updateendpoint
         * @return {?}
         */
        function (updateendpoint) {
            this.updateendpointval = updateendpoint;
            console.log('this.updateendpointval');
            console.log(this.updateendpointval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "apiurl", {
        set: /**
         * @param {?} apiurl
         * @return {?}
         */
        function (apiurl) {
            this.apiurlval = apiurl;
            console.log('this.apiurlval');
            console.log(this.apiurlval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "jwttoken", {
        set: /**
         * @param {?} jwttoken
         * @return {?}
         */
        function (jwttoken) {
            this.jwttokenval = jwttoken;
            console.log('this.jwttokenval');
            console.log(this.jwttokenval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "statusarr", {
        set: /**
         * @param {?} statusarr
         * @return {?}
         */
        function (statusarr) {
            this.statusarrval = statusarr;
            console.log('this.statusarrval');
            console.log(this.statusarrval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "emailarray", {
        set: /**
         * @param {?} emailarray
         * @return {?}
         */
        function (emailarray) {
            this.emailarrayval = emailarray;
            console.log('this.emailarrayval');
            console.log(this.emailarrayval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "editroute", {
        set: /**
         * @param {?} editroute
         * @return {?}
         */
        function (editroute) {
            console.log('editroute');
            console.log(editroute);
            this.editrouteval = editroute;
            console.log('this.editrouteval');
            console.log(this.editrouteval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "preview_artistxp", {
        /* artistxp preview start */
        set: /* artistxp preview start */
        /**
         * @param {?} flug
         * @return {?}
         */
        function (flug) {
            this.previewFlug = true;
        },
        enumerable: true,
        configurable: true
    });
    /*@Directive({
      selector: '[Listing]'
    })*/
    /*@Directive({
        selector: '[Listing]'
      })*/
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.inputblur = /*@Directive({
        selector: '[Listing]'
      })*/
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        console.log('on blur .....');
        this.myForm.controls[val].markAsUntouched();
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.search_settingsval != null && this.search_settingsval.search != null && this.search_settingsval.search != '') {
            console.log('----------------');
            /** @type {?} */
            var source = void 0;
            /** @type {?} */
            var condition = {};
            source = {
                source: this.date_search_sourceval,
                condition: condition
            };
            /** @type {?} */
            var link = this.apiurlval + '' + this.date_search_endpointval;
            this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                console.log(res);
                _this.result = res;
                console.log(_this.result);
                _this.preresult = _this.result.res;
                console.log(_this.preresult);
            }));
        }
        // this._service.success(this.columns[0].date,'dndnnd',this.options);
        /* this.stateGroupOptions = this.myControl.valueChanges
             .pipe(
                 startWith(''),
                 map(value => this._filterGroup(value))
             );*/
        this.stateGroup = this.myControl.valueChanges
            .pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this._filter(value); })));
        /*const factory = this.resolver.resolveComponentFactory(
            componentMapper[this.field.type]
        );
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    */
        this.x = this.datasourceval;
        /** @type {?} */
        var x = this.x;
        /** @type {?} */
        var temp = [];
        /** @type {?} */
        var keys = x[0];
        temp = Object.keys(keys); /*by Object.keys() we can find the fieldnames(or keys) in an object, i.e, in temp object field names are saved*/
        /*by Object.keys() we can find the fieldnames(or keys) in an object, i.e, in temp object field names are saved*/
        /** @type {?} */
        var coldef_list = [];
        /** @type {?} */
        var header_list = [];
        for (var i = 0; i < temp.length; i++) {
            coldef_list.push(temp[i].replace(/\s/g, "_")); /*to replace spaces in field name by "_", we use "replace(/\s/g, "_")"*/
            header_list.push(temp[i]);
        }
        //coldef_list.push('Actions');
        //header_list.push('Actions')
        console.log('coldef_list', coldef_list);
        console.log('header_list', header_list);
        var _loop_1 = function (i) {
            /** @type {?} */
            var ff = "row." + coldef_list[i];
            tt = { columnDef: "" + coldef_list[i], header: "" + header_list[i].replace(/_/g, " "), cell: (/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) { return eval(ff); }), objlength: header_list.length };
            // console.log('tt.columnDef');
            // console.log(tt.columnDef);
            for (var b in this_1.modify_header_arrayval) {
                if (b == tt.header)
                    tt.header = this_1.modify_header_arrayval[b];
            }
            if (this_1.skipval.indexOf(tt.columnDef) == -1)
                this_1.columns.push(tt);
        };
        var this_1 = this, tt;
        for (var i = 0; i < coldef_list.length; i++) {
            _loop_1(i);
        }
        /** @type {?} */
        var displayedcols = this.columns.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.columnDef; }));
        displayedcols.push('Actions');
        this.displayedColumns = displayedcols;
        this.displayedColumns.unshift('select'); /*adds select column in table by unshift function*/
        /*adds select column in table by unshift function*/
        /** @type {?} */
        var data_list = [];
        for (var i = 0; i < this.x.length; i++) {
            data_list.push(this.createData(x[i]));
        }
        this.olddata = data_list;
        console.log(data_list);
        this.dataSource = new MatTableDataSource(data_list);
        this.selection = new SelectionModel(true, []);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x;
        this.errormg = '';
        /** @type {?} */
        var data = this.myForm.value;
        console.log('data');
        console.log(data);
        console.log(this.myForm.valid);
        for (x in this.myForm.controls) {
            this.myForm.controls[x].markAsTouched();
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.dateSearch = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        console.log("start date");
        console.log(this.start_date);
        console.log(this.end_date);
        /** @type {?} */
        var sd = moment(this.start_date).unix();
        /** @type {?} */
        var ed = moment(this.end_date).unix();
        console.log(moment(this.start_date).unix());
        console.log(moment(this.end_date).unix());
        console.log(new Date(this.end_date).getTime());
        /** @type {?} */
        var link = this.apiurlval + '' + this.date_search_endpointval;
        console.log(link);
        if (moment(this.end_date).unix() != null && moment(this.start_date).unix() != null) {
            /** @type {?} */
            var source = void 0;
            /** @type {?} */
            var condition = void 0;
            condition = {};
            condition[val] = {
                $lte: new Date(this.end_date).getTime(),
                $gte: new Date(this.start_date).getTime(),
            };
            this.dateSearch_condition = {};
            this.dateSearch_condition = condition;
            /** @type {?} */
            var conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
            source = {
                source: this.date_search_sourceval,
                condition: conditionobj,
            };
            console.log(source);
            this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                console.log(res);
                /** @type {?} */
                var result = {};
                result = res;
                console.log(result.res);
                _this.dataSource = new MatTableDataSource(result.res);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }));
            /*this._http.post(link, {source:this.date_search_sourceval,
              condition: {
                'created_at': {
                  $lte: new Date(this.end_date).getTime(),
                  $gte: new Date(this.start_date).getTime(),
                }
              },token: this.jwttokenval,
            }).subscribe( res =>{
              let result: any ={};
              result = res;
              console.log("ok");
              console.log(res);
              console.log(result.res);
              let newdata = result.res;
              this.dataSource = new MatTableDataSource(result.res);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            })*/
        }
        else
            console.log("error");
    };
    /**
     * @param {?} value
     * @param {?} type
     * @return {?}
     */
    ListingComponent.prototype.selectSearch = /**
     * @param {?} value
     * @param {?} type
     * @return {?}
     */
    function (value, type) {
        var _this = this;
        console.log('type');
        console.log(type);
        /** @type {?} */
        var link = this.apiurlval + '' + this.date_search_endpointval;
        console.log(link);
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition;
        condition = {};
        condition[type.field] = value;
        this.selectSearch_condition = {};
        this.selectSearch_condition = condition;
        /** @type {?} */
        var conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        source = {
            source: this.date_search_sourceval,
            condition: conditionobj
        };
        if (value != null) {
            this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                console.log(res);
                /** @type {?} */
                var result = {};
                result = res;
                console.log("ok");
                console.log(res);
                console.log(result.res);
                /** @type {?} */
                var newdata = result.res;
                _this.dataSource = new MatTableDataSource(result.res);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }));
        }
        else {
            console.log('oops');
        }
        console.log("error");
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ListingComponent.prototype.autosearchfunction = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        console.log(value);
        /** @type {?} */
        var val = this.autosearch[value];
        console.log(val);
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition = {};
        if (this.autosearch[value].length > 0 && { $or: [this.autosearch[value].toLowerCase(), this.autosearch[value].toUpperCase(), this.autosearch[value]] })
            condition[value + '_regex'] = val;
        this.autoSearch_condition = {};
        this.autoSearch_condition = condition;
        /** @type {?} */
        var conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        source = {
            source: this.date_search_sourceval,
            condition: conditionobj
        };
        /** @type {?} */
        var link = this.apiurlval + '' + this.date_search_endpointval;
        this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            console.log(res);
            // let result:any={};
            _this.result = res;
            console.log(_this.result);
            console.log(_this.result.res);
            _this.dataSource = new MatTableDataSource(_this.result.res);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ListingComponent.prototype.textsearchfunction = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        console.log('value');
        console.log(value);
        console.log(value.toLowerCase());
        console.log(this.tsearch[value]);
        /** @type {?} */
        var link = this.apiurlval + '' + this.date_search_endpointval;
        console.log(link);
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition = {};
        //condition = {};
        /** @type {?} */
        var val = this.tsearch[value].toLowerCase();
        // condition={$or:[this.tsearch[value].toLowerCase(),this.tsearch[value].toUpperCase()]};
        if (this.tsearch[value].length > 1 && { $or: [this.tsearch[value].toLowerCase(), this.tsearch[value].toUpperCase()] })
            condition[value + '_regex'] = val;
        this.textSearch_condition = {};
        this.textSearch_condition = condition;
        //condition[value]="/222/";
        //condition={email:{$regx:'/222/i'}};
        /** @type {?} */
        var conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        source = {
            source: this.date_search_sourceval,
            condition: conditionobj
        };
        console.log('source');
        console.log(source);
        //add loader
        this.loading = true;
        if (value != null) {
            this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                console.log(res);
                /** @type {?} */
                var result = {};
                result = res;
                //close loader
                _this.loading = false;
                console.log("ok");
                console.log(res);
                console.log(result.res);
                /** @type {?} */
                var newdata = result.res;
                _this.dataSource = new MatTableDataSource(result.res);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }));
        }
        else {
            console.log('oops');
        }
        console.log("error");
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ListingComponent.prototype._filter = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var filterValue = value.toLowerCase();
        return this.searchListval.filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.toLowerCase().includes(filterValue); }));
    };
    /*private _filterGroup(value: string): StateGroup[] {
     /!* if (value) {
        return this.searchListval
            .map(group => ({names: _filter(group.names, value)}))
            .filter(group => group.names.length > 0);
      }
  
      return this.searchListval;*!/
      const filterValue = value.toLowerCase();
  
      return this.searchListval.filter(option => option.toLowerCase().includes(filterValue));
    }*/
    /*private _filterGroup(value: string): StateGroup[] {
       /!* if (value) {
          return this.searchListval
              .map(group => ({names: _filter(group.names, value)}))
              .filter(group => group.names.length > 0);
        }
    
        return this.searchListval;*!/
        const filterValue = value.toLowerCase();
    
        return this.searchListval.filter(option => option.toLowerCase().includes(filterValue));
      }*/
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.getstatus = /*private _filterGroup(value: string): StateGroup[] {
       /!* if (value) {
          return this.searchListval
              .map(group => ({names: _filter(group.names, value)}))
              .filter(group => group.names.length > 0);
        }
    
        return this.searchListval;*!/
        const filterValue = value.toLowerCase();
    
        return this.searchListval.filter(option => option.toLowerCase().includes(filterValue));
      }*/
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log('val');
        // console.log(val);
        for (var b in this.statusarrval) {
            if (this.statusarrval[b].val == val)
                return this.statusarrval[b].name;
            // console.log(this.statusarrval[b].name);
        }
        return "N/A";
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.hi = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log('hi  val');
        // console.log(val);
        if (val.shatterblok_agreement_date != null && val.audiodeadline_agreement_date == null) {
            // console.log('shatter blok');
            this.sh = true;
            this.aud = false;
        }
        if (val.shatterblok_agreement_date != null && val.audiodeadline_agreement_date != null) {
            this.sh = true;
            this.aud = true;
        }
        if (val.shatterblok_agreement_date == null && val.audiodeadline_agreement_date == null) {
            this.sh = false;
            this.aud = false;
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.grapurl = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        //  for all row checking
        // console.log(val)
        if (val != null) {
            this.art = true;
            this.aud2 = true;
        }
        if (val == null) {
            this.art = false;
            this.aud2 = false;
        }
        // console.log(this.sh);
        // console.log(this.aud);
    };
    /**
     * @param {?} row
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.copyText = /**
     * @param {?} row
     * @param {?} val
     * @return {?}
     */
    function (row, val) {
        console.log('row in copyText');
        console.log(row);
        console.log('val in copyText');
        console.log(val);
        /** @type {?} */
        var fullurl = val + '' + row;
        console.log(fullurl);
        /** @type {?} */
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = fullurl;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    /**
     * @param {?} val
     * @param {?} url
     * @return {?}
     */
    ListingComponent.prototype.clickurl = /**
     * @param {?} val
     * @param {?} url
     * @return {?}
     */
    function (val, url) {
        /** @type {?} */
        var i;
        console.log('ok');
        console.log(val);
        console.log(val._id);
        console.log(url);
        console.log(url + '' + val._id + '' + this.pdf_link_val);
        /** @type {?} */
        var link = url + '' + val._id + '' + this.pdf_link_val;
        window.open(link, "_blank");
    };
    /** Whether the number of selected elements matches the total number of rows. */
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    ListingComponent.prototype.isAllSelected = /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var numSelected = this.selection.selected.length;
        /** @type {?} */
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    ListingComponent.prototype.masterToggle = /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return _this.selection.select(row); }));
    };
    /** The label for the checkbox on the passed row */
    /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    ListingComponent.prototype.checkboxLabel = /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.position + 1);
    };
    /**
     * @param {?} point
     * @return {?}
     */
    ListingComponent.prototype.createData = /**
     * @param {?} point
     * @return {?}
     */
    function (point) {
        /** @type {?} */
        var data = {};
        Object.keys(point).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            data[key.replace(/\s/g, "_")] = point[key];
        }));
        return data;
    };
    /**
     * @param {?} filterValue
     * @return {?}
     */
    ListingComponent.prototype.applyFilter = /**
     * @param {?} filterValue
     * @return {?}
     */
    function (filterValue) {
        console.log(filterValue);
        console.log(this.dataSource);
        // console.log(this.dataSource[name])
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    /*applyFilter1(filterValue: string, val: any) {
      console.log(filterValue);
      console.log(val.value);
      let value= new MatTableDataSource(val.value);
  
      value.filter = filterValue.trim().toLowerCase();
      console.log(value);
      /!* this.dataSource.filterPredicate = function(data, filter: string): boolean {
        // return data.name.toLowerCase().includes(filter);
      };
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }*!/
    }*/
    /*applyFilter1(filterValue: string, val: any) {
        console.log(filterValue);
        console.log(val.value);
        let value= new MatTableDataSource(val.value);
    
        value.filter = filterValue.trim().toLowerCase();
        console.log(value);
        /!* this.dataSource.filterPredicate = function(data, filter: string): boolean {
          // return data.name.toLowerCase().includes(filter);
        };
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }*!/
      }*/
    /**
     * @param {?} col_name
     * @param {?} row
     * @return {?}
     */
    ListingComponent.prototype.styleCell = /*applyFilter1(filterValue: string, val: any) {
        console.log(filterValue);
        console.log(val.value);
        let value= new MatTableDataSource(val.value);
    
        value.filter = filterValue.trim().toLowerCase();
        console.log(value);
        /!* this.dataSource.filterPredicate = function(data, filter: string): boolean {
          // return data.name.toLowerCase().includes(filter);
        };
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }*!/
      }*/
    /**
     * @param {?} col_name
     * @param {?} row
     * @return {?}
     */
    function (col_name, row) {
        /*
         if (col_name['columnDef']=='progress' && row['progress']=='100'){
         return {'color' : 'red'}
         } else {
         return {}
         }
         */
        return {};
    };
    /**
     * @param {?} data1
     * @return {?}
     */
    ListingComponent.prototype.viewdata = /**
     * @param {?} data1
     * @return {?}
     */
    function (data1) {
        /** @type {?} */
        var data;
        data = data1;
        /** @type {?} */
        var data2 = [];
        // console.log('data11111');
        // console.log(typeof(data));
        for (var key in data) {
            /** @type {?} */
            var flagk = '';
            if (data.hasOwnProperty(key)) {
                console.log(typeof (data[key]));
                console.log(key + " -> " + data[key] + "--->" + typeof (data[key]));
                if (typeof (data[key]) == 'boolean') {
                    if (data[key] == true)
                        data[key] = 'Yes';
                    if (data[key] == false)
                        data[key] = 'No';
                }
                // console.log('_________________1');
                if (typeof (data[key]) == 'object') {
                    console.log(data[key]);
                    /** @type {?} */
                    var tempdata = [];
                    for (var k in data[key]) {
                        console.log('key');
                        console.log(key + '====+++');
                        console.log(this.detail_datatypeval);
                        for (var p in this.detail_datatypeval) {
                            console.log('p');
                            console.log(p);
                            console.log(key);
                            console.log(data[key][k] + '=====');
                            if (this.detail_datatypeval[p].key == key && this.detail_datatypeval[p].value == 'image') {
                                console.log('_________________');
                                /** @type {?} */
                                var imgval = this.detail_datatypeval[p].fileurl + data[key][k].replace(/'/g, '');
                                console.log('imgval');
                                console.log('imgval');
                                console.log(imgval);
                                console.log(data[key][k].replace(/'/g, ''));
                                tempdata.push("<img mat-card-image src=" + imgval + "><br/>");
                                // tempdata.push("<span>"+data[key][k]+"</span><br/>")
                            }
                            if (this.detail_datatypeval[p].key == key && this.detail_datatypeval[p].value != 'image') {
                                //tempdata.push("<img mat-card-image src="+data[key][k]+"><br/>")
                                tempdata.push("<span>" + data[key][k] + "</span><br/>");
                            }
                        }
                    }
                    data[key] = tempdata;
                }
            }
        }
        console.log('data');
        console.log(data);
        for (var n in data) {
            if (data[n] != null && data[n] != '') {
                data2[n] = data[n];
            }
        }
        for (var v in this.detail_skip_arrayval) {
            //data2[this.detail_skip_arrayval[v]]='';
            delete data2[this.detail_skip_arrayval[v]];
            console.log('this.detail_skip_arrayval[v]');
            console.log(this.detail_skip_arrayval[v]);
        }
        /** @type {?} */
        var res = Object.entries(data2);
        console.log('this.detail_skip_array');
        console.log(this.detail_skip_arrayval);
        console.log(this.detail_datatypeval);
        console.log('res');
        console.log(res);
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            height: 'auto',
            panelClass: 'custom-modalbox',
            data: { isconfirmation: false, data: res }
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.managestatus = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        console.log('data');
        console.log(data);
        /** @type {?} */
        var bs = this.bottomSheet.open(BottomSheet, { panelClass: 'custom-bottomsheet', data: { items: this.statusarrval } });
        bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            console.log('The bottom sheet was closed');
            console.log(result);
            if (result != null) {
                data.status = result.val;
                data.id = data._id;
                _this._apiService.togglestatus(_this.apiurlval + 'statusupdate', data, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (var c in _this.olddata) {
                            //this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (_this.olddata[c]._id == data._id) {
                                console.log('in data update');
                                console.log(data);
                                _this.olddata[c].status = data.status;
                            }
                        }
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        /** @type {?} */
                        var dialogRef = _this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    console.log('Oooops!');
                }));
            }
            //this.animal = result;
        }));
    };
    // for tree view in modal
    // for tree view in modal
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.custombuttonfunc = 
    // for tree view in modal
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        console.log('data');
        console.log(data); // row data
        console.log(this.custombuttonval); // object from where the library has been used
        // object from where the library has been used
        /** @type {?} */
        var unsafeurl = this.custombuttonval.url;
        for (var b in this.custombuttonval.fields) {
            unsafeurl = unsafeurl + '/' + data[this.custombuttonval.fields[b]];
        }
        console.log('unsafeurl');
        console.log(unsafeurl);
        unsafeurl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl); //for sanitizing the url for security, otherwise it won't be able to show the page in iframe, hence modal
        //for sanitizing the url for security, otherwise it won't be able to show the page in iframe, hence modal
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            // for opening the modal
            height: 'auto',
            panelClass: 'custom-data-modal',
            data: { isconfirmation: false, data: [{ data: data, customdata: unsafeurl }] }
        });
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.managestatusmultiple = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var ids = [];
        /** @type {?} */
        var c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        console.log('ids');
        console.log(ids);
        //console.log('data');
        //console.log(data);
        /** @type {?} */
        var bs = this.bottomSheet.open(BottomSheet, { data: { items: this.statusarrval } });
        bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            console.log('The bottom sheet was closed');
            console.log(result);
            if (result != null) {
                //data.status = result.val;
                //data.id = data._id;
                /** @type {?} */
                var newstatus_1 = result.val;
                _this._apiService.togglestatusmany(_this.apiurlval + 'statusupdate', ids, result.val, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (var c_1 in _this.olddata) {
                            //this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (ids.indexOf(_this.olddata[c_1]._id) > -1) {
                                console.log('in data update');
                                //console.log(data);
                                _this.olddata[c_1].status = newstatus_1;
                            }
                        }
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        /** @type {?} */
                        var dialogRef = _this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    console.log('Oooops!');
                }));
            }
            //this.animal = result;
        }));
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.deletemultiple = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('this.selection.selected.length');
        console.log(this.selection.selected.length);
        console.log(this.selection);
        console.log(this.selection.selected);
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: 'custom-modalbox',
            data: { message: 'Are you sure you want to delete the selected records?' }
        });
        /** @type {?} */
        var ids = [];
        /** @type {?} */
        var c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        console.log('ids');
        console.log(ids);
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result == 'yes') {
                _this._apiService.deteManyData(_this.apiurlval + _this.deleteendpointval, ids, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        var _loop_2 = function (c_2) {
                            _this.olddata = _this.olddata.filter((/**
                             * @param {?} olddata
                             * @return {?}
                             */
                            function (olddata) { return olddata._id != ids[c_2]; }));
                        };
                        for (var c_2 in ids) {
                            _loop_2(c_2);
                        }
                        console.log('this.olddata');
                        console.log(_this.olddata);
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        /** @type {?} */
                        var dialogRef_1 = _this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Record(s)  deleted successfully !!', isconfirmation: false }
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    console.log('Oooops!');
                }));
            }
            //this.animal = result;
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.deletedata = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        //alert(5);
        //this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
        console.log('data 889 ---');
        console.log(data);
        console.log('jwttokenval');
        console.log(this.jwttokenval);
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: 'custom-modalbox',
            height: 'auto',
            data: { message: 'Are you sure to delete this record ??' }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result == 'yes') {
                _this._apiService.deteOneData(_this.apiurlval + _this.deleteendpointval, data, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        console.log('this.olddata');
                        console.log(_this.olddata);
                        console.log(_this.olddata._id);
                        _this.olddata = _this.olddata.filter((/**
                         * @param {?} olddata
                         * @return {?}
                         */
                        function (olddata) { return olddata._id != data._id; }));
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        /** @type {?} */
                        var dialogRef_2 = _this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Record  deleted successfully !!', isconfirmation: false }
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    console.log('Oooops!');
                }));
            }
            //this.animal = result;
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.editdata = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        console.log('data');
        console.log(data);
        console.log(this.editrouteval);
        console.log(this.editrouteval + data._id);
        console.log(this.jwttokenval);
        this.router.navigate([this.editrouteval, data._id]);
        //this.na
    };
    /* artistxp preview button click function start */
    /* artistxp preview button click function start */
    /**
     * @param {?} singleData
     * @return {?}
     */
    ListingComponent.prototype.artistxpPreview = /* artistxp preview button click function start */
    /**
     * @param {?} singleData
     * @return {?}
     */
    function (singleData) {
        var _this = this;
        /** @type {?} */
        var link = 'http://developmentapi.audiodeadline.com:3090/' + 'datalist';
        /**
         * **** not completed *****
         * @type {?}
         */
        var data = { "source": "blockchainuser_view", "condition": { "posts_id_object": singleData._id }, "token": this.jwttokenval };
        /******** not completed *****/
        this._apiService.postData(link, data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var restlt = response;
            /* open dialog */
            /** @type {?} */
            var dialogRef = _this.dialog.open(Confirmdialog, {
                panelClass: 'custom-modalbox-artistxp-preview',
                height: 'auto',
                data: { preview: true, previewData: restlt }
            });
        }));
    };
    ListingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing',
                    template: "<div class=\"container\">\n\n\n  <mat-card>\n    <mat-toolbar-row class=\"searchbar\" style=\"display: flex!important; justify-content: space-between!important;\">\n    <mat-form-field class=\"searchdiv\">\n\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n\n      <span  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n    <mat-form-field *ngFor=\"let item of search_settingsval.textsearch\" class=\"searchdiv\">\n\n      <input matInput (change)=\"textsearchfunction(item.field)\" (keyup)=\"textsearchfunction(item.field)\" [(ngModel)]='tsearch[item.field]' placeholder=\"{{item.label}}\">\n      <span matPrefix><i class=\"material-icons searchicon\" >\n        search\n      </i> &nbsp;</span>\n    </mat-form-field>\n      </span>\n\n<span *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n  <mat-form-field  *ngFor=\"let item of search_settingsval.search\">\n    <input type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete  #auto=\"matAutocomplete\" >\n       <mat-option *ngFor=\"let option of result.res | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n        {{option[item.field]}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</span>\n\n\n\n<!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n\n      <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n        <mat-label>{{item.label}}</mat-label>\n        <mat-select>\n          <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n            {{status.email}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      </span>-->\n    <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n&lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n&lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n        <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n              <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n        </mat-form-field>\n&lt;!&ndash;              </span>&ndash;&gt;\n      </ng-container>-->\n\n\n      <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n        <mat-form-field *ngFor=\"let status of this.search_settingsval.selectsearch\">\n          <mat-label>{{status.label}}</mat-label>\n          <mat-select>\n            <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval\" (click)=\"selectSearch(statusval.val, status)\">\n              {{statusval.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </ng-container>\n\n\n      <ng-container *ngIf=\"date_search_endpointval !=null && date_search_sourceval != null && search_settingsval.datesearch != null \">\n        <span *ngFor=\"let status of this.search_settingsval.datesearch\">\n        <mat-form-field >\n          <input matInput [matDatepicker]=\"picker\"autocomplete=\"off\"  placeholder=\"{{status.startdatelabel}}\"  [(ngModel)]=\"start_date\" >\n          <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker1\" autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\" >\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1 ></mat-datepicker>\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" class=\"add_button\" style=\"margin: 0!important; margin-left: 10px!important; \" (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n      </span>\n      </ng-container>\n\n\n\n      <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n        <button mat-raised-button color=\"primary\" class=\"add_button\" style=\"margin: 0!important; margin-left: 10px!important; \" [routerLink]=\"click_to_add_ananother_pageval\" >Add</button>\n      </span>\n    </mat-toolbar-row>\n\n\n\n    <ng-container *ngIf=\"selection.selected.length!=null && selection.selected.length>0\">\n      <button mat-raised-button (click)=\"deletemultiple()\"> Delete </button>\n      <button mat-raised-button (click)=\"managestatusmultiple()\"> Update Status </button>\n    </ng-container>\n\n\n\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n      <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n\n      <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\" >\n        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-center\">{{column.header}}</th>\n        <td mat-cell *matCellDef=\"let row\" [ngStyle]=\"styleCell(column,row)\" data-title=\"{{column.header}}\"   class=\"td-cell-center\">\n          <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }} {{hi(row)}}</span>\n          <span *ngIf=\"column.columnDef!='status' \">{{ column.cell(row) }}</span>\n          <span *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n          <br>\n\n<!--          <span *ngIf=\"sh==true\">-->\n            <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null\" class=\"cursor\">\n              <i title=\"{{urlval[0].label}}\" (click)=\"clickurl(row,urlval[0].url)\" class=\"material-icons\">cloud_download</i>\n            </span>\n<!--          </span>-->\n<!--          <span *ngIf=\"aud==true\">-->\n            <span *ngIf=\"column.columnDef=='contractssigned' && aud==true  && urlval !=null\">\n              <i title=\"{{urlval[1].label}}\" (click)=\"clickurl(row,urlval[1].url)\" class=\"material-icons\">cloud_download</i>\n            </span>\n\n\n<!--// for grap url//-->\n\n\n\n          <span *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name]\" class=\"cursor\">\n              <button mat-button (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url)\">{{grab_linkval[1].label}}</button>\n            </span>\n          <br>\n          <!--          </span>-->\n          <!--          <span *ngIf=\"aud==true\">-->\n          <span *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef== [grab_linkval[0].col_name]\">\n              <button mat-button (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url)\">{{grab_linkval[2].label}}</button>\n            </span>\n\n<!--          //grap url end//-->\n\n\n<!--          </span>-->\n          <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval\" class=\"cursor\">\n            <i title=\"{{item.label}}\" (click)=\"clickurl(row,item.url)\" class=\"material-icons\">cloud_download</i>\n          </span>\n          </span>-->\n        </td>\n      </ng-container>\n\n\n\n      <ng-container matColumnDef=\"Actions\"   >\n        <th mat-header-cell *matHeaderCellDef  class=\"th-header-center\">Actions</th>\n        <td (click)=\"$event.stopPropagation()\" mat-cell  *matCellDef=\"let row\" data-label=\"Actions\"  class=\"td-cell-center\">\n          <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n            <span class=\"cursor\" (click)=\"editdata(row)\" >\n              <i class=\"material-icons\">\n                edit\n              </i>\n            </span>\n\n            <!--For modern browsers-->\n            <span class=\"cursor\" (click)=\"deletedata(row)\" >\n              <i class=\"material-icons\">\n                delete_outline\n              </i>\n            </span>\n\n            <!--For modern browsers-->\n            <span class=\"cursor\" (click)=\"viewdata(row)\" >\n              <i class=\"material-icons\">\n                pageview\n              </i>\n            </span>\n\n            <!--For modern browsers-->\n            <span class=\"cursor\" (click)=\"managestatus(row)\" >\n              <i class=\"material-icons\">\n                toggle_off\n              </i>\n            </span>\n            <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\" (click)=\"custombuttonfunc(row)\" >\n              <i class=\"material-icons treeclass\">\n                toggle_off\n              </i>\n            </span>\n\n            <!-- artistxp preview start -->\n            <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n              <i class=\"material-icons\">perm_media</i>\n            </span>\n            <!-- artistxp preview end -->\n\n          </span>\n\n        </td>\n      </ng-container>\n\n\n\n\n\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>\n    <mat-spinner *ngIf=\"loading == true\" ></mat-spinner>\n\n    <br>\n\n\n   <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n    <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n  </mat-card>\n\n<!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n  <br>\n  <br>\n\n\n\n</div>\n\n",
                    styles: [".container{background:#fff}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%}th.mat-sort-header-sorted{color:#000}.custom-modalbox{display:none}"]
                }] }
    ];
    /** @nocollapse */
    ListingComponent.ctorParameters = function () { return [
        { type: ApiService },
        { type: MatDialog },
        { type: MatBottomSheet },
        { type: FormBuilder },
        { type: Router },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef },
        { type: HttpClient },
        { type: DomSanitizer }
    ]; };
    ListingComponent.propDecorators = {
        search_settings: [{ type: Input }],
        click_to_add_ananother_page: [{ type: Input }],
        grab_link: [{ type: Input }],
        custombutton: [{ type: Input }],
        date_search_source: [{ type: Input }],
        date_search_endpoint: [{ type: Input }],
        url: [{ type: Input }],
        searchendpoint: [{ type: Input }],
        pdf_link: [{ type: Input }],
        searchList: [{ type: Input }],
        datasource: [{ type: Input }],
        skip: [{ type: Input }],
        detail_datatype: [{ type: Input }],
        detail_skip_array: [{ type: Input }],
        sourcedata: [{ type: Input }],
        modify_header_array: [{ type: Input }],
        deleteendpoint: [{ type: Input }],
        updateendpoint: [{ type: Input }],
        apiurl: [{ type: Input }],
        jwttoken: [{ type: Input }],
        statusarr: [{ type: Input }],
        emailarray: [{ type: Input }],
        editroute: [{ type: Input }],
        preview_artistxp: [{ type: Input }],
        sort: [{ type: ViewChild, args: [MatSort,] }],
        paginator: [{ type: ViewChild, args: [MatPaginator,] }]
    };
    return ListingComponent;
}());
export { ListingComponent };
if (false) {
    /** @type {?} */
    ListingComponent.prototype.myControl;
    /** @type {?} */
    ListingComponent.prototype.datasourceval;
    /** @type {?} */
    ListingComponent.prototype.search_settingsval;
    /** @type {?} */
    ListingComponent.prototype.click_to_add_ananother_pageval;
    /** @type {?} */
    ListingComponent.prototype.grab_linkval;
    /** @type {?} */
    ListingComponent.prototype.date_search_sourceval;
    /** @type {?} */
    ListingComponent.prototype.date_search_endpointval;
    /** @type {?} */
    ListingComponent.prototype.urlval;
    /** @type {?} */
    ListingComponent.prototype.searchendpointval;
    /** @type {?} */
    ListingComponent.prototype.searchListval;
    /** @type {?} */
    ListingComponent.prototype.pdf_link_val;
    /** @type {?} */
    ListingComponent.prototype.statusarrval;
    /** @type {?} */
    ListingComponent.prototype.skipval;
    /** @type {?} */
    ListingComponent.prototype.errormg;
    /** @type {?} */
    ListingComponent.prototype.jwttokenval;
    /** @type {?} */
    ListingComponent.prototype.detail_datatypeval;
    /** @type {?} */
    ListingComponent.prototype.detail_skip_arrayval;
    /** @type {?} */
    ListingComponent.prototype.deleteendpointval;
    /** @type {?} */
    ListingComponent.prototype.editrouteval;
    /** @type {?} */
    ListingComponent.prototype.apiurlval;
    /** @type {?} */
    ListingComponent.prototype.updateendpointval;
    /** @type {?} */
    ListingComponent.prototype.modify_header_arrayval;
    /** @type {?} */
    ListingComponent.prototype.selection;
    /** @type {?} */
    ListingComponent.prototype.sourcedataval;
    /** @type {?} */
    ListingComponent.prototype.emailarrayval;
    /** @type {?} */
    ListingComponent.prototype.columns;
    /** @type {?} */
    ListingComponent.prototype.olddata;
    /** @type {?} */
    ListingComponent.prototype.tsearch;
    /** @type {?} */
    ListingComponent.prototype.autosearch;
    /** @type {?} */
    ListingComponent.prototype.x;
    /** @type {?} */
    ListingComponent.prototype.custombuttonval;
    /** @type {?} */
    ListingComponent.prototype.result;
    /** @type {?} */
    ListingComponent.prototype.sh;
    /** @type {?} */
    ListingComponent.prototype.art;
    /** @type {?} */
    ListingComponent.prototype.aud2;
    /** @type {?} */
    ListingComponent.prototype.aud;
    /** @type {?} */
    ListingComponent.prototype.previewFlug;
    /** @type {?} */
    ListingComponent.prototype.stateGroups;
    /** @type {?} */
    ListingComponent.prototype.stateGroup;
    /** @type {?} */
    ListingComponent.prototype.displayedColumns;
    /** @type {?} */
    ListingComponent.prototype.datacolumns;
    /** @type {?} */
    ListingComponent.prototype.displayedColumnsheader;
    /** @type {?} */
    ListingComponent.prototype.formarray;
    /** @type {?} */
    ListingComponent.prototype.start_date;
    /** @type {?} */
    ListingComponent.prototype.dateSearch_condition;
    /** @type {?} */
    ListingComponent.prototype.selectSearch_condition;
    /** @type {?} */
    ListingComponent.prototype.autoSearch_condition;
    /** @type {?} */
    ListingComponent.prototype.textSearch_condition;
    /** @type {?} */
    ListingComponent.prototype.end_date;
    /** @type {?} */
    ListingComponent.prototype.i;
    /** @type {?} */
    ListingComponent.prototype.loading;
    /** @type {?} */
    ListingComponent.prototype.preresult;
    /** @type {?} */
    ListingComponent.prototype.dataSource;
    /** @type {?} */
    ListingComponent.prototype.sort;
    /** @type {?} */
    ListingComponent.prototype.paginator;
    /** @type {?} */
    ListingComponent.prototype.myForm;
    /** @type {?} */
    ListingComponent.prototype._apiService;
    /** @type {?} */
    ListingComponent.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype.bottomSheet;
    /** @type {?} */
    ListingComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype.container;
    /** @type {?} */
    ListingComponent.prototype._http;
    /** @type {?} */
    ListingComponent.prototype.sanitizer;
}
var Confirmdialog = /** @class */ (function () {
    function Confirmdialog(dialogRef, data, sanitizer) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sanitizer = sanitizer;
        console.log('my data ...');
        console.log(this.data);
    }
    /**
     * @return {?}
     */
    Confirmdialog.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @param {?} unsafeurl
     * @param {?} data
     * @param {?} rowdata
     * @return {?}
     */
    Confirmdialog.prototype.sanitizeUrl = /**
     * @param {?} unsafeurl
     * @param {?} data
     * @param {?} rowdata
     * @return {?}
     */
    function (unsafeurl, data, rowdata) {
        for (var b in data) {
            unsafeurl = unsafeurl + '/' + rowdata[data[b]];
        }
        console.log('unsafeurl');
        console.log(unsafeurl);
        console.log(data);
        console.log(rowdata);
        return this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl);
    };
    Confirmdialog.decorators = [
        { type: Component, args: [{
                    selector: 'confirmdialog',
                    template: "\n<div *ngIf=\"data.preview != true\">\n    <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\" >Hey !</h1>\n    <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n    <div mat-dialog-content>\n        <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n\n        <div *ngIf=\"data!=null && data.data!=null\">\n\n\n\n            <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                <mat-card-header id=\"dialogdata{{item[0]}}\">\n                    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                    <mat-card-title>{{item[0]}}</mat-card-title>\n                </mat-card-header>\n                <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                <mat-card-content id=\"dialogdata{{item[0]}}\">\n                    <p [innerHtml]=\"item[1]\">\n\n                    </p>\n                </mat-card-content>\n            </mat-card>\n\n        </div>\n\n        <!--for custom page in modal(mainly used for tree)-->\n        <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n            <iframe class=\"custom-datadiv\" height=\"auto\"  [src]=\"data.data[0].customdata\" ></iframe>\n\n        </div>\n\n    </div>\n</div>\n\n\n<div *ngIf=\"data.preview == true\">\n    <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n</div>\n\n\n\n\n\n<div mat-dialog-actions *ngIf=\"data.preview != true\">\n    <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\" (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Ok</button>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    Confirmdialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: DomSanitizer }
    ]; };
    return Confirmdialog;
}());
export { Confirmdialog };
if (false) {
    /** @type {?} */
    Confirmdialog.prototype.dialogRef;
    /** @type {?} */
    Confirmdialog.prototype.data;
    /** @type {?} */
    Confirmdialog.prototype.sanitizer;
}
var BottomSheet = /** @class */ (function () {
    function BottomSheet(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    BottomSheet.prototype.openLink = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        console.log('bottomsheet data');
        console.log(val);
        this.bottomSheetRef.dismiss(val);
        //event.preventDefault();
    };
    BottomSheet.decorators = [
        { type: Component, args: [{
                    selector: 'bottom-sheet',
                    template: "<mat-nav-list>\n\n\n    <a *ngFor=\"let item of data.items;\"  mat-list-item (click)=\"openLink(item)\">\n        <span mat-line></span>\n        <span mat-line>{{item.name}}</span>\n    </a>\n\n\n</mat-nav-list>\n"
                }] }
    ];
    /** @nocollapse */
    BottomSheet.ctorParameters = function () { return [
        { type: MatBottomSheetRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
    ]; };
    return BottomSheet;
}());
export { BottomSheet };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BottomSheet.prototype.bottomSheetRef;
    /** @type {?} */
    BottomSheet.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDakQsd0JBQXdCLEVBR3hCLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUMsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDM0UsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDM0UsT0FBTyxFQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBQyxxQkFBcUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzFGLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQVEsTUFBTSxpQkFBaUIsQ0FBQztBQUVqSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFeEQsT0FBTyxLQUFLLGNBQWMsTUFBTSxRQUFRLENBQUM7O0lBQ25DLE1BQU0sR0FBRyxjQUFjO0FBRTdCO0lBb1BFLGNBQWM7SUFFZCwwQkFBbUIsV0FBdUIsRUFBUSxN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LFlBQVk7O0lBd2xDckIsb0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXhCWSxhQUFhOzs7SUFHcEIsa0NBQTZDOztJQUM3Qyw2QkFBeUM7O0lBQUUsa0NBQTZCOztBQXlCOUU7SUFLRSxxQkFBb0IsY0FBOEMsRUFBdUMsSUFBUTtRQUE3RixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0M7UUFBdUMsU0FBSSxHQUFKLElBQUksQ0FBSTtJQUFHLENBQUM7Ozs7O0lBRXJILDhCQUFROzs7O0lBQVIsVUFBUyxHQUFPO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMseUJBQXlCO0lBQzNCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsa09BQWdDO2lCQUNqQzs7OztnQkF0bUN1QixpQkFBaUI7Z0RBd21DNkIsTUFBTSxTQUFDLHFCQUFxQjs7SUFRbEcsa0JBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSxXQUFXOzs7Ozs7SUFDVixxQ0FBc0Q7O0lBQUMsMkJBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgSW5qZWN0LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U29ydCwgTWF0VGFibGVEYXRhU291cmNlLE1hdFBhZ2luYXRvcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtTZWxlY3Rpb25Nb2RlbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtNYXRCb3R0b21TaGVldCwgTWF0Qm90dG9tU2hlZXRSZWYsTUFUX0JPVFRPTV9TSEVFVF9EQVRBfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge05hdmlnYXRpb25DYW5jZWwsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FcnJvciwgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIsIEV2ZW50fSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtzdGFydFdpdGgsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IERvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5kZWNsYXJlIHZhciAkOmFueTtcbmltcG9ydCAqIGFzIG1vbWVudEltcG9ydGVkIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSBtb21lbnRJbXBvcnRlZDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxpc3RpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdGluZy5tb2R1bGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3RpbmcubW9kdWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG5cbiAgZGF0YXNvdXJjZXZhbDphbnk7XG4gIHNlYXJjaF9zZXR0aW5nc3ZhbDphbnk7XG4gIGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbDphbnk7XG4gIGdyYWJfbGlua3ZhbDphbnk7XG4gIGRhdGVfc2VhcmNoX3NvdXJjZXZhbDphbnk7XG4gIGRhdGVfc2VhcmNoX2VuZHBvaW50dmFsOmFueTtcbiAgdXJsdmFsOmFueTtcbiAgc2VhcmNoZW5kcG9pbnR2YWw6YW55O1xuICBzZWFyY2hMaXN0dmFsOmFueTtcbiAgcGRmX2xpbmtfdmFsOmFueTtcbiAgc3RhdHVzYXJydmFsOmFueTtcbiAgc2tpcHZhbDphbnk7XG4gIGVycm9ybWc6YW55O1xuICBqd3R0b2tlbnZhbDphbnk7XG4gIGRldGFpbF9kYXRhdHlwZXZhbDphbnk7XG4gIGRldGFpbF9za2lwX2FycmF5dmFsOmFueTtcbiAgZGVsZXRlZW5kcG9pbnR2YWw6YW55O1xuICBlZGl0cm91dGV2YWw6YW55O1xuICBhcGl1cmx2YWw6YW55O1xuICB1cGRhdGVlbmRwb2ludHZhbDphbnk7XG4gIG1vZGlmeV9oZWFkZXJfYXJyYXl2YWw6YW55O1xuICBzZWxlY3Rpb24gOmFueTtcbiAgc291cmNlZGF0YXZhbCA6YW55O1xuICBlbWFpbGFycmF5dmFsIDphbnk7XG4gIGNvbHVtbnMgOmFueT1bXTtcbiAgb2xkZGF0YSA6YW55PVtdO1xuICB0c2VhcmNoIDphbnk9W107XG4gIGF1dG9zZWFyY2ggOmFueT1bXTtcbiAgcHVibGljIHggOmFueTtcbiAgcHVibGljIGN1c3RvbWJ1dHRvbnZhbCA6YW55O1xuICBwdWJsaWMgcmVzdWx0IDphbnkgPSB7fTtcbiAgcHVibGljIHNoIDphbnkgPSBmYWxzZTtcbiAgcHVibGljIGFydCA6YW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhdWQyIDphbnkgPSBmYWxzZTtcbiAgcHVibGljIGF1ZCA6YW55ID0gZmFsc2U7XG5cbiAgLyogdGhpcyB2YXJpYWJsZSBmb3IgYXJ0aXN0IHhwIHByZXZpZXcgKi9cbiAgcHJldmlld0ZsdWc6IGFueSA9IGZhbHNlO1xuXG5cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaF9zZXR0aW5ncyhzZWFyY2hfc2V0dGluZ3M6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsID0gc2VhcmNoX3NldHRpbmdzO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsKTtcbiAgICAvKmZvciAobGV0IGk9IDA7IGk8PSB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFtpXS5sYWJlbCk7XG4gICAgfSovXG5cbiAgLyogIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoWzBdLmxhYmVsKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbMF0udmFsdWVzKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoKTsqL1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZShjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2U6IGFueSkge1xuICAgIHRoaXMuY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdldmFsID0gY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdldmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBncmFiX2xpbmsoZ3JhYl9saW5rOiBhbnkpIHtcbiAgICB0aGlzLmdyYWJfbGlua3ZhbCA9IGdyYWJfbGluaztcbiAgICBjb25zb2xlLmxvZygndGhpcy5ncmFiX2xpbmt2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdyYWJfbGlua3ZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbWJ1dHRvbihjdXN0b21idXR0b246IGFueSkge1xuICAgIHRoaXMuY3VzdG9tYnV0dG9udmFsID0gY3VzdG9tYnV0dG9uO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmN1c3RvbWJ1dHRvbnZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VzdG9tYnV0dG9udmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9zb3VyY2UoZGF0ZV9zZWFyY2hfc291cmNlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCA9IGRhdGVfc2VhcmNoX3NvdXJjZTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfZW5kcG9pbnQoZGF0ZV9zZWFyY2hfZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWwgPSBkYXRlX3NlYXJjaF9lbmRwb2ludDtcbiAgICBjb25zb2xlLmxvZygndGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWwpO1xuICB9XG4gICBASW5wdXQoKVxuICBzZXQgdXJsKHVybDogYW55KSB7XG4gICAgdGhpcy51cmx2YWwgPSB1cmw7XG4gICAgY29uc29sZS5sb2coJ3RoaXMudXJsdmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy51cmx2YWwpO1xuICB9XG4gICAgQElucHV0KClcbiAgc2V0IHNlYXJjaGVuZHBvaW50KHNlYXJjaGVuZHBvaW50OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaGVuZHBvaW50dmFsID0gc2VhcmNoZW5kcG9pbnQ7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuc2VhcmNoZW5kcG9pbnR2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaGVuZHBvaW50dmFsKTtcbiAgfVxuICAgQElucHV0KClcbiAgc2V0IHBkZl9saW5rKHBkZl9saW5rOiBhbnkpIHtcbiAgICB0aGlzLnBkZl9saW5rX3ZhbCA9IHBkZl9saW5rO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnBkZl9saW5rX3ZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucGRmX2xpbmtfdmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoTGlzdChzZWFyY2hMaXN0OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaExpc3R2YWwgPSBzZWFyY2hMaXN0O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnNlYXJjaExpc3R2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaExpc3R2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhc291cmNlKGRhdGFzb3VyY2U6IGFueSkge1xuICAgIHRoaXMuZGF0YXNvdXJjZXZhbCA9IGRhdGFzb3VyY2U7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZGF0YXNvdXJjZXZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXNvdXJjZXZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2tpcChza2lwOiBhbnkpIHtcbiAgICB0aGlzLnNraXB2YWwgPSBza2lwO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnNraXB2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNraXB2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZXRhaWxfZGF0YXR5cGUoZGV0YWlsX2RhdGF0eXBlOiBhbnkpIHtcbiAgICB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbCA9IGRldGFpbF9kYXRhdHlwZTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbCk7XG4gIH1cbiBASW5wdXQoKVxuICBzZXQgZGV0YWlsX3NraXBfYXJyYXkoZGV0YWlsX3NraXBfYXJyYXk6IGFueSkge1xuICAgIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwgPSBkZXRhaWxfc2tpcF9hcnJheTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwpO1xuICB9XG5cbkBJbnB1dCgpXG4gIHNldCBzb3VyY2VkYXRhKHNvdXJjZWRhdGE6IGFueSkge1xuICAgIHRoaXMuc291cmNlZGF0YXZhbCA9IHNvdXJjZWRhdGE7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuc291cmNlZGF0YXZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc291cmNlZGF0YXZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbW9kaWZ5X2hlYWRlcl9hcnJheShtb2RpZnlfaGVhZGVyX2FycmF5OiBhbnkpIHtcbiAgICB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwgPSBtb2RpZnlfaGVhZGVyX2FycmF5O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwpO1xuICB9XG5cbiAgQElucHV0KClcbiAgICBzZXQgZGVsZXRlZW5kcG9pbnQoZGVsZXRlZW5kcG9pbnR2YWw6IGFueSkge1xuICAgICAgdGhpcy5kZWxldGVlbmRwb2ludHZhbCA9IGRlbGV0ZWVuZHBvaW50dmFsO1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMuZGVsZXRlZW5kcG9pbnR2YWwnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVsZXRlZW5kcG9pbnR2YWwpO1xuICAgIH1cblxuIEBJbnB1dCgpXG4gICAgc2V0IHVwZGF0ZWVuZHBvaW50KHVwZGF0ZWVuZHBvaW50OiBhbnkpIHtcbiAgICAgIHRoaXMudXBkYXRlZW5kcG9pbnR2YWwgPSB1cGRhdGVlbmRwb2ludDtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnVwZGF0ZWVuZHBvaW50dmFsJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnVwZGF0ZWVuZHBvaW50dmFsKTtcbiAgICB9XG4gICAgQElucHV0KClcbiAgICBzZXQgYXBpdXJsKGFwaXVybDogYW55KSB7XG4gICAgICB0aGlzLmFwaXVybHZhbCA9IGFwaXVybDtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmFwaXVybHZhbCcpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5hcGl1cmx2YWwpO1xuICAgIH1cblxuQElucHV0KClcbiAgICBzZXQgand0dG9rZW4oand0dG9rZW46IGFueSkge1xuICAgICAgdGhpcy5qd3R0b2tlbnZhbCA9IGp3dHRva2VuO1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMuand0dG9rZW52YWwnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuand0dG9rZW52YWwpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHN0YXR1c2FycihzdGF0dXNhcnI6IGFueSkge1xuICAgICAgdGhpcy5zdGF0dXNhcnJ2YWwgPSBzdGF0dXNhcnI7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5zdGF0dXNhcnJ2YWwnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdHVzYXJydmFsKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBlbWFpbGFycmF5KGVtYWlsYXJyYXk6IGFueSkge1xuICAgICAgdGhpcy5lbWFpbGFycmF5dmFsID0gZW1haWxhcnJheTtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmVtYWlsYXJyYXl2YWwnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW1haWxhcnJheXZhbCk7XG4gICAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBlZGl0cm91dGUoZWRpdHJvdXRlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnZWRpdHJvdXRlJyk7XG4gICAgY29uc29sZS5sb2coZWRpdHJvdXRlKTtcbiAgICB0aGlzLmVkaXRyb3V0ZXZhbCA9IGVkaXRyb3V0ZTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5lZGl0cm91dGV2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVkaXRyb3V0ZXZhbCk7XG4gIH1cblxuXG4gIC8qIGFydGlzdHhwIHByZXZpZXcgc3RhcnQgKi9cbiAgQElucHV0KClcbiAgc2V0IHByZXZpZXdfYXJ0aXN0eHAoZmx1ZzogYW55KSB7XG4gICAgdGhpcy5wcmV2aWV3Rmx1ZyA9IHRydWU7XG4gIH1cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBlbmQgKi9cblxuXG4gIHN0YXRlR3JvdXBzOiBzdHJpbmdbXSA9IHRoaXMuc2VhcmNoTGlzdHZhbDtcbiAgc3RhdGVHcm91cDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGF0YWNvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRpc3BsYXllZENvbHVtbnNoZWFkZXI6IHN0cmluZ1tdID0gW107XG4gIGZvcm1hcnJheTogYW55ID0gW107XG4gIHN0YXJ0X2RhdGU6IGFueSA7XG4gIGRhdGVTZWFyY2hfY29uZGl0aW9uOiBhbnkgPXt9O1xuICBzZWxlY3RTZWFyY2hfY29uZGl0aW9uOiBhbnkgPXt9O1xuICBhdXRvU2VhcmNoX2NvbmRpdGlvbjogYW55ID17fTtcbiAgdGV4dFNlYXJjaF9jb25kaXRpb246IGFueSA9e307XG4gIGVuZF9kYXRlOiBhbnkgO1xuICBwdWJsaWMgaTogYW55IDtcbiAgbG9hZGluZzogYW55ID0gZmFsc2UgO1xuICBwdWJsaWMgcHJlcmVzdWx0OiBhbnk9e307XG4gIC8vZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5kYXRhc291cmNldmFsKTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U7XG5cbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIC8vIG9wdGlvbnM6IEZvcm1Hcm91cDtcbiAgbXlGb3JtOmFueTtcbiAgLy8gbXlGb3JtOmFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2FwaVNlcnZpY2U6IEFwaVNlcnZpY2UscHVibGljIGRpYWxvZzogTWF0RGlhbG9nLHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0LHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIscHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHVibGljIF9odHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgc2FuaXRpemVyOkRvbVNhbml0aXplcikge1xuXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQ6IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQ6XG4gICAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWw6XG4gICAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcjoge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuXG5cbiAgIC8qIHRoaXMubXlGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pOyovXG5cblxuXG4gIH1cbiAgLypARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tMaXN0aW5nXSdcbiAgfSkqL1xuXG5cblxuXG5cblxuICBpbnB1dGJsdXIodmFsOmFueSl7XG4gICAgY29uc29sZS5sb2coJ29uIGJsdXIgLi4uLi4nKTtcbiAgICB0aGlzLm15Rm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsICE9bnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2ggIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2ggIT0gJycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgICBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25cbiAgICAgIH07XG4gICAgICBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdCk7XG4gICAgICAgIHRoaXMucHJlcmVzdWx0ID0gdGhpcy5yZXN1bHQucmVzO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZXJlc3VsdCk7XG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIHRoaXMuX3NlcnZpY2Uuc3VjY2Vzcyh0aGlzLmNvbHVtbnNbMF0uZGF0ZSwnZG5kbm5kJyx0aGlzLm9wdGlvbnMpO1xuICAgLyogdGhpcy5zdGF0ZUdyb3VwT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyR3JvdXAodmFsdWUpKVxuICAgICAgICApOyovXG5cbiAgICB0aGlzLnN0YXRlR3JvdXAgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXG4gICAgICAgICk7XG5cbiAgICAvKmNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb21wb25lbnRNYXBwZXJbdGhpcy5maWVsZC50eXBlXVxuICAgICk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZmllbGQgPSB0aGlzLmZpZWxkO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcbiovXG5cbiAgICB0aGlzLnggPSB0aGlzLmRhdGFzb3VyY2V2YWw7XG4gICAgbGV0IHg9dGhpcy54O1xuXG4gICAgbGV0IHRlbXAgPSBbXVxuICAgIGxldCBrZXlzID0geFswXVxuICAgIHRlbXAgPSBPYmplY3Qua2V5cyhrZXlzKSAgICAvKmJ5IE9iamVjdC5rZXlzKCkgd2UgY2FuIGZpbmQgdGhlIGZpZWxkbmFtZXMob3Iga2V5cykgaW4gYW4gb2JqZWN0LCBpLmUsIGluIHRlbXAgb2JqZWN0IGZpZWxkIG5hbWVzIGFyZSBzYXZlZCovXG5cbiAgICBsZXQgY29sZGVmX2xpc3QgPSBbXTtcbiAgICBsZXQgaGVhZGVyX2xpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbGRlZl9saXN0LnB1c2godGVtcFtpXS5yZXBsYWNlKC9cXHMvZywgXCJfXCIpKTsgICAgICAvKnRvIHJlcGxhY2Ugc3BhY2VzIGluIGZpZWxkIG5hbWUgYnkgXCJfXCIsIHdlIHVzZSBcInJlcGxhY2UoL1xccy9nLCBcIl9cIilcIiovXG4gICAgICBoZWFkZXJfbGlzdC5wdXNoKHRlbXBbaV0pXG4gICAgfVxuICAgIC8vY29sZGVmX2xpc3QucHVzaCgnQWN0aW9ucycpO1xuICAgIC8vaGVhZGVyX2xpc3QucHVzaCgnQWN0aW9ucycpXG4gICAgY29uc29sZS5sb2coJ2NvbGRlZl9saXN0Jyxjb2xkZWZfbGlzdCk7XG4gICAgY29uc29sZS5sb2coJ2hlYWRlcl9saXN0JyxoZWFkZXJfbGlzdCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGRlZl9saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZmYgPSBgcm93LiR7Y29sZGVmX2xpc3RbaV19YFxuICAgICAgdmFyIHR0ID0geyBjb2x1bW5EZWY6IGAke2NvbGRlZl9saXN0W2ldfWAsICAgIGhlYWRlcjogYCR7aGVhZGVyX2xpc3RbaV0ucmVwbGFjZSgvXy9nLFwiIFwiKX1gLCAgY2VsbDogKHJvdykgPT4gZXZhbChmZikgLG9iamxlbmd0aDpoZWFkZXJfbGlzdC5sZW5ndGggIH07XG4gICAgICAvLyBjb25zb2xlLmxvZygndHQuY29sdW1uRGVmJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0dC5jb2x1bW5EZWYpO1xuICAgICAgZm9yIChsZXQgYiBpbiB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwpe1xuICAgICAgICBpZihiPT10dC5oZWFkZXIpIHR0LmhlYWRlcj10aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWxbYl07XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuc2tpcHZhbC5pbmRleE9mKHR0LmNvbHVtbkRlZik9PS0xKVxuICAgICAgdGhpcy5jb2x1bW5zLnB1c2godHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuY29sdW1ucycpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb2x1bW5zKTtcbiAgICB9XG4gICAgbGV0IGRpc3BsYXllZGNvbHM9IHRoaXMuY29sdW1ucy5tYXAoeCA9PiB4LmNvbHVtbkRlZik7XG4gICAgZGlzcGxheWVkY29scy5wdXNoKCdBY3Rpb25zJyk7XG5cbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPWRpc3BsYXllZGNvbHM7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJ3NlbGVjdCcpOyAgICAgICAgLyphZGRzIHNlbGVjdCBjb2x1bW4gaW4gdGFibGUgYnkgdW5zaGlmdCBmdW5jdGlvbiovXG5cbiAgICBsZXQgZGF0YV9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLngubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGFfbGlzdC5wdXNoKHRoaXMuY3JlYXRlRGF0YSh4W2ldKSk7XG4gICAgfVxuICAgIHRoaXMub2xkZGF0YT1kYXRhX2xpc3Q7XG4gICAgY29uc29sZS5sb2coZGF0YV9saXN0KVxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoZGF0YV9saXN0KTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICB9XG5cblxuICBvblN1Ym1pdCgpIHtcbiAgICBsZXQgeDogYW55O1xuICAgIHRoaXMuZXJyb3JtZyA9ICcnO1xuICAgIGxldCBkYXRhID0gdGhpcy5teUZvcm0udmFsdWU7XG4gICAgY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybS52YWxpZCk7XG4gICAgZm9yICh4IGluIHRoaXMubXlGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLm15Rm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG4gIGRhdGVTZWFyY2godmFsOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0IGRhdGVcIik7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGFydF9kYXRlKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVuZF9kYXRlKTtcbiAgICBsZXQgc2QgPSBtb21lbnQodGhpcy5zdGFydF9kYXRlKS51bml4KCk7XG4gICAgbGV0IGVkID0gbW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKTtcbiAgICBjb25zb2xlLmxvZyhtb21lbnQodGhpcy5zdGFydF9kYXRlKS51bml4KCkpO1xuICAgIGNvbnNvbGUubG9nKG1vbWVudCh0aGlzLmVuZF9kYXRlKS51bml4KCkpO1xuICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKHRoaXMuZW5kX2RhdGUpLmdldFRpbWUoKSk7XG4gICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIGNvbnNvbGUubG9nKGxpbmspO1xuICAgIGlmKG1vbWVudCh0aGlzLmVuZF9kYXRlKS51bml4KCkhPW51bGwgJiYgbW9tZW50KHRoaXMuc3RhcnRfZGF0ZSkudW5peCgpIT1udWxsICkge1xuXG5cbiAgICAgIGxldCBzb3VyY2U6YW55O1xuICAgICAgbGV0IGNvbmRpdGlvbjogYW55O1xuICAgICAgY29uZGl0aW9uID0ge307XG5cbiAgICAgIGNvbmRpdGlvblt2YWxdID0ge1xuICAgICAgICAkbHRlOiBuZXcgRGF0ZSh0aGlzLmVuZF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAkZ3RlOiBuZXcgRGF0ZSh0aGlzLnN0YXJ0X2RhdGUpLmdldFRpbWUoKSxcbiAgICAgIH07XG4gICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgICAgICAgc291cmNlPSB7XG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmosXG4gICAgICAgICAgfTtcbiAgICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluayx0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQucmVzKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pXG5cbiAgICAgIC8qdGhpcy5faHR0cC5wb3N0KGxpbmssIHtzb3VyY2U6dGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICdjcmVhdGVkX2F0Jzoge1xuICAgICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgfVxuICAgICAgICB9LHRva2VuOiB0aGlzLmp3dHRva2VudmFsLFxuICAgICAgfSkuc3Vic2NyaWJlKCByZXMgPT57XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9e307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlcyk7XG4gICAgICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pKi9cbiAgICB9ZWxzZVxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgfVxuXG5cblxuICBzZWxlY3RTZWFyY2ggKHZhbHVlOmFueSx0eXBlOmFueSl7XG4gICAgY29uc29sZS5sb2coJ3R5cGUnKTtcbiAgICBjb25zb2xlLmxvZyh0eXBlKTtcbiAgICBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycrIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgY29uc29sZS5sb2cobGluayk7XG4gICAgbGV0IHNvdXJjZTphbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55O1xuICAgIGNvbmRpdGlvbiA9IHt9O1xuICAgIGNvbmRpdGlvblt0eXBlLmZpZWxkXT12YWx1ZTtcbiAgICB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9O1xuICAgIGlmKHZhbHVlICE9bnVsbCApIHtcbiAgICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQucmVzKTtcbiAgICAgICAgbGV0IG5ld2RhdGEgPSByZXN1bHQucmVzO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXMpO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG4gICAgfSBlbHNlXG4gICAge1xuICAgICAgY29uc29sZS5sb2coJ29vcHMnKTtcbiAgICB9XG4gIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gIH1cbiAgYXV0b3NlYXJjaGZ1bmN0aW9uICh2YWx1ZTogYW55KSB7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIGxldCB2YWw6YW55PXRoaXMuYXV0b3NlYXJjaFt2YWx1ZV07XG4gICAgY29uc29sZS5sb2codmFsKTtcbiAgICBsZXQgc291cmNlOmFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk9e307XG4gICAgaWYodGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS5sZW5ndGg+MCAmJiB7JG9yOlt0aGlzLmF1dG9zZWFyY2hbdmFsdWVdLnRvTG93ZXJDYXNlKCksdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS50b1VwcGVyQ2FzZSgpLHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV1dfSljb25kaXRpb25bdmFsdWUrJ19yZWdleCddPXZhbDtcbiAgICB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2U9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07XG4gICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIC8vIGxldCByZXN1bHQ6YW55PXt9O1xuICAgICAgdGhpcy5yZXN1bHQgPSByZXM7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdC5yZXMpO1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLnJlc3VsdC5yZXMpO1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICB9KTtcbiAgfVxuXG4gIHRleHRzZWFyY2hmdW5jdGlvbiAodmFsdWU6YW55KXtcbiAgICBjb25zb2xlLmxvZygndmFsdWUnKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgY29uc29sZS5sb2codmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgY29uc29sZS5sb2codGhpcy50c2VhcmNoW3ZhbHVlXSk7XG4gICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIGNvbnNvbGUubG9nKGxpbmspO1xuICAgIGxldCBzb3VyY2U6YW55O1xuICAgIGxldCBjb25kaXRpb246IGFueT17fTtcbiAgICAvL2NvbmRpdGlvbiA9IHt9O1xuICAgIGxldCB2YWw6YW55ID10aGlzLnRzZWFyY2hbdmFsdWVdLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gY29uZGl0aW9uPXskb3I6W3RoaXMudHNlYXJjaFt2YWx1ZV0udG9Mb3dlckNhc2UoKSx0aGlzLnRzZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCldfTtcbiAgICBpZih0aGlzLnRzZWFyY2hbdmFsdWVdLmxlbmd0aD4xICYmIHskb3I6W3RoaXMudHNlYXJjaFt2YWx1ZV0udG9Mb3dlckNhc2UoKSx0aGlzLnRzZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCldfSljb25kaXRpb25bdmFsdWUrJ19yZWdleCddPXZhbDtcbiAgICB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAvL2NvbmRpdGlvblt2YWx1ZV09XCIvMjIyL1wiO1xuICAgIC8vY29uZGl0aW9uPXtlbWFpbDp7JHJlZ3g6Jy8yMjIvaSd9fTtcbiAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2U9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ3NvdXJjZScpO1xuICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XG4gICAgLy9hZGQgbG9hZGVyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBpZih2YWx1ZSAhPW51bGwgICkge1xuICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIC8vY2xvc2UgbG9hZGVyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQucmVzKTtcbiAgICAgICAgbGV0IG5ld2RhdGEgPSByZXN1bHQucmVzO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXMpO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG4gICAgfSBlbHNlXG4gICAge1xuICAgICAgY29uc29sZS5sb2coJ29vcHMnKTtcbiAgICB9XG4gIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTGlzdHZhbC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XG4gIH1cblxuICAvKnByaXZhdGUgX2ZpbHRlckdyb3VwKHZhbHVlOiBzdHJpbmcpOiBTdGF0ZUdyb3VwW10ge1xuICAgLyEqIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoTGlzdHZhbFxuICAgICAgICAgIC5tYXAoZ3JvdXAgPT4gKHtuYW1lczogX2ZpbHRlcihncm91cC5uYW1lcywgdmFsdWUpfSkpXG4gICAgICAgICAgLmZpbHRlcihncm91cCA9PiBncm91cC5uYW1lcy5sZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZWFyY2hMaXN0dmFsOyohL1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLnNlYXJjaExpc3R2YWwuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9Ki9cblxuICBnZXRzdGF0dXModmFsOmFueSl7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZhbCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgZm9yKGxldCBiIGluIHRoaXMuc3RhdHVzYXJydmFsKXtcbiAgICAgIGlmKHRoaXMuc3RhdHVzYXJydmFsW2JdLnZhbD09dmFsKVxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXNhcnJ2YWxbYl0ubmFtZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdHVzYXJydmFsW2JdLm5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gXCJOL0FcIjtcbiAgfVxuICBoaSh2YWw6IGFueSl7XG4gICAgLy8gY29uc29sZS5sb2coJ2hpICB2YWwnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwpO1xuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSA9PW51bGwgKXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzaGF0dGVyIGJsb2snKTtcbiAgICAgIHRoaXMuc2ggPSB0cnVlO1xuICAgICAgdGhpcy5hdWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHZhbC5zaGF0dGVyYmxva19hZ3JlZW1lbnRfZGF0ZSAhPSBudWxsICYmIHZhbC5hdWRpb2RlYWRsaW5lX2FncmVlbWVudF9kYXRlICE9bnVsbCkge1xuICAgICAgdGhpcy5zaCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSA9PW51bGwpIHtcbiAgICAgIHRoaXMuc2ggPSBmYWxzZTtcbiAgICAgIHRoaXMuYXVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGdyYXB1cmwodmFsOiBhbnkpe1xuICAgIC8vICBmb3IgYWxsIHJvdyBjaGVja2luZ1xuLy8gY29uc29sZS5sb2codmFsKVxuICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnQgPSB0cnVlO1xuICAgICAgdGhpcy5hdWQyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmFydCA9IGZhbHNlO1xuICAgICAgdGhpcy5hdWQyID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2gpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXVkKTtcbiAgfVxuXG4gICAgY29weVRleHQocm93OiBhbnksIHZhbDogc3RyaW5nKXtcbiAgICBjb25zb2xlLmxvZygncm93IGluIGNvcHlUZXh0Jyk7XG4gICAgY29uc29sZS5sb2cocm93KTtcbiAgICBjb25zb2xlLmxvZygndmFsIGluIGNvcHlUZXh0Jyk7XG4gICAgY29uc29sZS5sb2codmFsKVxuICAgICAgbGV0IGZ1bGx1cmwgPSB2YWwrJycrcm93O1xuICAgIGNvbnNvbGUubG9nKGZ1bGx1cmwpO1xuICAgICAgICBsZXQgc2VsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgc2VsQm94LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgc2VsQm94LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHNlbEJveC5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIHNlbEJveC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBzZWxCb3gudmFsdWUgPSBmdWxsdXJsO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlbEJveCk7XG4gICAgICAgIHNlbEJveC5mb2N1cygpO1xuICAgICAgICBzZWxCb3guc2VsZWN0KCk7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2VsQm94KTtcbiAgICB9XG5cbiAgY2xpY2t1cmwodmFsOiBhbnkgLCB1cmw6IGFueSkge1xuICAgIGxldCBpXG4gICAgY29uc29sZS5sb2coJ29rJyk7XG4gICAgY29uc29sZS5sb2codmFsKTtcbiAgICBjb25zb2xlLmxvZyh2YWwuX2lkKTtcbiAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgIGNvbnNvbGUubG9nKHVybCArICcnICt2YWwuX2lkICsgJycgKyB0aGlzLnBkZl9saW5rX3ZhbCk7XG4gICAgbGV0IGxpbms9IHVybCArICcnICt2YWwuX2lkICsgJycgKyB0aGlzLnBkZl9saW5rX3ZhbDtcbiAgICB3aW5kb3cub3BlbihsaW5rLCBcIl9ibGFua1wiKTtcbiAgfVxuXG5cbiAgLyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgIHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtUm93cztcbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCkgOlxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gIH1cblxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY2hlY2tib3ggb24gdGhlIHBhc3NlZCByb3cgKi9cbiAgY2hlY2tib3hMYWJlbChyb3c/OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghcm93KSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5pc0FsbFNlbGVjdGVkKCkgPyAnc2VsZWN0JyA6ICdkZXNlbGVjdCd9IGFsbGA7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdykgPyAnZGVzZWxlY3QnIDogJ3NlbGVjdCd9IHJvdyAke3Jvdy5wb3NpdGlvbiArIDF9YDtcbiAgfVxuXG5cbiAgY3JlYXRlRGF0YShwb2ludDphbnkpe1xuICAgIGxldCBkYXRhID0ge307XG4gICAgT2JqZWN0LmtleXMocG9pbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGF0YVtrZXkucmVwbGFjZSgvXFxzL2csIFwiX1wiKV0gPSBwb2ludFtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBhcHBseUZpbHRlcihmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coZmlsdGVyVmFsdWUpXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhU291cmNlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGFTb3VyY2VbbmFtZV0pXG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfVxuICB9XG4gIC8qYXBwbHlGaWx0ZXIxKGZpbHRlclZhbHVlOiBzdHJpbmcsIHZhbDogYW55KSB7XG4gICAgY29uc29sZS5sb2coZmlsdGVyVmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHZhbC52YWx1ZSk7XG4gICAgbGV0IHZhbHVlPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHZhbC52YWx1ZSk7XG5cbiAgICB2YWx1ZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgLyEqIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSBmdW5jdGlvbihkYXRhLCBmaWx0ZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgLy8gcmV0dXJuIGRhdGEubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlcik7XG4gICAgfTtcbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9KiEvXG4gIH0qL1xuXG4gIHN0eWxlQ2VsbChjb2xfbmFtZSxyb3cpe1xuXG4gICAgLypcbiAgICAgaWYgKGNvbF9uYW1lWydjb2x1bW5EZWYnXT09J3Byb2dyZXNzJyAmJiByb3dbJ3Byb2dyZXNzJ109PScxMDAnKXtcbiAgICAgcmV0dXJuIHsnY29sb3InIDogJ3JlZCd9XG4gICAgIH0gZWxzZSB7XG4gICAgIHJldHVybiB7fVxuICAgICB9XG4gICAgICovXG5cblxuICAgIHJldHVybiB7fVxuICB9XG5cblxuICB2aWV3ZGF0YShkYXRhMTphbnkpe1xuICAgIGxldCBkYXRhOmFueTtcbiAgICBkYXRhPWRhdGExO1xuICAgIGxldCBkYXRhMjphbnk9W107XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGExMTExMScpO1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZihkYXRhKSk7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGxldCBmbGFnazphbnk9Jyc7XG4gICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codHlwZW9mKGRhdGFba2V5XSkpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkgKyBcIiAtPiBcIiArIGRhdGFba2V5XStcIi0tLT5cIit0eXBlb2YgKGRhdGFba2V5XSkpO1xuICAgICAgICAgICAgICBpZih0eXBlb2YgKGRhdGFba2V5XSk9PSdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgaWYoZGF0YVtrZXldPT10cnVlKSBkYXRhW2tleV09J1llcyc7XG4gICAgICAgICAgICAgICAgICBpZihkYXRhW2tleV09PWZhbHNlKSBkYXRhW2tleV09J05vJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnX19fX19fX19fX19fX19fX18xJyk7XG5cbiAgICAgICAgICAgICAgaWYodHlwZW9mIChkYXRhW2tleV0pPT0nb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFba2V5XSlcbiAgICAgICAgICAgICAgICAgIGxldCB0ZW1wZGF0YTphbnk9W107XG4gICAgICAgICAgICAgICAgICBmb3IobGV0IGsgaW4gZGF0YVtrZXldKXtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygna2V5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5ICsnPT09PSsrKycpO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHAgaW4gdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVtrZXldW2tdICsnPT09PT0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0ua2V5PT1rZXkgJiYgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0udmFsdWU9PSdpbWFnZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdfX19fX19fX19fX19fX19fXycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1ndmFsOmFueT10aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5maWxldXJsK2RhdGFba2V5XVtrXS5yZXBsYWNlKC8nL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWd2YWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWd2YWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZ3ZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhW2tleV1ba10ucmVwbGFjZSgvJy9nLCAnJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiK2ltZ3ZhbCtcIj48YnIvPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGVtcGRhdGEucHVzaChcIjxzcGFuPlwiK2RhdGFba2V5XVtrXStcIjwvc3Bhbj48YnIvPlwiKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXk9PWtleSAmJiB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS52YWx1ZSE9J2ltYWdlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RlbXBkYXRhLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIitkYXRhW2tleV1ba10rXCI+PGJyLz5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBkYXRhLnB1c2goXCI8c3Bhbj5cIitkYXRhW2tleV1ba10rXCI8L3NwYW4+PGJyLz5cIik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBkYXRhW2tleV09dGVtcGRhdGE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIGZvcihsZXQgbiBpbiBkYXRhKXtcbiAgICAgICAgaWYoZGF0YVtuXSE9bnVsbCAmJiBkYXRhW25dIT0nJyl7XG4gICAgICAgICAgZGF0YTJbbl09ZGF0YVtuXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgZm9yKGxldCB2IGluIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwpe1xuICAgICAgLy9kYXRhMlt0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdXT0nJztcbiAgICAgIGRlbGV0ZSBkYXRhMlt0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdXTtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdKTtcbiAgICB9XG4gICAgICBsZXQgcmVzID0gT2JqZWN0LmVudHJpZXMoZGF0YTIpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmRldGFpbF9za2lwX2FycmF5Jyk7XG4gICAgY29uc29sZS5sb2codGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbCk7XG4gICAgY29uc29sZS5sb2codGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwpO1xuXG4gICAgY29uc29sZS5sb2coJ3JlcycpO1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cblxuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgZGF0YToge2lzY29uZmlybWF0aW9uOmZhbHNlLGRhdGE6cmVzfVxuICAgIH0pO1xuXG4gIH1cbiAgbWFuYWdlc3RhdHVzKGRhdGE6YW55KXtcbiAgICBjb25zb2xlLmxvZygnZGF0YScpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGxldCBicz10aGlzLmJvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQse3BhbmVsQ2xhc3M6ICdjdXN0b20tYm90dG9tc2hlZXQnLGRhdGE6e2l0ZW1zOnRoaXMuc3RhdHVzYXJydmFsfX0pO1xuXG4gICAgYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaGUgYm90dG9tIHNoZWV0IHdhcyBjbG9zZWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICBpZihyZXN1bHQhPW51bGwpe1xuICAgICAgICBkYXRhLnN0YXR1cyA9IHJlc3VsdC52YWw7XG4gICAgICAgIGRhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgIHRoaXMuX2FwaVNlcnZpY2UudG9nZ2xlc3RhdHVzKHRoaXMuYXBpdXJsdmFsICsgJ3N0YXR1c3VwZGF0ZScsIGRhdGEsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgIGZvciAobGV0IGMgaW4gdGhpcy5vbGRkYXRhKSB7XG4gICAgICAgICAgICAvL3RoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgaWYgKHRoaXMub2xkZGF0YVtjXS5faWQgPT0gZGF0YS5faWQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIGRhdGEgdXBkYXRlJyk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICB0aGlzLm9sZGRhdGFbY10uc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgICAgICAgbGV0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICAgICAgICBkYXRhOiB7bWVzc2FnZTogJ1N0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgfSk7XG4gICAgfVxuICAgICAgLy90aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9XG5cbi8vIGZvciB0cmVlIHZpZXcgaW4gbW9kYWxcbiAgY3VzdG9tYnV0dG9uZnVuYyhkYXRhOmFueSl7XG4gICAgY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTsgICAgLy8gcm93IGRhdGFcbiAgICBjb25zb2xlLmxvZyh0aGlzLmN1c3RvbWJ1dHRvbnZhbCk7ICAgIC8vIG9iamVjdCBmcm9tIHdoZXJlIHRoZSBsaWJyYXJ5IGhhcyBiZWVuIHVzZWRcbiAgICBsZXQgdW5zYWZldXJsOmFueT10aGlzLmN1c3RvbWJ1dHRvbnZhbC51cmw7ICAgLy9pZnJhbWUgdXJsXG4gICAgZm9yKGxldCBiIGluIHRoaXMuY3VzdG9tYnV0dG9udmFsLmZpZWxkcyl7XG4gICAgICB1bnNhZmV1cmw9dW5zYWZldXJsKycvJytkYXRhW3RoaXMuY3VzdG9tYnV0dG9udmFsLmZpZWxkc1tiXV07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd1bnNhZmV1cmwnKTtcbiAgICBjb25zb2xlLmxvZyh1bnNhZmV1cmwpO1xuICAgIHVuc2FmZXVybD10aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodW5zYWZldXJsKTsgICAvL2ZvciBzYW5pdGl6aW5nIHRoZSB1cmwgZm9yIHNlY3VyaXR5LCBvdGhlcndpc2UgaXQgd29uJ3QgYmUgYWJsZSB0byBzaG93IHRoZSBwYWdlIGluIGlmcmFtZSwgaGVuY2UgbW9kYWxcblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywgeyAgICAgICAvLyBmb3Igb3BlbmluZyB0aGUgbW9kYWxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1kYXRhLW1vZGFsJyxcbiAgICAgIGRhdGE6IHtpc2NvbmZpcm1hdGlvbjpmYWxzZSxkYXRhOlt7ZGF0YTpkYXRhLGN1c3RvbWRhdGE6dW5zYWZldXJsfV19XG4gICAgfSk7XG5cblxuICB9XG5cblxuXG4gIG1hbmFnZXN0YXR1c211bHRpcGxlKCl7XG5cbiAgICBsZXQgaWRzOmFueT1bXTtcbiAgICBsZXQgYzphbnk7XG4gICAgZm9yKGMgaW4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQpe1xuXG4gICAgICBpZHMucHVzaCh0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZFtjXS5faWQpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnaWRzJyk7XG4gICAgY29uc29sZS5sb2coaWRzKTtcbiAgICAvL2NvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsZXQgYnM9dGhpcy5ib3R0b21TaGVldC5vcGVuKEJvdHRvbVNoZWV0LHtkYXRhOntpdGVtczp0aGlzLnN0YXR1c2FycnZhbH19KTtcblxuICAgIGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlIGJvdHRvbSBzaGVldCB3YXMgY2xvc2VkJyk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgaWYocmVzdWx0IT1udWxsKXtcbiAgICAgICAgLy9kYXRhLnN0YXR1cyA9IHJlc3VsdC52YWw7XG4gICAgICAgIC8vZGF0YS5pZCA9IGRhdGEuX2lkO1xuICAgICAgICBsZXQgbmV3c3RhdHVzOmFueT1yZXN1bHQudmFsO1xuICAgICAgdGhpcy5fYXBpU2VydmljZS50b2dnbGVzdGF0dXNtYW55KHRoaXMuYXBpdXJsdmFsICsgJ3N0YXR1c3VwZGF0ZScsIGlkcyxyZXN1bHQudmFsLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICBmb3IgKGxldCBjIGluIHRoaXMub2xkZGF0YSkge1xuICAgICAgICAgICAgLy90aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgIGlmIChpZHMuaW5kZXhPZih0aGlzLm9sZGRhdGFbY10uX2lkKT4tMSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gZGF0YSB1cGRhdGUnKTtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgdGhpcy5vbGRkYXRhW2NdLnN0YXR1cyA9IG5ld3N0YXR1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAgICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgICAgICAgIGRhdGE6IHttZXNzYWdlOiAnU3RhdHVzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2V9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgICAvL3RoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH1cblxuICBkZWxldGVtdWx0aXBsZSgpe1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGgnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0aW9uKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCk7XG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgZGF0YToge21lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBzZWxlY3RlZCByZWNvcmRzPyd9XG4gICAgfSk7XG4gICAgbGV0IGlkczphbnk9W107XG4gICAgbGV0IGM6YW55O1xuICAgIGZvcihjIGluIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKXtcblxuICAgICAgaWRzLnB1c2godGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRbY10uX2lkKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2lkcycpO1xuICAgIGNvbnNvbGUubG9nKGlkcyk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaGUgZGlhbG9nIHdhcyBjbG9zZWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICBpZihyZXN1bHQ9PSd5ZXMnKXtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS5kZXRlTWFueURhdGEodGhpcy5hcGl1cmx2YWwrdGhpcy5kZWxldGVlbmRwb2ludHZhbCxpZHMsdGhpcy5qd3R0b2tlbnZhbCx0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZihyZXN1bHQuc3RhdHVzPT0nc3VjY2Vzcycpe1xuICAgICAgICAgICAgZm9yKGxldCBjIGluIGlkcyl7XG4gICAgICAgICAgICAgIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMub2xkZGF0YScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgICAgICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICAgICAgICBkYXRhOiB7bWVzc2FnZTogJ1JlY29yZChzKSAgZGVsZXRlZCBzdWNjZXNzZnVsbHkgISEnLGlzY29uZmlybWF0aW9uOmZhbHNlfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgICAvL3RoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuICB9XG4gIGRlbGV0ZWRhdGEoZGF0YTphbnkpe1xuICAgIC8vYWxlcnQoNSk7XG4gICAgLy90aGlzLl9hcGlTZXJ2aWNlLmRldGVPbmVEYXRhKHRoaXMuYXBpdXJsdmFsK3RoaXMuZGVsZXRlZW5kcG9pbnR2YWwsZGF0YSx0aGlzLmp3dHRva2VudmFsKTtcbiAgICBjb25zb2xlLmxvZygnZGF0YSA4ODkgLS0tJyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5sb2coJ2p3dHRva2VudmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5qd3R0b2tlbnZhbCk7XG5cblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGRhdGE6IHttZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZSB0aGlzIHJlY29yZCA/Pyd9XG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaGUgZGlhbG9nIHdhcyBjbG9zZWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICBpZihyZXN1bHQ9PSd5ZXMnKXtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS5kZXRlT25lRGF0YSh0aGlzLmFwaXVybHZhbCt0aGlzLmRlbGV0ZWVuZHBvaW50dmFsLGRhdGEsdGhpcy5qd3R0b2tlbnZhbCx0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZihyZXN1bHQuc3RhdHVzPT0nc3VjY2Vzcycpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMub2xkZGF0YScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2xkZGF0YS5faWQpO1xuICAgICAgICAgICAgdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGRhdGEuX2lkKVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICAgICAgICBkYXRhOiB7bWVzc2FnZTogJ1JlY29yZCAgZGVsZXRlZCBzdWNjZXNzZnVsbHkgISEnLGlzY29uZmlybWF0aW9uOmZhbHNlfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgICAgLy90aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9XG5cbiBlZGl0ZGF0YShkYXRhOmFueSl7XG4gICAgY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVkaXRyb3V0ZXZhbCk7XG4gICAgY29uc29sZS5sb2codGhpcy5lZGl0cm91dGV2YWwrZGF0YS5faWQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuand0dG9rZW52YWwpO1xuICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZWRpdHJvdXRldmFsLGRhdGEuX2lkXSk7XG4gICAgLy90aGlzLm5hXG5cblxuICB9XG5cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBidXR0b24gY2xpY2sgZnVuY3Rpb24gc3RhcnQgKi9cbiAgYXJ0aXN0eHBQcmV2aWV3KHNpbmdsZURhdGE6IGFueSkge1xuICAgIGxldCBsaW5rID0gJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTozMDkwLycgKyAnZGF0YWxpc3QnO1xuICAgIC8qKioqKioqIG5vdCBjb21wbGV0ZWQgKioqKioqL1xuICAgIGxldCBkYXRhOiBhbnkgPSB7IFwic291cmNlXCI6IFwiYmxvY2tjaGFpbnVzZXJfdmlld1wiLCBcImNvbmRpdGlvblwiOiB7IFwicG9zdHNfaWRfb2JqZWN0XCI6IHNpbmdsZURhdGEuX2lkIH0sIFwidG9rZW5cIjogdGhpcy5qd3R0b2tlbnZhbCB9O1xuICAgIC8qKioqKioqKiBub3QgY29tcGxldGVkICoqKioqL1xuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdERhdGEobGluaywgZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCByZXN0bHQ6IGFueSA9IHJlc3BvbnNlO1xuICAgICAgLyogb3BlbiBkaWFsb2cgKi9cbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94LWFydGlzdHhwLXByZXZpZXcnLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgZGF0YTogeyBwcmV2aWV3OiB0cnVlLCBwcmV2aWV3RGF0YTogcmVzdGx0IH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8qIGFydGlzdHhwIHByZXZpZXcgYnV0dG9uIGNsaWNrIGZ1bmN0aW9uIGVuZCAqL1xuXG5cblxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbmZpcm1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbmZpcm0tZGlhbG9nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtZGlhbG9nIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDb25maXJtZGlhbG9nPixcbiAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55ICxwdWJsaWMgc2FuaXRpemVyOkRvbVNhbml0aXplcikge1xuICAgIGNvbnNvbGUubG9nKCdteSBkYXRhIC4uLicpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuICBzYW5pdGl6ZVVybCh1bnNhZmV1cmw6YW55LGRhdGE6YW55LHJvd2RhdGE6YW55KXtcbiAgICBmb3IobGV0IGIgaW4gZGF0YSl7XG4gICAgICB1bnNhZmV1cmw9dW5zYWZldXJsKycvJytyb3dkYXRhW2RhdGFbYl1dO1xuXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd1bnNhZmV1cmwnKTtcbiAgICBjb25zb2xlLmxvZyh1bnNhZmV1cmwpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHJvd2RhdGEpO1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodW5zYWZldXJsKTtcbiAgfVxuXG59XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdHRvbS1zaGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnYm90dG9tLXNoZWV0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYm90dG9tU2hlZXRSZWY6IE1hdEJvdHRvbVNoZWV0UmVmPEJvdHRvbVNoZWV0PixASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHVibGljIGRhdGE6YW55KSB7fVxuXG4gIG9wZW5MaW5rKHZhbDphbnkpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnYm90dG9tc2hlZXQgZGF0YScpO1xuICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgdGhpcy5ib3R0b21TaGVldFJlZi5kaXNtaXNzKHZhbCk7XG4gICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG4iXX0=