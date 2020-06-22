(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource-detail-resource-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resource-detail/resource-detail.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resource-detail/resource-detail.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>.internal-header .toolbar-container{padding-top:15px !important;padding-bottom:15px !important}</style>\n<!-- Back button with a default href -->\n<ion-header  class=\"internal-header ion-align-items-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/resources\"></ion-back-button>\n\t  \n    </ion-buttons>\n\t    <ion-title><img class=\"logo\" src=\"../assets/images/logo.svg\"></ion-title>\n\t\t  <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n    \n    <span *ngIf=\"!keyvalue\">\n     <section class=\"text-center internal-hero resource-detail-hero\" [style.backgroundImage]=\"'url(' + data.thumbnail_url + ')'\" *ngIf=\"data\">\n    \t<h3 class=\"internal-hero-title\">\n    \t    <span [innerHTML]=\"data?.post_title\"></span>\n    \t</h3>\n\t</section>\n\t</span> \n\n  \n  <span *ngIf=\"!keyvalue\">\n       <ion-grid class=\"px-1 jumpto-filters\" style=\"border-bottom:1px solid #eee\" *ngIf=\"data\"> \n          <ion-row  class=\"ion-align-items-center\"> \n           <ion-col size=\"3\">  <ion-label>Jump to</ion-label></ion-col>\n           <ion-col size=\"3\" style=\"max-width:100%\">\n                   <ion-select placeholder=\"Week\" [(ngModel)]=\"filterParams.select_week\" name=\"select_week\">\n                    <ion-select-option *ngFor=\"let item of weeks | keyvalue\" value=\"{{item.key}}\">{{item.key}}</ion-select-option>\n                  </ion-select>\n              </ion-col>  \n              \n            <ion-col size=\"3\">\n                   <ion-select placeholder=\"Day\" style=\"max-width:100%\" [(ngModel)]=\"filterParams.select_day\" name=\"select_day\">\n                  <ion-select-option value=\"Day 1\">Day 1</ion-select-option>\n                  <ion-select-option value=\"Day 2\">Day 2</ion-select-option>\n                  <ion-select-option value=\"Day 3\">Day 3</ion-select-option>\n                  <ion-select-option value=\"Day 4\">Day 4</ion-select-option>\n                  <ion-select-option value=\"Day 5\">Day 5</ion-select-option>\n                  <ion-select-option value=\"Day 6\">Day 6</ion-select-option>\n                  <ion-select-option value=\"Day 7\">Day 7</ion-select-option>\n                  </ion-select>\n              </ion-col>  \n              \n           <ion-col size=\"3\" padding> <ion-button expand=\"block\" color=\"secondary\" size=\"small\" (click)=\"filterBookContent()\" >Go</ion-button></ion-col>\n            </ion-row> \n    \t </ion-grid>\n    \t \n    \t \n        <ion-grid class=\"px-1\">\n            <ion-col class=\"ion-no-padding\">\n         \n              <div *ngFor=\"let item of weeks | keyvalue\" class=\"week-days-list\">\n                <ion-item class=\"ion-no-padding\">\n                  <ion-label style=\"font-size:13px\">{{item.key}}</ion-label>\n                    <div *ngFor=\"let weekDay of weeks[item.key] | keyvalue\" class=\"days-btn\">\n                      <div (click)=\"gotoContent(data.ID,item.key, weeks[item.key][weekDay.key], 'book_content')\">{{weeks[item.key][weekDay.key]}}</div>\n                    </div>\n                </ion-item>\n              </div>\n            </ion-col>\n\t    </ion-grid>\n\t    \n\t </span>\n\t \n\t   \n  <span *ngIf=\"keyvalue; else memoryData\">\n  <span *ngIf=\"keyvalue == 'memory_verses' && keyvalue != 'leader_notes'\">\n  <section  (click)=\"gotoMemoryVerses(data.ID,'memory_versus')\" class=\"text-center internal-hero ion-align-items-center\" style='background:url(../assets/images/memory-verses.jpg);'>\n    <h3 class=\"span-underline internal-hero-title\"><span>MEMORY VERSES</span> <ion-icon name=\"arrow-forward-sharp\"></ion-icon></h3>\n  </section>\n  </span>\n  </span>\n  <ng-template #memoryData>\n      <section  (click)=\"gotoMemoryVerses(data.ID,'memory_versus')\" class=\"text-center internal-hero ion-align-items-center\" style='background:url(../assets/images/memory-verses.jpg);'>\n        <h3 class=\"span-underline internal-hero-title ion-justify-content-center\"><span>MEMORY VERSES</span> <ion-icon name=\"arrow-forward-sharp\"></ion-icon></h3>\n      </section>\n  </ng-template>\n\t \n<span *ngIf=\"keyvalue; else available\">\t \n  <span *ngIf=\"keyvalue == 'leader_notes' && keyvalue != 'memory_verses'\">\n    <div class=\"main-leader-notes\" *ngIf=\"data\">\n        <section  (click)=\"gotoLeaderNotes(data.ID,'leader_notes')\" class=\"text-center internal-hero\" style='background:url(../assets/images/memory-verses.jpg);'>\n            <h3 class=\"span-underline internal-hero-title\"><span>LEADER NOTES</span> <ion-icon name=\"arrow-forward-sharp\"></ion-icon></h3>\n        </section> \n    </div>\n    </span>\n</span>\n    <ng-template #available>\n        <div class=\"main-leader-notes\" *ngIf=\"data\">\n            <section  (click)=\"gotoLeaderNotes(data.ID,'leader_notes')\" class=\"text-center internal-hero\" style='background:url(../assets/images/memory-verses.jpg);'>\n                <h3 class=\"span-underline internal-hero-title\"><span>LEADER NOTES</span> <ion-icon name=\"arrow-forward-sharp\"></ion-icon></h3>\n            </section> \n        </div>\n    </ng-template>\n  \n       <!---ion-col padding>\n          <div class=\"main-leader-notes\" *ngIf=\"data\">\n           \n              <h6 (click)=\"gotoLeaderNotes(data.ID,'leader_notes')\">Leader Notes</h6>\n              </div>\n  \n            <img [src]=\"data.thumbnail_url\"> \n            </ion-col-->\n  \n\n\n  <!---section class=\"main-memory-verses\" *ngIf=\"data\">\n    <ion-col class=\"detail-hero-info\" padding>\n      <ion-label (click)=\"gotoMemoryVerses(data.ID,'memory_versus')\">Memory Verses</ion-label>\n    </ion-col>\n  </section-->\n  \n  \n  <!-- <button ion-button color=\"light\" round>GO</button> -->\n\n\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/resource-detail/resource-detail-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/resource-detail/resource-detail-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ResourceDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDetailPageRoutingModule", function() { return ResourceDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _resource_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource-detail.page */ "./src/app/resource-detail/resource-detail.page.ts");




const routes = [
    {
        path: '',
        component: _resource_detail_page__WEBPACK_IMPORTED_MODULE_3__["ResourceDetailPage"]
    }
];
let ResourceDetailPageRoutingModule = class ResourceDetailPageRoutingModule {
};
ResourceDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResourceDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/resource-detail/resource-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/resource-detail/resource-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: ResourceDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDetailPageModule", function() { return ResourceDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _resource_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-detail-routing.module */ "./src/app/resource-detail/resource-detail-routing.module.ts");
/* harmony import */ var _resource_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resource-detail.page */ "./src/app/resource-detail/resource-detail.page.ts");







let ResourceDetailPageModule = class ResourceDetailPageModule {
};
ResourceDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resource_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResourceDetailPageRoutingModule"]
        ],
        declarations: [_resource_detail_page__WEBPACK_IMPORTED_MODULE_6__["ResourceDetailPage"]]
    })
], ResourceDetailPageModule);



/***/ }),

/***/ "./src/app/resource-detail/resource-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/resource-detail/resource-detail.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlLWRldGFpbC9yZXNvdXJjZS1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/resource-detail/resource-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/resource-detail/resource-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: ResourceDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDetailPage", function() { return ResourceDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let ResourceDetailPage = class ResourceDetailPage {
    constructor(route, router, http, toastCtrl, LoadingController) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.LoadingController = LoadingController;
        this.url = 'https://disciplefirst.com/';
        this.bookData = JSON.parse(this.route.snapshot.queryParams['post_id']);
        this.filterParams = { "id": this.bookData.id, "select_week": "", "select_day": "", "request_type": "book_content" };
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.presentLoading();
        let post = JSON.parse(this.route.snapshot.queryParams['post_id']);
        this.keyvalue = post.key;
        this.bookid = post.id;
        console.log(this.keyvalue);
        console.log(this.bookid);
        this.getProductDetails(post.id).subscribe(res => {
            this.data = res;
            this.weeks = this.data.weeks_array;
            console.log(this.data);
            this.loading.dismiss();
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.LoadingController.create({
                //content: '',
                duration: 5000
            });
            return yield this.loading.present();
        });
    }
    getProductDetails(id) {
        const route = this.url + 'wp-json/disciplefirst2019-child/v1/' + `book-details/${id}`;
        return this.http.post(route, JSON.stringify(id), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(post => {
            //console.log(post);
            return post;
        }));
    }
    filterBookContent() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.filterParams);
            if (this.filterParams.id != '' && this.filterParams.select_week != '' && this.filterParams.select_day != '') {
                let navigationExtras = {
                    queryParams: {
                        book_content: JSON.stringify(this.filterParams)
                    }
                };
                this.router.navigate(['resource-single-content'], navigationExtras);
            }
            else {
                console.log("Data not found");
                let toast = yield this.toastCtrl.create({
                    message: 'Data not found',
                    duration: 3000,
                    position: 'bottom'
                });
                return yield toast.present();
            }
        });
    }
    gotoContent(id, week, day, request_type) {
        //console.log(week, day, request_type);
        let pageData = {
            id: id,
            select_week: week,
            select_day: day,
            request_type: request_type
        };
        let navigationExtras = {
            queryParams: {
                book_content: JSON.stringify(pageData)
            }
        };
        this.router.navigate(['resource-single-content'], navigationExtras);
        //this.router.navigate(['resource-single-content',{id:id, week:week, day:day, request_type:request_type}])
    }
    gotoMemoryVerses(id, request_type) {
        //console.log(id,request_type);
        let pageData = {
            id: id,
            request_type: request_type
        };
        let navigationExtras = {
            queryParams: {
                memory_verses: JSON.stringify(pageData)
            }
        };
        this.router.navigate(['memory-verses'], navigationExtras);
    }
    gotoLeaderNotes(id, request_type) {
        //console.log(id,request_type);
        let pageData = {
            id: id,
            request_type: request_type
        };
        let navigationExtras = {
            queryParams: {
                leader_notes: JSON.stringify(pageData)
            }
        };
        this.router.navigate(['leader-notes'], navigationExtras);
    }
    ngOnInit() {
    }
};
ResourceDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
ResourceDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resource-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resource-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resource-detail/resource-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resource-detail.page.scss */ "./src/app/resource-detail/resource-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], ResourceDetailPage);



/***/ })

}]);
//# sourceMappingURL=resource-detail-resource-detail-module-es2015.js.map