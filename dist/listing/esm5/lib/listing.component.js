/**
 * @fileoverview added by tsickle
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
            // console.log('this.columns');
            // console.log(this.columns);
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
        console.log('data');
        console.log(data);
        for (var key in data) {
            /** @type {?} */
            var flagk = '';
            if (data.hasOwnProperty(key)) {
                console.log(key + " -> " + data[key] + "--->" + typeof (data[key]));
                if (typeof (data[key]) == 'boolean') {
                    if (data[key] == true)
                        data[key] = 'Yes';
                    if (data[key] == false)
                        data[key] = 'No';
                }
                if (typeof (data[key]) == 'object') {
                    /** @type {?} */
                    var tempdata = [];
                    for (var k in data[key]) {
                        console.log('key');
                        console.log(key);
                        console.log(this.detail_datatypeval);
                        for (var p in this.detail_datatypeval) {
                            console.log('p');
                            console.log(p);
                            console.log(key);
                            console.log(data[key][k]);
                            if (this.detail_datatypeval[p].key == key && this.detail_datatypeval[p].value == 'image') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUNqRCx3QkFBd0IsRUFHeEIsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUMsY0FBYyxFQUFFLGlCQUFpQixFQUFDLHFCQUFxQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDMUYsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBUSxNQUFNLGlCQUFpQixDQUFDO0FBRWpILE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RCxPQUFPLEtBQUssY0FBYyxNQUFNLFFBQVEsQ0FBQzs7SUFDbkMsTUFBTSxHQUFHLGNBQWM7QUFFN0I7SUFvUEUsY0FBYztJQUVkLDBCQUFtQixXQUF1QixFQUFRLE1B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QW9CLGNBQThDLEVBQXVDLElBQVE7UUFBN0YsbUJBQWMsR0FBZCxjQUFjLENBQWdDO1FBQXVDLFNBQUksR0FBSixJQUFJLENBQUk7SUFBRyxDQUFDOzs7OztJQUVySCw4QkFBUTs7OztJQUFSLFVBQVMsR0FBTztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLHlCQUF5QjtJQUMzQixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGtPQUFnQztpQkFDakM7Ozs7Z0JBbG1DdUIsaUJBQWlCO2dEQW9tQzZCLE1BQU0sU0FBQyxxQkFBcUI7O0lBUWxHLGtCQUFDO0NBQUEsQUFiRCxJQWFDO1NBVFksV0FBVzs7Ozs7O0lBQ1YscUNBQXNEOztJQUFDLDJCQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIEluamVjdCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNvcnQsIE1hdFRhYmxlRGF0YVNvdXJjZSxNYXRQYWdpbmF0b3J9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7U2VsZWN0aW9uTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQge01hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEF9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7TWF0Qm90dG9tU2hlZXQsIE1hdEJvdHRvbVNoZWV0UmVmLE1BVF9CT1RUT01fU0hFRVRfREFUQX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uQ2FuY2VsLCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uRXJyb3IsIE5hdmlnYXRpb25TdGFydCwgUm91dGVyLCBFdmVudH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7c3RhcnRXaXRoLCBtYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuZGVjbGFyZSB2YXIgJDphbnk7XG5pbXBvcnQgKiBhcyBtb21lbnRJbXBvcnRlZCBmcm9tICdtb21lbnQnO1xuY29uc3QgbW9tZW50ID0gbW9tZW50SW1wb3J0ZWQ7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmcubW9kdWxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0aW5nLm1vZHVsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuXG4gIGRhdGFzb3VyY2V2YWw6YW55O1xuICBzZWFyY2hfc2V0dGluZ3N2YWw6YW55O1xuICBjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2V2YWw6YW55O1xuICBncmFiX2xpbmt2YWw6YW55O1xuICBkYXRlX3NlYXJjaF9zb3VyY2V2YWw6YW55O1xuICBkYXRlX3NlYXJjaF9lbmRwb2ludHZhbDphbnk7XG4gIHVybHZhbDphbnk7XG4gIHNlYXJjaGVuZHBvaW50dmFsOmFueTtcbiAgc2VhcmNoTGlzdHZhbDphbnk7XG4gIHBkZl9saW5rX3ZhbDphbnk7XG4gIHN0YXR1c2FycnZhbDphbnk7XG4gIHNraXB2YWw6YW55O1xuICBlcnJvcm1nOmFueTtcbiAgand0dG9rZW52YWw6YW55O1xuICBkZXRhaWxfZGF0YXR5cGV2YWw6YW55O1xuICBkZXRhaWxfc2tpcF9hcnJheXZhbDphbnk7XG4gIGRlbGV0ZWVuZHBvaW50dmFsOmFueTtcbiAgZWRpdHJvdXRldmFsOmFueTtcbiAgYXBpdXJsdmFsOmFueTtcbiAgdXBkYXRlZW5kcG9pbnR2YWw6YW55O1xuICBtb2RpZnlfaGVhZGVyX2FycmF5dmFsOmFueTtcbiAgc2VsZWN0aW9uIDphbnk7XG4gIHNvdXJjZWRhdGF2YWwgOmFueTtcbiAgZW1haWxhcnJheXZhbCA6YW55O1xuICBjb2x1bW5zIDphbnk9W107XG4gIG9sZGRhdGEgOmFueT1bXTtcbiAgdHNlYXJjaCA6YW55PVtdO1xuICBhdXRvc2VhcmNoIDphbnk9W107XG4gIHB1YmxpYyB4IDphbnk7XG4gIHB1YmxpYyBjdXN0b21idXR0b252YWwgOmFueTtcbiAgcHVibGljIHJlc3VsdCA6YW55ID0ge307XG4gIHB1YmxpYyBzaCA6YW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhcnQgOmFueSA9IGZhbHNlO1xuICBwdWJsaWMgYXVkMiA6YW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhdWQgOmFueSA9IGZhbHNlO1xuXG4gIC8qIHRoaXMgdmFyaWFibGUgZm9yIGFydGlzdCB4cCBwcmV2aWV3ICovXG4gIHByZXZpZXdGbHVnOiBhbnkgPSBmYWxzZTtcblxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hfc2V0dGluZ3Moc2VhcmNoX3NldHRpbmdzOiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCA9IHNlYXJjaF9zZXR0aW5ncztcbiAgICBjb25zb2xlLmxvZygndGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCk7XG4gICAgLypmb3IgKGxldCBpPSAwOyBpPD0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbaV0ubGFiZWwpO1xuICAgIH0qL1xuXG4gIC8qICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFswXS5sYWJlbCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoWzBdLnZhbHVlcyk7XG4gICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaCk7Ki9cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2UoY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlOiBhbnkpIHtcbiAgICB0aGlzLmNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbCA9IGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5jbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2V2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3JhYl9saW5rKGdyYWJfbGluazogYW55KSB7XG4gICAgdGhpcy5ncmFiX2xpbmt2YWwgPSBncmFiX2xpbms7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZ3JhYl9saW5rdmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5ncmFiX2xpbmt2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21idXR0b24oY3VzdG9tYnV0dG9uOiBhbnkpIHtcbiAgICB0aGlzLmN1c3RvbWJ1dHRvbnZhbCA9IGN1c3RvbWJ1dHRvbjtcbiAgICBjb25zb2xlLmxvZygndGhpcy5jdXN0b21idXR0b252YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmN1c3RvbWJ1dHRvbnZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfc291cmNlKGRhdGVfc2VhcmNoX3NvdXJjZTogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwgPSBkYXRlX3NlYXJjaF9zb3VyY2U7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGVfc2VhcmNoX2VuZHBvaW50KGRhdGVfc2VhcmNoX2VuZHBvaW50OiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsID0gZGF0ZV9zZWFyY2hfZW5kcG9pbnQ7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsKTtcbiAgfVxuICAgQElucHV0KClcbiAgc2V0IHVybCh1cmw6IGFueSkge1xuICAgIHRoaXMudXJsdmFsID0gdXJsO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnVybHZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudXJsdmFsKTtcbiAgfVxuICAgIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hlbmRwb2ludChzZWFyY2hlbmRwb2ludDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hlbmRwb2ludHZhbCA9IHNlYXJjaGVuZHBvaW50O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnNlYXJjaGVuZHBvaW50dmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hlbmRwb2ludHZhbCk7XG4gIH1cbiAgIEBJbnB1dCgpXG4gIHNldCBwZGZfbGluayhwZGZfbGluazogYW55KSB7XG4gICAgdGhpcy5wZGZfbGlua192YWwgPSBwZGZfbGluaztcbiAgICBjb25zb2xlLmxvZygndGhpcy5wZGZfbGlua192YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBkZl9saW5rX3ZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaExpc3Qoc2VhcmNoTGlzdDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hMaXN0dmFsID0gc2VhcmNoTGlzdDtcbiAgICBjb25zb2xlLmxvZygndGhpcy5zZWFyY2hMaXN0dmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hMaXN0dmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGF0YXNvdXJjZShkYXRhc291cmNlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFzb3VyY2V2YWwgPSBkYXRhc291cmNlO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmRhdGFzb3VyY2V2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzb3VyY2V2YWwpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNraXAoc2tpcDogYW55KSB7XG4gICAgdGhpcy5za2lwdmFsID0gc2tpcDtcbiAgICBjb25zb2xlLmxvZygndGhpcy5za2lwdmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5za2lwdmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGV0YWlsX2RhdGF0eXBlKGRldGFpbF9kYXRhdHlwZTogYW55KSB7XG4gICAgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwgPSBkZXRhaWxfZGF0YXR5cGU7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZGV0YWlsX2RhdGF0eXBldmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwpO1xuICB9XG4gQElucHV0KClcbiAgc2V0IGRldGFpbF9za2lwX2FycmF5KGRldGFpbF9za2lwX2FycmF5OiBhbnkpIHtcbiAgICB0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsID0gZGV0YWlsX3NraXBfYXJyYXk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsKTtcbiAgfVxuXG5ASW5wdXQoKVxuICBzZXQgc291cmNlZGF0YShzb3VyY2VkYXRhOiBhbnkpIHtcbiAgICB0aGlzLnNvdXJjZWRhdGF2YWwgPSBzb3VyY2VkYXRhO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnNvdXJjZWRhdGF2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNvdXJjZWRhdGF2YWwpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1vZGlmeV9oZWFkZXJfYXJyYXkobW9kaWZ5X2hlYWRlcl9hcnJheTogYW55KSB7XG4gICAgdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsID0gbW9kaWZ5X2hlYWRlcl9hcnJheTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gICAgc2V0IGRlbGV0ZWVuZHBvaW50KGRlbGV0ZWVuZHBvaW50dmFsOiBhbnkpIHtcbiAgICAgIHRoaXMuZGVsZXRlZW5kcG9pbnR2YWwgPSBkZWxldGVlbmRwb2ludHZhbDtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmRlbGV0ZWVuZHBvaW50dmFsJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmRlbGV0ZWVuZHBvaW50dmFsKTtcbiAgICB9XG5cbiBASW5wdXQoKVxuICAgIHNldCB1cGRhdGVlbmRwb2ludCh1cGRhdGVlbmRwb2ludDogYW55KSB7XG4gICAgICB0aGlzLnVwZGF0ZWVuZHBvaW50dmFsID0gdXBkYXRlZW5kcG9pbnQ7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy51cGRhdGVlbmRwb2ludHZhbCcpO1xuICAgICAgY29uc29sZS5sb2codGhpcy51cGRhdGVlbmRwb2ludHZhbCk7XG4gICAgfVxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGFwaXVybChhcGl1cmw6IGFueSkge1xuICAgICAgdGhpcy5hcGl1cmx2YWwgPSBhcGl1cmw7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5hcGl1cmx2YWwnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBpdXJsdmFsKTtcbiAgICB9XG5cbkBJbnB1dCgpXG4gICAgc2V0IGp3dHRva2VuKGp3dHRva2VuOiBhbnkpIHtcbiAgICAgIHRoaXMuand0dG9rZW52YWwgPSBqd3R0b2tlbjtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmp3dHRva2VudmFsJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmp3dHRva2VudmFsKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBzdGF0dXNhcnIoc3RhdHVzYXJyOiBhbnkpIHtcbiAgICAgIHRoaXMuc3RhdHVzYXJydmFsID0gc3RhdHVzYXJyO1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMuc3RhdHVzYXJydmFsJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXR1c2FycnZhbCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgZW1haWxhcnJheShlbWFpbGFycmF5OiBhbnkpIHtcbiAgICAgIHRoaXMuZW1haWxhcnJheXZhbCA9IGVtYWlsYXJyYXk7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5lbWFpbGFycmF5dmFsJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmVtYWlsYXJyYXl2YWwpO1xuICAgIH1cblxuICBASW5wdXQoKVxuICBzZXQgZWRpdHJvdXRlKGVkaXRyb3V0ZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2VkaXRyb3V0ZScpO1xuICAgIGNvbnNvbGUubG9nKGVkaXRyb3V0ZSk7XG4gICAgdGhpcy5lZGl0cm91dGV2YWwgPSBlZGl0cm91dGU7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZWRpdHJvdXRldmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5lZGl0cm91dGV2YWwpO1xuICB9XG5cblxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IHN0YXJ0ICovXG4gIEBJbnB1dCgpXG4gIHNldCBwcmV2aWV3X2FydGlzdHhwKGZsdWc6IGFueSkge1xuICAgIHRoaXMucHJldmlld0ZsdWcgPSB0cnVlO1xuICB9XG4gIC8qIGFydGlzdHhwIHByZXZpZXcgZW5kICovXG5cblxuICBzdGF0ZUdyb3Vwczogc3RyaW5nW10gPSB0aGlzLnNlYXJjaExpc3R2YWw7XG4gIHN0YXRlR3JvdXA6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRhdGFjb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBkaXNwbGF5ZWRDb2x1bW5zaGVhZGVyOiBzdHJpbmdbXSA9IFtdO1xuICBmb3JtYXJyYXk6IGFueSA9IFtdO1xuICBzdGFydF9kYXRlOiBhbnkgO1xuICBkYXRlU2VhcmNoX2NvbmRpdGlvbjogYW55ID17fTtcbiAgc2VsZWN0U2VhcmNoX2NvbmRpdGlvbjogYW55ID17fTtcbiAgYXV0b1NlYXJjaF9jb25kaXRpb246IGFueSA9e307XG4gIHRleHRTZWFyY2hfY29uZGl0aW9uOiBhbnkgPXt9O1xuICBlbmRfZGF0ZTogYW55IDtcbiAgcHVibGljIGk6IGFueSA7XG4gIGxvYWRpbmc6IGFueSA9IGZhbHNlIDtcbiAgcHVibGljIHByZXJlc3VsdDogYW55PXt9O1xuICAvL2RhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMuZGF0YXNvdXJjZXZhbCk7XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlO1xuXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICAvLyBvcHRpb25zOiBGb3JtR3JvdXA7XG4gIG15Rm9ybTphbnk7XG4gIC8vIG15Rm9ybTphbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9hcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxwcml2YXRlIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldCxwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHB1YmxpYyBfaHR0cDogSHR0cENsaWVudCwgcHVibGljIHNhbml0aXplcjpEb21TYW5pdGl6ZXIpIHtcblxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0OiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kOlxuICAgICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsOlxuICAgICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3I6IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuXG4gICAvKiB0aGlzLm15Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTsqL1xuXG5cblxuICB9XG4gIC8qQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbTGlzdGluZ10nXG4gIH0pKi9cblxuXG5cblxuXG5cbiAgaW5wdXRibHVyKHZhbDphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdvbiBibHVyIC4uLi4uJyk7XG4gICAgdGhpcy5teUZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCAhPW51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoICE9ICcnKSB7XG4gICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgbGV0IHNvdXJjZTogYW55O1xuICAgICAgbGV0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgICBzb3VyY2UgPSB7XG4gICAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uXG4gICAgICB9O1xuICAgICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXN1bHQpO1xuICAgICAgICB0aGlzLnByZXJlc3VsdCA9IHRoaXMucmVzdWx0LnJlcztcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVyZXN1bHQpO1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyB0aGlzLl9zZXJ2aWNlLnN1Y2Nlc3ModGhpcy5jb2x1bW5zWzBdLmRhdGUsJ2RuZG5uZCcsdGhpcy5vcHRpb25zKTtcbiAgIC8qIHRoaXMuc3RhdGVHcm91cE9wdGlvbnMgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlckdyb3VwKHZhbHVlKSlcbiAgICAgICAgKTsqL1xuXG4gICAgdGhpcy5zdGF0ZUdyb3VwID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxuICAgICAgICApO1xuXG4gICAgLypjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgY29tcG9uZW50TWFwcGVyW3RoaXMuZmllbGQudHlwZV1cbiAgICApO1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmZpZWxkID0gdGhpcy5maWVsZDtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XG4qL1xuXG4gICAgdGhpcy54ID0gdGhpcy5kYXRhc291cmNldmFsO1xuICAgIGxldCB4PXRoaXMueDtcblxuICAgIGxldCB0ZW1wID0gW11cbiAgICBsZXQga2V5cyA9IHhbMF1cbiAgICB0ZW1wID0gT2JqZWN0LmtleXMoa2V5cykgICAgLypieSBPYmplY3Qua2V5cygpIHdlIGNhbiBmaW5kIHRoZSBmaWVsZG5hbWVzKG9yIGtleXMpIGluIGFuIG9iamVjdCwgaS5lLCBpbiB0ZW1wIG9iamVjdCBmaWVsZCBuYW1lcyBhcmUgc2F2ZWQqL1xuXG4gICAgbGV0IGNvbGRlZl9saXN0ID0gW107XG4gICAgbGV0IGhlYWRlcl9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb2xkZWZfbGlzdC5wdXNoKHRlbXBbaV0ucmVwbGFjZSgvXFxzL2csIFwiX1wiKSk7ICAgICAgLyp0byByZXBsYWNlIHNwYWNlcyBpbiBmaWVsZCBuYW1lIGJ5IFwiX1wiLCB3ZSB1c2UgXCJyZXBsYWNlKC9cXHMvZywgXCJfXCIpXCIqL1xuICAgICAgaGVhZGVyX2xpc3QucHVzaCh0ZW1wW2ldKVxuICAgIH1cbiAgICAvL2NvbGRlZl9saXN0LnB1c2goJ0FjdGlvbnMnKTtcbiAgICAvL2hlYWRlcl9saXN0LnB1c2goJ0FjdGlvbnMnKVxuICAgIGNvbnNvbGUubG9nKCdjb2xkZWZfbGlzdCcsY29sZGVmX2xpc3QpO1xuICAgIGNvbnNvbGUubG9nKCdoZWFkZXJfbGlzdCcsaGVhZGVyX2xpc3QpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xkZWZfbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGZmID0gYHJvdy4ke2NvbGRlZl9saXN0W2ldfWBcbiAgICAgIHZhciB0dCA9IHsgY29sdW1uRGVmOiBgJHtjb2xkZWZfbGlzdFtpXX1gLCAgICBoZWFkZXI6IGAke2hlYWRlcl9saXN0W2ldLnJlcGxhY2UoL18vZyxcIiBcIil9YCwgIGNlbGw6IChyb3cpID0+IGV2YWwoZmYpICxvYmpsZW5ndGg6aGVhZGVyX2xpc3QubGVuZ3RoICB9O1xuICAgICAgLy8gY29uc29sZS5sb2coJ3R0LmNvbHVtbkRlZicpO1xuICAgICAgLy8gY29uc29sZS5sb2codHQuY29sdW1uRGVmKTtcbiAgICAgIGZvciAobGV0IGIgaW4gdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsKXtcbiAgICAgICAgaWYoYj09dHQuaGVhZGVyKSB0dC5oZWFkZXI9dGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsW2JdO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnNraXB2YWwuaW5kZXhPZih0dC5jb2x1bW5EZWYpPT0tMSlcbiAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHR0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmNvbHVtbnMnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29sdW1ucyk7XG4gICAgfVxuICAgIGxldCBkaXNwbGF5ZWRjb2xzPSB0aGlzLmNvbHVtbnMubWFwKHggPT4geC5jb2x1bW5EZWYpO1xuICAgIGRpc3BsYXllZGNvbHMucHVzaCgnQWN0aW9ucycpO1xuXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID1kaXNwbGF5ZWRjb2xzO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy51bnNoaWZ0KCdzZWxlY3QnKTsgICAgICAgIC8qYWRkcyBzZWxlY3QgY29sdW1uIGluIHRhYmxlIGJ5IHVuc2hpZnQgZnVuY3Rpb24qL1xuXG4gICAgbGV0IGRhdGFfbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy54Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXRhX2xpc3QucHVzaCh0aGlzLmNyZWF0ZURhdGEoeFtpXSkpO1xuICAgIH1cbiAgICB0aGlzLm9sZGRhdGE9ZGF0YV9saXN0O1xuICAgIGNvbnNvbGUubG9nKGRhdGFfbGlzdClcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGRhdGFfbGlzdCk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxuXG5cbiAgb25TdWJtaXQoKSB7XG4gICAgbGV0IHg6IGFueTtcbiAgICB0aGlzLmVycm9ybWcgPSAnJztcbiAgICBsZXQgZGF0YSA9IHRoaXMubXlGb3JtLnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5sb2codGhpcy5teUZvcm0udmFsaWQpO1xuICAgIGZvciAoeCBpbiB0aGlzLm15Rm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5teUZvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuICBkYXRlU2VhcmNoKHZhbDogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJzdGFydCBkYXRlXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhcnRfZGF0ZSk7XG4gICAgY29uc29sZS5sb2codGhpcy5lbmRfZGF0ZSk7XG4gICAgbGV0IHNkID0gbW9tZW50KHRoaXMuc3RhcnRfZGF0ZSkudW5peCgpO1xuICAgIGxldCBlZCA9IG1vbWVudCh0aGlzLmVuZF9kYXRlKS51bml4KCk7XG4gICAgY29uc29sZS5sb2cobW9tZW50KHRoaXMuc3RhcnRfZGF0ZSkudW5peCgpKTtcbiAgICBjb25zb2xlLmxvZyhtb21lbnQodGhpcy5lbmRfZGF0ZSkudW5peCgpKTtcbiAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZSh0aGlzLmVuZF9kYXRlKS5nZXRUaW1lKCkpO1xuICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJysgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICBjb25zb2xlLmxvZyhsaW5rKTtcbiAgICBpZihtb21lbnQodGhpcy5lbmRfZGF0ZSkudW5peCgpIT1udWxsICYmIG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKSE9bnVsbCApIHtcblxuXG4gICAgICBsZXQgc291cmNlOmFueTtcbiAgICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICAgIGNvbmRpdGlvbiA9IHt9O1xuXG4gICAgICBjb25kaXRpb25bdmFsXSA9IHtcbiAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICB9O1xuICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgICAgICAgIHNvdXJjZT0ge1xuICAgICAgICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgICAgICAgIH07XG4gICAgICBjb25zb2xlLmxvZyhzb3VyY2UpO1xuICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlcyk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KVxuXG4gICAgICAvKnRoaXMuX2h0dHAucG9zdChsaW5rLCB7c291cmNlOnRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAnY3JlYXRlZF9hdCc6IHtcbiAgICAgICAgICAgICRsdGU6IG5ldyBEYXRlKHRoaXMuZW5kX2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICRndGU6IG5ldyBEYXRlKHRoaXMuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgIH1cbiAgICAgICAgfSx0b2tlbjogdGhpcy5qd3R0b2tlbnZhbCxcbiAgICAgIH0pLnN1YnNjcmliZSggcmVzID0+e1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPXt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib2tcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXMpO1xuICAgICAgICBsZXQgbmV3ZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KSovXG4gICAgfWVsc2VcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gIH1cblxuXG5cbiAgc2VsZWN0U2VhcmNoICh2YWx1ZTphbnksdHlwZTphbnkpe1xuICAgIGNvbnNvbGUubG9nKCd0eXBlJyk7XG4gICAgY29uc29sZS5sb2codHlwZSk7XG4gICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIGNvbnNvbGUubG9nKGxpbmspO1xuICAgIGxldCBzb3VyY2U6YW55O1xuICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICBjb25kaXRpb24gPSB7fTtcbiAgICBjb25kaXRpb25bdHlwZS5maWVsZF09dmFsdWU7XG4gICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIHNvdXJjZT0ge1xuICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgfTtcbiAgICBpZih2YWx1ZSAhPW51bGwgKSB7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlcyk7XG4gICAgICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvb3BzJyk7XG4gICAgfVxuICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICB9XG4gIGF1dG9zZWFyY2hmdW5jdGlvbiAodmFsdWU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICBsZXQgdmFsOmFueT10aGlzLmF1dG9zZWFyY2hbdmFsdWVdO1xuICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgbGV0IHNvdXJjZTphbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55PXt9O1xuICAgIGlmKHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0ubGVuZ3RoPjAgJiYgeyRvcjpbdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS50b0xvd2VyQ2FzZSgpLHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0udG9VcHBlckNhc2UoKSx0aGlzLmF1dG9zZWFyY2hbdmFsdWVdXX0pY29uZGl0aW9uW3ZhbHVlKydfcmVnZXgnXT12YWw7XG4gICAgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9O1xuICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJysgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAvLyBsZXQgcmVzdWx0OmFueT17fTtcbiAgICAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgICAgY29uc29sZS5sb2codGhpcy5yZXN1bHQpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5yZXN1bHQucmVzKTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5yZXN1bHQucmVzKTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgfSk7XG4gIH1cblxuICB0ZXh0c2VhcmNoZnVuY3Rpb24gKHZhbHVlOmFueSl7XG4gICAgY29uc29sZS5sb2coJ3ZhbHVlJyk7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudHNlYXJjaFt2YWx1ZV0pO1xuICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJysgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICBjb25zb2xlLmxvZyhsaW5rKTtcbiAgICBsZXQgc291cmNlOmFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk9e307XG4gICAgLy9jb25kaXRpb24gPSB7fTtcbiAgICBsZXQgdmFsOmFueSA9dGhpcy50c2VhcmNoW3ZhbHVlXS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGNvbmRpdGlvbj17JG9yOlt0aGlzLnRzZWFyY2hbdmFsdWVdLnRvTG93ZXJDYXNlKCksdGhpcy50c2VhcmNoW3ZhbHVlXS50b1VwcGVyQ2FzZSgpXX07XG4gICAgaWYodGhpcy50c2VhcmNoW3ZhbHVlXS5sZW5ndGg+MSAmJiB7JG9yOlt0aGlzLnRzZWFyY2hbdmFsdWVdLnRvTG93ZXJDYXNlKCksdGhpcy50c2VhcmNoW3ZhbHVlXS50b1VwcGVyQ2FzZSgpXX0pY29uZGl0aW9uW3ZhbHVlKydfcmVnZXgnXT12YWw7XG4gICAgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgLy9jb25kaXRpb25bdmFsdWVdPVwiLzIyMi9cIjtcbiAgICAvL2NvbmRpdGlvbj17ZW1haWw6eyRyZWd4OicvMjIyL2knfX07XG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCdzb3VyY2UnKTtcbiAgICBjb25zb2xlLmxvZyhzb3VyY2UpO1xuICAgIC8vYWRkIGxvYWRlclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgaWYodmFsdWUgIT1udWxsICApIHtcbiAgICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAvL2Nsb3NlIGxvYWRlclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlcyk7XG4gICAgICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvb3BzJyk7XG4gICAgfVxuICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICB9XG5cblxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLnNlYXJjaExpc3R2YWwuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG5cbiAgLypwcml2YXRlIF9maWx0ZXJHcm91cCh2YWx1ZTogc3RyaW5nKTogU3RhdGVHcm91cFtdIHtcbiAgIC8hKiBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaExpc3R2YWxcbiAgICAgICAgICAubWFwKGdyb3VwID0+ICh7bmFtZXM6IF9maWx0ZXIoZ3JvdXAubmFtZXMsIHZhbHVlKX0pKVxuICAgICAgICAgIC5maWx0ZXIoZ3JvdXAgPT4gZ3JvdXAubmFtZXMubGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTGlzdHZhbDsqIS9cbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5zZWFyY2hMaXN0dmFsLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcbiAgfSovXG5cbiAgZ2V0c3RhdHVzKHZhbDphbnkpe1xuICAgIC8vIGNvbnNvbGUubG9nKCd2YWwnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwpO1xuICAgIGZvcihsZXQgYiBpbiB0aGlzLnN0YXR1c2FycnZhbCl7XG4gICAgICBpZih0aGlzLnN0YXR1c2FycnZhbFtiXS52YWw9PXZhbClcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzYXJydmFsW2JdLm5hbWU7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXR1c2FycnZhbFtiXS5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiTi9BXCI7XG4gIH1cbiAgaGkodmFsOiBhbnkpe1xuICAgIC8vIGNvbnNvbGUubG9nKCdoaSAgdmFsJyk7XG4gICAgLy8gY29uc29sZS5sb2codmFsKTtcbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlICE9IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgPT1udWxsICl7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2hhdHRlciBibG9rJyk7XG4gICAgICB0aGlzLnNoID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSAhPW51bGwpIHtcbiAgICAgIHRoaXMuc2ggPSB0cnVlO1xuICAgICAgdGhpcy5hdWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlID09IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgPT1udWxsKSB7XG4gICAgICB0aGlzLnNoID0gZmFsc2U7XG4gICAgICB0aGlzLmF1ZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBncmFwdXJsKHZhbDogYW55KXtcbiAgICAvLyAgZm9yIGFsbCByb3cgY2hlY2tpbmdcbi8vIGNvbnNvbGUubG9nKHZhbClcbiAgICBpZiAodmFsICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYXJ0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXVkMiA9IHRydWU7XG4gICAgfVxuICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYXVkMiA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmF1ZCk7XG4gIH1cblxuICAgIGNvcHlUZXh0KHJvdzogYW55LCB2YWw6IHN0cmluZyl7XG4gICAgY29uc29sZS5sb2coJ3JvdyBpbiBjb3B5VGV4dCcpO1xuICAgIGNvbnNvbGUubG9nKHJvdyk7XG4gICAgY29uc29sZS5sb2coJ3ZhbCBpbiBjb3B5VGV4dCcpO1xuICAgIGNvbnNvbGUubG9nKHZhbClcbiAgICAgIGxldCBmdWxsdXJsID0gdmFsKycnK3JvdztcbiAgICBjb25zb2xlLmxvZyhmdWxsdXJsKTtcbiAgICAgICAgbGV0IHNlbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHNlbEJveC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHNlbEJveC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICBzZWxCb3guc3R5bGUudG9wID0gJzAnO1xuICAgICAgICBzZWxCb3guc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgc2VsQm94LnZhbHVlID0gZnVsbHVybDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWxCb3gpO1xuICAgICAgICBzZWxCb3guZm9jdXMoKTtcbiAgICAgICAgc2VsQm94LnNlbGVjdCgpO1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNlbEJveCk7XG4gICAgfVxuXG4gIGNsaWNrdXJsKHZhbDogYW55ICwgdXJsOiBhbnkpIHtcbiAgICBsZXQgaVxuICAgIGNvbnNvbGUubG9nKCdvaycpO1xuICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgY29uc29sZS5sb2codmFsLl9pZCk7XG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgICBjb25zb2xlLmxvZyh1cmwgKyAnJyArdmFsLl9pZCArICcnICsgdGhpcy5wZGZfbGlua192YWwpO1xuICAgIGxldCBsaW5rPSB1cmwgKyAnJyArdmFsLl9pZCArICcnICsgdGhpcy5wZGZfbGlua192YWw7XG4gICAgd2luZG93Lm9wZW4obGluaywgXCJfYmxhbmtcIik7XG4gIH1cblxuXG4gIC8qKiBXaGV0aGVyIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgZWxlbWVudHMgbWF0Y2hlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3MuICovXG4gIGlzQWxsU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XG4gICAgY29uc3QgbnVtUm93cyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcbiAgICByZXR1cm4gbnVtU2VsZWN0ZWQgPT09IG51bVJvd3M7XG4gIH1cblxuICAvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xuICBtYXN0ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5pc0FsbFNlbGVjdGVkKCkgP1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDpcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xuICB9XG5cbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGNoZWNrYm94IG9uIHRoZSBwYXNzZWQgcm93ICovXG4gIGNoZWNrYm94TGFiZWwocm93PzogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoIXJvdykge1xuICAgICAgcmV0dXJuIGAke3RoaXMuaXNBbGxTZWxlY3RlZCgpID8gJ3NlbGVjdCcgOiAnZGVzZWxlY3QnfSBhbGxgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpID8gJ2Rlc2VsZWN0JyA6ICdzZWxlY3QnfSByb3cgJHtyb3cucG9zaXRpb24gKyAxfWA7XG4gIH1cblxuXG4gIGNyZWF0ZURhdGEocG9pbnQ6YW55KXtcbiAgICBsZXQgZGF0YSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHBvaW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRhdGFba2V5LnJlcGxhY2UoL1xccy9nLCBcIl9cIildID0gcG9pbnRba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgYXBwbHlGaWx0ZXIoZmlsdGVyVmFsdWU6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKGZpbHRlclZhbHVlKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhU291cmNlW25hbWVdKVxuICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgIH1cbiAgfVxuICAvKmFwcGx5RmlsdGVyMShmaWx0ZXJWYWx1ZTogc3RyaW5nLCB2YWw6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGZpbHRlclZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh2YWwudmFsdWUpO1xuICAgIGxldCB2YWx1ZT0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh2YWwudmFsdWUpO1xuXG4gICAgdmFsdWUuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIC8hKiB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUHJlZGljYXRlID0gZnVuY3Rpb24oZGF0YSwgZmlsdGVyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIC8vIHJldHVybiBkYXRhLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXIpO1xuICAgIH07XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfSohL1xuICB9Ki9cblxuICBzdHlsZUNlbGwoY29sX25hbWUscm93KXtcblxuICAgIC8qXG4gICAgIGlmIChjb2xfbmFtZVsnY29sdW1uRGVmJ109PSdwcm9ncmVzcycgJiYgcm93Wydwcm9ncmVzcyddPT0nMTAwJyl7XG4gICAgIHJldHVybiB7J2NvbG9yJyA6ICdyZWQnfVxuICAgICB9IGVsc2Uge1xuICAgICByZXR1cm4ge31cbiAgICAgfVxuICAgICAqL1xuXG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG5cbiAgdmlld2RhdGEoZGF0YTE6YW55KXtcbiAgICBsZXQgZGF0YTphbnk7XG4gICAgZGF0YT1kYXRhMTtcbiAgICBsZXQgZGF0YTI6YW55PVtdO1xuICAgIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGxldCBmbGFnazphbnk9Jyc7XG4gICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkgKyBcIiAtPiBcIiArIGRhdGFba2V5XStcIi0tLT5cIit0eXBlb2YgKGRhdGFba2V5XSkpO1xuICAgICAgICAgICAgICBpZih0eXBlb2YgKGRhdGFba2V5XSk9PSdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgaWYoZGF0YVtrZXldPT10cnVlKSBkYXRhW2tleV09J1llcyc7XG4gICAgICAgICAgICAgICAgICBpZihkYXRhW2tleV09PWZhbHNlKSBkYXRhW2tleV09J05vJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmKHR5cGVvZiAoZGF0YVtrZXldKT09J29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGxldCB0ZW1wZGF0YTphbnk9W107XG4gICAgICAgICAgICAgICAgICBmb3IobGV0IGsgaW4gZGF0YVtrZXldKXtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygna2V5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBwIGluIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFba2V5XVtrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleT09a2V5ICYmIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLnZhbHVlPT0naW1hZ2UnKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltZ3ZhbDphbnk9dGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0uZmlsZXVybCtkYXRhW2tleV1ba10ucmVwbGFjZSgvJy9nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW1ndmFsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW1ndmFsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWd2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVtrZXldW2tdLnJlcGxhY2UoLycvZywgJycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBkYXRhLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIitpbWd2YWwrXCI+PGJyLz5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRlbXBkYXRhLnB1c2goXCI8c3Bhbj5cIitkYXRhW2tleV1ba10rXCI8L3NwYW4+PGJyLz5cIilcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0ua2V5PT1rZXkgJiYgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0udmFsdWUhPSdpbWFnZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90ZW1wZGF0YS5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIrZGF0YVtrZXldW2tdK1wiPjxici8+XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKFwiPHNwYW4+XCIrZGF0YVtrZXldW2tdK1wiPC9zcGFuPjxici8+XCIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZGF0YVtrZXldPXRlbXBkYXRhO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZygnZGF0YScpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBmb3IobGV0IG4gaW4gZGF0YSl7XG4gICAgICAgIGlmKGRhdGFbbl0hPW51bGwgJiYgZGF0YVtuXSE9Jycpe1xuICAgICAgICAgIGRhdGEyW25dPWRhdGFbbl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGZvcihsZXQgdiBpbiB0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsKXtcbiAgICAgIC8vZGF0YTJbdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XV09Jyc7XG4gICAgICBkZWxldGUgZGF0YTJbdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XV07XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XScpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XSk7XG4gICAgfVxuICAgICAgbGV0IHJlcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEyKTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5kZXRhaWxfc2tpcF9hcnJheScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsKTtcblxuICAgIGNvbnNvbGUubG9nKCdyZXMnKTtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG5cblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgIGRhdGE6IHtpc2NvbmZpcm1hdGlvbjpmYWxzZSxkYXRhOnJlc31cbiAgICB9KTtcblxuICB9XG4gIG1hbmFnZXN0YXR1cyhkYXRhOmFueSl7XG4gICAgY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsZXQgYnM9dGhpcy5ib3R0b21TaGVldC5vcGVuKEJvdHRvbVNoZWV0LHtwYW5lbENsYXNzOiAnY3VzdG9tLWJvdHRvbXNoZWV0JyxkYXRhOntpdGVtczp0aGlzLnN0YXR1c2FycnZhbH19KTtcblxuICAgIGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlIGJvdHRvbSBzaGVldCB3YXMgY2xvc2VkJyk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgaWYocmVzdWx0IT1udWxsKXtcbiAgICAgICAgZGF0YS5zdGF0dXMgPSByZXN1bHQudmFsO1xuICAgICAgICBkYXRhLmlkID0gZGF0YS5faWQ7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnRvZ2dsZXN0YXR1cyh0aGlzLmFwaXVybHZhbCArICdzdGF0dXN1cGRhdGUnLCBkYXRhLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICBmb3IgKGxldCBjIGluIHRoaXMub2xkZGF0YSkge1xuICAgICAgICAgICAgLy90aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9sZGRhdGFbY10uX2lkID09IGRhdGEuX2lkKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbiBkYXRhIHVwZGF0ZScpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgdGhpcy5vbGRkYXRhW2NdLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgICAgICAgIGxldCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICAgICAgZGF0YToge21lc3NhZ2U6ICdTdGF0dXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZX1cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAgIC8vdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4vLyBmb3IgdHJlZSB2aWV3IGluIG1vZGFsXG4gIGN1c3RvbWJ1dHRvbmZ1bmMoZGF0YTphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7ICAgIC8vIHJvdyBkYXRhXG4gICAgY29uc29sZS5sb2codGhpcy5jdXN0b21idXR0b252YWwpOyAgICAvLyBvYmplY3QgZnJvbSB3aGVyZSB0aGUgbGlicmFyeSBoYXMgYmVlbiB1c2VkXG4gICAgbGV0IHVuc2FmZXVybDphbnk9dGhpcy5jdXN0b21idXR0b252YWwudXJsOyAgIC8vaWZyYW1lIHVybFxuICAgIGZvcihsZXQgYiBpbiB0aGlzLmN1c3RvbWJ1dHRvbnZhbC5maWVsZHMpe1xuICAgICAgdW5zYWZldXJsPXVuc2FmZXVybCsnLycrZGF0YVt0aGlzLmN1c3RvbWJ1dHRvbnZhbC5maWVsZHNbYl1dO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygndW5zYWZldXJsJyk7XG4gICAgY29uc29sZS5sb2codW5zYWZldXJsKTtcbiAgICB1bnNhZmV1cmw9dGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVuc2FmZXVybCk7ICAgLy9mb3Igc2FuaXRpemluZyB0aGUgdXJsIGZvciBzZWN1cml0eSwgb3RoZXJ3aXNlIGl0IHdvbid0IGJlIGFibGUgdG8gc2hvdyB0aGUgcGFnZSBpbiBpZnJhbWUsIGhlbmNlIG1vZGFsXG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHsgICAgICAgLy8gZm9yIG9wZW5pbmcgdGhlIG1vZGFsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tZGF0YS1tb2RhbCcsXG4gICAgICBkYXRhOiB7aXNjb25maXJtYXRpb246ZmFsc2UsZGF0YTpbe2RhdGE6ZGF0YSxjdXN0b21kYXRhOnVuc2FmZXVybH1dfVxuICAgIH0pO1xuXG5cbiAgfVxuXG5cblxuICBtYW5hZ2VzdGF0dXNtdWx0aXBsZSgpe1xuXG4gICAgbGV0IGlkczphbnk9W107XG4gICAgbGV0IGM6YW55O1xuICAgIGZvcihjIGluIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKXtcblxuICAgICAgaWRzLnB1c2godGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRbY10uX2lkKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2lkcycpO1xuICAgIGNvbnNvbGUubG9nKGlkcyk7XG4gICAgLy9jb25zb2xlLmxvZygnZGF0YScpO1xuICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgbGV0IGJzPXRoaXMuYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldCx7ZGF0YTp7aXRlbXM6dGhpcy5zdGF0dXNhcnJ2YWx9fSk7XG5cbiAgICBicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RoZSBib3R0b20gc2hlZXQgd2FzIGNsb3NlZCcpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIGlmKHJlc3VsdCE9bnVsbCl7XG4gICAgICAgIC8vZGF0YS5zdGF0dXMgPSByZXN1bHQudmFsO1xuICAgICAgICAvL2RhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgbGV0IG5ld3N0YXR1czphbnk9cmVzdWx0LnZhbDtcbiAgICAgIHRoaXMuX2FwaVNlcnZpY2UudG9nZ2xlc3RhdHVzbWFueSh0aGlzLmFwaXVybHZhbCArICdzdGF0dXN1cGRhdGUnLCBpZHMscmVzdWx0LnZhbCwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgZm9yIChsZXQgYyBpbiB0aGlzLm9sZGRhdGEpIHtcbiAgICAgICAgICAgIC8vdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGlkc1tjXSk7XG4gICAgICAgICAgICBpZiAoaWRzLmluZGV4T2YodGhpcy5vbGRkYXRhW2NdLl9pZCk+LTEpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIGRhdGEgdXBkYXRlJyk7XG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgIHRoaXMub2xkZGF0YVtjXS5zdGF0dXMgPSBuZXdzdGF0dXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgICAgICAgbGV0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICAgICAgICBkYXRhOiB7bWVzc2FnZTogJ1N0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgfSk7XG4gICAgfVxuICAgICAgLy90aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9XG5cbiAgZGVsZXRlbXVsdGlwbGUoKXtcbiAgICBjb25zb2xlLmxvZygndGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGlvbik7XG4gICAgY29uc29sZS5sb2codGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQpO1xuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgIGRhdGE6IHttZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgc2VsZWN0ZWQgcmVjb3Jkcz8nfVxuICAgIH0pO1xuICAgIGxldCBpZHM6YW55PVtdO1xuICAgIGxldCBjOmFueTtcbiAgICBmb3IoYyBpbiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCl7XG5cbiAgICAgIGlkcy5wdXNoKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkW2NdLl9pZCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdpZHMnKTtcbiAgICBjb25zb2xlLmxvZyhpZHMpO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlIGRpYWxvZyB3YXMgY2xvc2VkJyk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgaWYocmVzdWx0PT0neWVzJyl7XG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2UuZGV0ZU1hbnlEYXRhKHRoaXMuYXBpdXJsdmFsK3RoaXMuZGVsZXRlZW5kcG9pbnR2YWwsaWRzLHRoaXMuand0dG9rZW52YWwsdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYocmVzdWx0LnN0YXR1cz09J3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIGZvcihsZXQgYyBpbiBpZHMpe1xuICAgICAgICAgICAgICB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLm9sZGRhdGEnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgICAgICAgICAgbGV0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgICAgICAgICAgZGF0YToge21lc3NhZ2U6ICdSZWNvcmQocykgIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ICEhJyxpc2NvbmZpcm1hdGlvbjpmYWxzZX1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgICAgLy90aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuICBkZWxldGVkYXRhKGRhdGE6YW55KXtcbiAgICAvL2FsZXJ0KDUpO1xuICAgIC8vdGhpcy5fYXBpU2VydmljZS5kZXRlT25lRGF0YSh0aGlzLmFwaXVybHZhbCt0aGlzLmRlbGV0ZWVuZHBvaW50dmFsLGRhdGEsdGhpcy5qd3R0b2tlbnZhbCk7XG4gICAgY29uc29sZS5sb2coJ2RhdGEgODg5IC0tLScpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKCdqd3R0b2tlbnZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuand0dG9rZW52YWwpO1xuXG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7bWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyByZWNvcmQgPz8nfVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlIGRpYWxvZyB3YXMgY2xvc2VkJyk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgaWYocmVzdWx0PT0neWVzJyl7XG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2UuZGV0ZU9uZURhdGEodGhpcy5hcGl1cmx2YWwrdGhpcy5kZWxldGVlbmRwb2ludHZhbCxkYXRhLHRoaXMuand0dG9rZW52YWwsdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYocmVzdWx0LnN0YXR1cz09J3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLm9sZGRhdGEnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9sZGRhdGEuX2lkKTtcbiAgICAgICAgICAgIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBkYXRhLl9pZClcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgbGV0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgICAgICAgICAgZGF0YToge21lc3NhZ2U6ICdSZWNvcmQgIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ICEhJyxpc2NvbmZpcm1hdGlvbjpmYWxzZX1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gZWRpdGRhdGEoZGF0YTphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5sb2codGhpcy5lZGl0cm91dGV2YWwpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZWRpdHJvdXRldmFsK2RhdGEuX2lkKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmp3dHRva2VudmFsKTtcbiAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmVkaXRyb3V0ZXZhbCxkYXRhLl9pZF0pO1xuICAgIC8vdGhpcy5uYVxuXG5cbiAgfVxuXG4gIC8qIGFydGlzdHhwIHByZXZpZXcgYnV0dG9uIGNsaWNrIGZ1bmN0aW9uIHN0YXJ0ICovXG4gIGFydGlzdHhwUHJldmlldyhzaW5nbGVEYXRhOiBhbnkpIHtcbiAgICBsZXQgbGluayA9ICdodHRwOi8vZGV2ZWxvcG1lbnRhcGkuYXVkaW9kZWFkbGluZS5jb206MzA5MC8nICsgJ2RhdGFsaXN0JztcbiAgICAvKioqKioqKiBub3QgY29tcGxldGVkICoqKioqKi9cbiAgICBsZXQgZGF0YTogYW55ID0geyBcInNvdXJjZVwiOiBcImJsb2NrY2hhaW51c2VyX3ZpZXdcIiwgXCJjb25kaXRpb25cIjogeyBcInBvc3RzX2lkX29iamVjdFwiOiBzaW5nbGVEYXRhLl9pZCB9LCBcInRva2VuXCI6IHRoaXMuand0dG9rZW52YWwgfTtcbiAgICAvKioqKioqKiogbm90IGNvbXBsZXRlZCAqKioqKi9cbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3REYXRhKGxpbmssIGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgcmVzdGx0OiBhbnkgPSByZXNwb25zZTtcbiAgICAgIC8qIG9wZW4gZGlhbG9nICovXG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveC1hcnRpc3R4cC1wcmV2aWV3JyxcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIGRhdGE6IHsgcHJldmlldzogdHJ1ZSwgcHJldmlld0RhdGE6IHJlc3RsdCB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IGJ1dHRvbiBjbGljayBmdW5jdGlvbiBlbmQgKi9cblxuXG5cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb25maXJtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdjb25maXJtLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybWRpYWxvZyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q29uZmlybWRpYWxvZz4sXG4gICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSAscHVibGljIHNhbml0aXplcjpEb21TYW5pdGl6ZXIpIHtcbiAgICBjb25zb2xlLmxvZygnbXkgZGF0YSAuLi4nKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbiAgc2FuaXRpemVVcmwodW5zYWZldXJsOmFueSxkYXRhOmFueSxyb3dkYXRhOmFueSl7XG4gICAgZm9yKGxldCBiIGluIGRhdGEpe1xuICAgICAgdW5zYWZldXJsPXVuc2FmZXVybCsnLycrcm93ZGF0YVtkYXRhW2JdXTtcblxuICAgIH1cbiAgICBjb25zb2xlLmxvZygndW5zYWZldXJsJyk7XG4gICAgY29uc29sZS5sb2codW5zYWZldXJsKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyb3dkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVuc2FmZXVybCk7XG4gIH1cblxufVxuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tc2hlZXQnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJvdHRvbVNoZWV0UmVmOiBNYXRCb3R0b21TaGVldFJlZjxCb3R0b21TaGVldD4sQEluamVjdChNQVRfQk9UVE9NX1NIRUVUX0RBVEEpIHB1YmxpYyBkYXRhOmFueSkge31cblxuICBvcGVuTGluayh2YWw6YW55KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2JvdHRvbXNoZWV0IGRhdGEnKTtcbiAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgIHRoaXMuYm90dG9tU2hlZXRSZWYuZGlzbWlzcyh2YWwpO1xuICAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuIl19