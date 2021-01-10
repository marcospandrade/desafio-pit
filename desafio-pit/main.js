(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\desafio-pitang\rep\desafio-pit\src\main.ts */"zUnb");


/***/ }),

/***/ "17OV":
/*!***************************************************!*\
  !*** ./src/app/home/history/history.component.ts ***!
  \***************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/local-storage/local-storage.service */ "EP1h");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");






function HistoryComponent_mat_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" query searched: ", item_r2.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" search moment: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, item_r2.datetime, "dd/MM/yyyy hh:mm:ss"), " ");
} }
function HistoryComponent_mat_card_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" query searched: ", item_r3.repository, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" search moment: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, item_r3.datetime, "dd/MM/yyyy hh:mm:ss"), " ");
} }
class HistoryComponent {
    constructor(_localStorageService) {
        this._localStorageService = _localStorageService;
        this.sortingByDate = (list) => {
            return list.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());
        };
    }
    ngOnInit() {
        this._localStorageService.historic$.subscribe((history) => {
            this.historic = this.sortingByDate([...history]);
        });
        this._localStorageService.historicRep$.subscribe((historyReps) => {
            this.historicRepo = this.sortingByDate([...historyReps]);
        });
    }
}
HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"])); };
HistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryComponent, selectors: [["app-history"]], decls: 16, vars: 2, consts: [["id", "container-history"], [1, "cards"], [4, "ngFor", "ngForOf"]], template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ranking Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Last 5 user searches ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HistoryComponent_mat_card_9_Template, 6, 5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Last 5 repos searches ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HistoryComponent_mat_card_15_Template, 6, 5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historicRepo);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["#container-history[_ngcontent-%COMP%] {\n  padding: 1rem 6rem;\n  margin: auto;\n  flex: 1;\n}\n\n#container-history[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n  text-align: -webkit-center;\n}\n\n#container-history[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  width: 50vh;\n  margin: 1rem;\n  text-align: center;\n}\n\n@media (max-width: 720px) {\n  #container-history[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n    width: 13vh;\n    margin: 1rem;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXItaGlzdG9yeSB7XHJcbiAgcGFkZGluZzogMXJlbSA2cmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4jY29udGFpbmVyLWhpc3RvcnkgLmNhcmRzIHtcclxuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRhaW5lci1oaXN0b3J5IC5tYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDUwdmg7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgI2NvbnRhaW5lci1oaXN0b3J5IC5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMTN2aDtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-history',
                templateUrl: './history.component.html',
                styleUrls: ['./history.component.scss'],
            }]
    }], function () { return [{ type: _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ "W/SQ");
/* harmony import */ var _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ranking/ranking.component */ "vvpg");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history/history.component */ "17OV");






class HomeComponent {
    constructor() {
        window.onresize = function () {
            location.reload();
        };
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [["mat-align-tabs", "center"], ["label", "Search"], ["label", "Ranking"], ["label", "History"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-ranking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_3__["RankingComponent"], _history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AHbL":
/*!***********************************************************!*\
  !*** ./src/app/core/local-storage/local-storage.model.ts ***!
  \***********************************************************/
/*! exports provided: HistoricKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricKey", function() { return HistoricKey; });
var HistoricKey;
(function (HistoricKey) {
    HistoricKey["SYSTEM_HISTORIC"] = "pit.system.historic";
    HistoricKey["SYSTEM_HISTORIC_REPOS"] = "pit.system.historic.repos";
})(HistoricKey || (HistoricKey = {}));


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EP1h":
/*!*************************************************************!*\
  !*** ./src/app/core/local-storage/local-storage.service.ts ***!
  \*************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _local_storage_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.model */ "AHbL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class LocalStorageService {
    constructor(_http) {
        this._http = _http;
        this._historicEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.historic);
        this._historicRepEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.historicRep);
        this.historicRep$ = this._historicRepEvent.asObservable();
        this.historic$ = this._historicEvent.asObservable();
    }
    add(username) {
        const value = this._historicEvent.getValue();
        if (value.length === 5) {
            value.shift();
        }
        value.push({ username, datetime: new Date().toISOString() });
        localStorage.setItem(_local_storage_model__WEBPACK_IMPORTED_MODULE_1__["HistoricKey"].SYSTEM_HISTORIC, JSON.stringify(value));
        this._historicEvent.next(value);
    }
    get historic() {
        const historic = localStorage.getItem(_local_storage_model__WEBPACK_IMPORTED_MODULE_1__["HistoricKey"].SYSTEM_HISTORIC);
        return historic ? JSON.parse(historic) : [];
    }
    addRep(repository) {
        const value = this._historicRepEvent.getValue();
        if (value.length === 5) {
            value.shift();
        }
        value.push({ repository, datetime: new Date().toISOString() });
        localStorage.setItem(_local_storage_model__WEBPACK_IMPORTED_MODULE_1__["HistoricKey"].SYSTEM_HISTORIC_REPOS, JSON.stringify(value));
        this._historicRepEvent.next(value);
    }
    get historicRep() {
        const historicRep = localStorage.getItem(_local_storage_model__WEBPACK_IMPORTED_MODULE_1__["HistoricKey"].SYSTEM_HISTORIC_REPOS);
        return historicRep ? JSON.parse(historicRep) : [];
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");





class AppComponent {
    constructor() {
        this.title = 'desafio-pit';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["id", "grid-home", "cols", "1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTileHeaderCssMatStyler"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "W/SQ":
/*!*************************************************!*\
  !*** ./src/app/home/search/search.component.ts ***!
  \*************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_github_github_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/github/github.service */ "aqeI");
/* harmony import */ var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/local-storage/local-storage.service */ "EP1h");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");















function SearchComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 11);
} }
function SearchComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " repositoy is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SearchComponent {
    constructor(_githubService, _localStorageService) {
        this._githubService = _githubService;
        this._localStorageService = _localStorageService;
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.repositoryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.historicLocal = this._localStorageService.historic;
        this.historicRepLocal = this._localStorageService.historicRep;
        this.columnDefsUser = [
            { headerName: 'Login', field: 'login', width: 60 },
            { headerName: 'Type', field: 'type', width: 50 },
            { headerName: 'Url', field: 'url' }
        ];
        this.columnDefsRep = [
            { headerName: 'Name', field: 'name' },
            { headerName: 'Owner', field: 'owner.login' },
            {
                headerName: 'Updated At',
                field: 'updated_at',
                sortable: true,
                sort: 'desc'
            }
        ];
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.defaultUserColDef = {
            sortable: true,
            resizable: true,
            filter: true,
            flex: 1,
        };
        this.defaultReposColDef = {
            resizable: true,
            filter: true,
            flex: 1,
            minWidth: 150
        };
    }
    ngOnInit() {
        if (this.historicLocal.length > 0) {
            this.usernameFormControl.setValue(this.historicLocal[this.historicLocal.length - 1].username);
            this.callingGitUsers();
        }
        if (this.historicRepLocal.length > 0) {
            this.repositoryFormControl.setValue(this.historicRepLocal[this.historicRepLocal.length - 1].repository);
            this.callingGitRepos();
        }
    }
    ngOnDestroy() {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    }
    onGridUserReady(params) {
        this.gridUserApi = params.api;
        this.gridUserColumnApi = params.columnApi;
        this.gridUserApi.sizeColumnsToFit(400);
        if (this.historicLocal.length > 0) {
            this._githubService
                .getUser(this.usernameFormControl.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => (this.loading = false)))
                .subscribe((response) => {
                this.rowDataUser = response.items;
            });
        }
    }
    onGridRepReady(params) {
        this.gridRepApi = params.api;
        this.gridRepColumnApi = params.columnApi;
        this.gridRepApi.sizeColumnsToFit(400);
        if (this.historicRepLocal.length > 0) {
            this._githubService
                .getRepos(this.repositoryFormControl.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => (this.loading = false)))
                .subscribe((response) => {
                this.rowDataRep = response.items;
            });
        }
    }
    searchUsersGit() {
        if (!this.usernameFormControl.invalid) {
            this._localStorageService.add(this.usernameFormControl.value);
            this.callingGitUsers();
        }
    }
    searchReposGit() {
        if (!this.repositoryFormControl.invalid) {
            this._localStorageService.addRep(this.repositoryFormControl.value);
            this.callingGitRepos();
        }
    }
    callingGitRepos() {
        this.loading = true;
        this._githubService
            .getRepos(this.repositoryFormControl.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => (this.loading = false)))
            .subscribe((response) => {
            response.map;
            this.rowDataRep = response.items;
        });
    }
    callingGitUsers() {
        this.loading = true;
        this._githubService
            .getUser(this.usernameFormControl.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => (this.loading = false)))
            .subscribe((response) => {
            this.rowDataUser = response.items;
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_github_github_service__WEBPACK_IMPORTED_MODULE_4__["GithubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 27, vars: 15, consts: [["class", "example-margin", "color", "accent", "mode", "indeterminate", 4, "ngIf"], ["id", "grid-search"], ["id", "search-user"], ["type", "text", "matInput", "", 3, "formControl"], [4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["id", "table-user", 1, "container-grid"], [1, "ag-theme-material", 2, "width", "100%", "height", "100%", 3, "columnDefs", "defaultColDef", "pagination", "rowData", "paginationPageSize", "gridReady"], ["id", "search-rep"], ["id", "table-reps", 1, "container-grid"], [1, "ag-theme-material", 2, "width", "100%", "height", "100%", 3, "columnDefs", "defaultColDef", "rowData", "pagination", "paginationPageSize", "gridReady"], ["color", "accent", "mode", "indeterminate", 1, "example-margin"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search users and repos by GitHub Api");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchComponent_mat_error_10_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_11_listener() { return ctx.searchUsersGit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ag-grid-angular", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function SearchComponent_Template_ag_grid_angular_gridReady_14_listener($event) { return ctx.onGridUserReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "repository");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SearchComponent_mat_error_22_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_23_listener() { return ctx.searchReposGit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ag-grid-angular", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function SearchComponent_Template_ag_grid_angular_gridReady_26_listener($event) { return ctx.onGridRepReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.usernameFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usernameFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefsUser)("defaultColDef", ctx.defaultUserColDef)("pagination", true)("rowData", ctx.rowDataUser)("paginationPageSize", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.repositoryFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.repositoryFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefsRep)("defaultColDef", ctx.defaultReposColDef)("rowData", ctx.rowDataRep)("pagination", true)("paginationPageSize", 5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridAngular"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 2vh 0;\n}\n\n#grid-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 10rem;\n  margin: 3vh;\n}\n\n#grid-search[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 2vh auto 2vh auto;\n  text-align: center;\n}\n\n#grid-search[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAydmggMDtcclxufVxyXG5cclxuI2dyaWQtc2VhcmNoIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG4gIG1hcmdpbjogM3ZoO1xyXG59XHJcblxyXG4jZ3JpZC1zZWFyY2ggZm9ybSB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IDJ2aCBhdXRvIDJ2aCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2dyaWQtc2VhcmNoIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss'],
            }]
    }], function () { return [{ type: _core_github_github_service__WEBPACK_IMPORTED_MODULE_4__["GithubService"] }, { type: _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _home_search_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/search/search.component */ "W/SQ");
/* harmony import */ var _home_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/ranking/ranking.component */ "vvpg");
/* harmony import */ var _home_history_history_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/history/history.component */ "17OV");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/core.module */ "pKmL");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__["AgGridModule"].withComponents([]),
            _core_core_module__WEBPACK_IMPORTED_MODULE_23__["CoreModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
        _home_search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"],
        _home_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_21__["RankingComponent"],
        _home_history_history_component__WEBPACK_IMPORTED_MODULE_22__["HistoryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__["AgGridModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_23__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                    _home_search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"],
                    _home_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_21__["RankingComponent"],
                    _home_history_history_component__WEBPACK_IMPORTED_MODULE_22__["HistoryComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                    ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__["AgGridModule"].withComponents([]),
                    _core_core_module__WEBPACK_IMPORTED_MODULE_23__["CoreModule"],
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aqeI":
/*!***********************************************!*\
  !*** ./src/app/core/github/github.service.ts ***!
  \***********************************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class GithubService {
    constructor(_http) {
        this._http = _http;
        this.API_ENDPOINT = 'http://api.github.com';
    }
    getUser(username) {
        return this._http.get(`${this.API_ENDPOINT}/search/users`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('q', username),
        });
    }
    getRepos(repos) {
        return this._http.get(`${this.API_ENDPOINT}/search/repositories`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('q', repos),
        });
    }
    getRankingLovedUsers() {
        return this._http.get(`${this.API_ENDPOINT}/search/users`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('q', 'followers:>=5000')
                .set('page', '1')
                .set('per_page', '5')
                .set('sort', 'followers')
                .set('order', 'desc')
        });
    }
    getFollowersCount(url) {
        return this._http.get(`${url}`);
    }
    getRankingRep() {
        return this._http.get(`${this.API_ENDPOINT}/search/repositories`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('q', 'stars:>=10000')
                .set('page', '1')
                .set('per_page', '5')
                .set('sort', 'stars')
                .set('order', 'desc')
        });
    }
}
GithubService.ɵfac = function GithubService_Factory(t) { return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GithubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GithubService, factory: GithubService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class NavbarComponent {
    constructor() {
        this.title = 'Procuraê';
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 6, vars: 1, consts: [["id", "navbar-procurae", "color", "primary", "role", "heading"], ["mat-mini-fab", "", "aria-label", "Reposit\u00F3rio", 1, "btn-repository"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "star_rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: auto;\n}\n\n#navbar-procurae[_ngcontent-%COMP%]   .btn-repository[_ngcontent-%COMP%] {\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNuYXZiYXItcHJvY3VyYWUgLmJ0bi1yZXBvc2l0b3J5IHtcclxuICByaWdodDogMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vvpg":
/*!***************************************************!*\
  !*** ./src/app/home/ranking/ranking.component.ts ***!
  \***************************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_github_github_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/github/github.service */ "aqeI");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");







class RankingComponent {
    constructor(_githubService) {
        this._githubService = _githubService;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /* ag-grid */
        this.columnDefsRankingUser = [
            { headerName: 'Login', field: 'login', width: 150 },
            { headerName: 'Followers', field: 'followers_url', width: 350 },
            { headerName: 'Url', field: 'url', width: 300 }
        ];
        this.columnDefsRankingReps = [
            { headerName: 'Name', field: 'name' },
            { headerName: 'Owner', field: 'owner.login' },
            {
                headerName: 'Stars',
                field: 'stargazers_count',
                sort: 'desc'
            }
        ];
        this.defaultRankingUserColDef = {
            sortable: true,
            resizable: true,
            filter: true,
            flex: 1,
        };
        this.defaultRankingRepsColDef = {
            resizable: true,
            filter: true,
            flex: 1,
            minWidth: 150
        };
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    }
    onGridRankingUsersReady(params) {
        this.gridRankingUserApi = params.api;
        this.gridRankingUserColumnApi = params.columnApi;
        this.gridRankingUserApi.sizeColumnsToFit(400);
        this._githubService
            .getRankingLovedUsers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribe))
            .subscribe((response) => {
            this.rowDataRankingUser = response.items;
        });
    }
    onGridRankingRepReady(params) {
        this.gridRankingRepsApi = params.api;
        this.gridRankingRepsColumnApi = params.columnApi;
        this.gridRankingRepsApi.sizeColumnsToFit(400);
        this._githubService
            .getRankingRep()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribe))
            .subscribe((response) => {
            this.rowDataRankingReps = response.items;
        });
    }
}
RankingComponent.ɵfac = function RankingComponent_Factory(t) { return new (t || RankingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_github_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"])); };
RankingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RankingComponent, selectors: [["app-ranking"]], decls: 16, vars: 5, consts: [["id", "container-ranking"], [1, "container-grid"], [1, "ag-theme-material", 2, "width", "100%", "height", "100%", 3, "rowData", "columnDefs", "gridReady"], [1, "ag-theme-material", 2, "width", "100%", "height", "100%", 3, "columnDefs", "defaultColDef", "rowData", "gridReady"]], template: function RankingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "History Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Most loved users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ag-grid-angular", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function RankingComponent_Template_ag_grid_angular_gridReady_9_listener($event) { return ctx.onGridRankingUsersReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Top 5 reps stargazers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ag-grid-angular", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function RankingComponent_Template_ag_grid_angular_gridReady_15_listener($event) { return ctx.onGridRankingRepReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx.rowDataRankingUser)("columnDefs", ctx.columnDefsRankingUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefsRankingReps)("defaultColDef", ctx.defaultRankingRepsColDef)("rowData", ctx.rowDataRankingReps);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridAngular"]], styles: ["#container-ranking[_ngcontent-%COMP%] {\n  padding: 1rem 6rem !important;\n  margin: auto;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyYW5raW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQUNGIiwiZmlsZSI6InJhbmtpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyLXJhbmtpbmcge1xyXG4gIHBhZGRpbmc6IDFyZW0gNnJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmbGV4OiAxO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RankingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ranking',
                templateUrl: './ranking.component.html',
                styleUrls: ['./ranking.component.scss']
            }]
    }], function () { return [{ type: _core_github_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map