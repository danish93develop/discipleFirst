(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resources-resources-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resources/resources.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resources/resources.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>.internal-header .toolbar-container{padding-top:15px !important;padding-bottom:15px !important}</style>\n\n<!-- Back button with a default href -->\n<ion-header  class=\"internal-header ion-align-items-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n\t  \n    </ion-buttons>\n\t    <ion-title><img class=\"logo\" src=\"../assets/images/logo.svg\"></ion-title>\n\t\t  <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\t<span *ngIf=\"this.key; else changedBackground\">\t\n\t\t<span *ngIf=\"this.key['memory_verses']== 'memory_verses'; else leaderNotesBanner\">\n\t\t\t<section class=\"text-center internal-hero ion-align-items-center\" style='background:url(../assets/images/memory-verses.jpg);'>\n\t\t\t\t<h3 class=\"span-underline internal-hero-title\"><span>MEMORY VERSES</span></h3>\n\t\t\t</section>\n\t\t</span>\n\t\t<ng-template #leaderNotesBanner>\n\t\t\t<section class=\"text-center internal-hero ion-align-items-center\" style='background:url(../assets/images/memory-verses.jpg);'>\n\t\t\t\t<h3 class=\"span-underline internal-hero-title\"><span>LEADER NOTES</span></h3>\n\t\t\t</section>\n\t\t</ng-template>\n\t</span>\n\t<ng-template #changedBackground>\n\t\t<section class=\"text-center internal-hero\" style='background:url(../assets/images/digital-resources.jpg);'>\n\t\t\t<h3 class=\"span-underline internal-hero-title\"><span>DIGITAL RESOURCES</span></h3>\n\t\t</section>\n\t</ng-template>\n\n\t\n\t <ion-grid class=\"resources-grid\">\n\n\t <!--========== Tool BAr ============-->\n\n\t\t<ion-toolbar>\n\t\t\t<span *ngIf=\"this.key; else mainTitle\">\t\n\t\t\t\t<span *ngIf=\"this.key['memory_verses']== 'memory_verses'; else leaderNotesTitle\">\n\t\t\t\t\t<div class=\"ion-text-start px-half\">\n\t\t\t\t\t\t<h5>Click on book below to view Memory Verses</h5>\n\t\t\t\t\t  </div>\n\t\t\t\t</span>\n\t\t\t\t<ng-template #leaderNotesTitle>\t\t\t\t\n\n\t\t\t\t\t<div class=\"ion-text-start px-half\">\n\t\t\t\t\t\t<h5>Click on book below to view Leader Notes</h5>\n\t\t\t\t\t  </div>\n\n\n\t\t\t\t</ng-template>\n\t\t\t</span>\n\t\t\t<ng-template #mainTitle>\t\t\t\n\t\t\t\t<div class=\"ion-text-start px-half\">\n\t\t\t\t\t<h5>Books</h5>\n\t\t\t\t  </div>\n\t\t\t</ng-template>\n\t\t</ion-toolbar>\n\n\t  <!--============= Tool BAr END ==========-->\n\t \n\t    <span *ngIf=\"this.userData\">\n\t\t\t<ion-row *ngFor=\"let item of items\">\n\t\t\t\t<span *ngIf=\"item.show_book == 'yes'\">\n\t\t\t\t\t<span *ngIf=\"item.has_access == true; else lockedbooks\">\n\t\t\t\t\t\t<span *ngIf=\"this.key; else mainPageContent\">\n\t\t\t\t\t\t\t<span *ngIf=\"this.key['memory_verses']== 'memory_verses'; else goToleaderNotesBook\">\n\t\t\t\t\t\t\t\t<ion-row (click)=\"gotoMemoryVerses(item.ID, 'memory_versus')\">\n\t\t\t\t\t\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{item.thumbnail_url}}\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t\t<h2 *ngIf=\"item.post_title\" [innerHTML]=\"item.post_title\"></h2>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.post_excerpt\" [innerHTML]=\"item.post_excerpt\"></p>\n\t\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<ng-template #goToleaderNotesBook>\n\t\t\t\t\t\t\t\t<ion-row (click)=\"gotoLeaderNotes(item.ID,'leader_notes')\">\n\t\t\t\t\t\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{item.thumbnail_url}}\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t\t<h2 *ngIf=\"item.post_title\" [innerHTML]=\"item.post_title\"></h2>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.post_excerpt\" [innerHTML]=\"item.post_excerpt\"></p>\n\t\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<ng-template #mainPageContent>\n\t\t\t\t\t\t\t<ion-row (click)=\"goToProductDetails(item.ID)\">\n\t\t\t\t\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t\t\t\t<img src=\"{{item.thumbnail_url}}\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t<h2 *ngIf=\"item.post_title\" [innerHTML]=\"item.post_title\"></h2>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.post_excerpt\" [innerHTML]=\"item.post_excerpt\"></p>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t\t\n\t\t\t    <ng-template #lockedbooks>\n\t\t\t\t\t<span *ngIf=\"barcodes != null; else lockedBooksAfterLogin\">\n\t\t\t\t\t\t<!-- <span *ngFor=\"let barcode of barcodes\"> -->\n\t\t\t\t\t\t\t<span *ngIf=\"barcodeBookIdMap[item.ID]; else unlockedBooks\">\n\t\t\t\t\t\t\t\t\t<ion-row (click)=\"goToProductDetails(item.ID)\">\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{item.thumbnail_url}}\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 *ngIf=\"item.post_title\" [innerHTML]=\"item.post_title\"></h2>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.post_excerpt\" [innerHTML]=\"item.post_excerpt\"></p>\n\t\t\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<ng-template #unlockedBooks>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<ion-row class=\"locked\" (click)=\"scanBarcode()\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"lock text-center ion-text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"lock-closed-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t<ion-text color=\"light\"> Scan Barcode to unlock.</ion-text>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{item.thumbnail_url}}\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 *ngIf=\"item.post_title\" [innerHTML]=\"item.post_title\"></h2>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.post_excerpt\" [innerHTML]=\"item.post_excerpt\"></p>\n\t\t\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<!-- </span> -->\n\t\t\t\t\t\t<ng-template #lockedBooksAfterLogin>\n\t\t\t\t\t\t\t<ion-row class=\"locked\" (click)=\"scanBarcode()\">\n\t\t\t\t\t\t\t\t<div class=\"lock text-center ion-text-center\">\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"lock-closed-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t<ion-text color=\"light\"> Scan Barcode to unlock.</ion-text>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{item.thumbnail_url}}\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t\t<h2 *ngIf=\"item.post_title\" [innerHTML]=\"item.post_title\"></h2>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.post_excerpt\" [innerHTML]=\"item.post_excerpt\"></p>\n\t\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ng-template>\n    \t\t\t\t</ng-template>\n\t\t\t\t\t\n\t\t\t</ion-row>\n\n\t\t\t<!--<ion-infinite-scroll (ionInfinite)=\"loadMore($event)\">-->\n\t\t\t<!--\t<ion-infinite-scroll-content></ion-infinite-scroll-content>-->\n\t\t\t<!--  </ion-infinite-scroll>-->\n\t\t</span>\n\t\t\n\n\t\t<!-- <ng-template #notavailable> -->\n\t\t\t<span *ngIf=\"!this.userData\">\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t<div *ngFor=\"let item of items\" class=\"locked\" >\n\t\t\t\t\t<span *ngIf=\"barcodes != null; else booksWithoutScan\">\n\t\t\t\t\t\t<!-- <span *ngFor=\"let barcode of barcodes\"> -->\n\t\t\t\t\t\t\t<span *ngIf=\"item.show_book == 'yes'\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"barcodeBookIdMap[item.ID]; else lockedBooks\" class=\"inloop\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<span (click)=\"goToProductDetails(item.ID)\">\n\t\t\t\t\t\t\t\t\t\t<ion-row class=\"locked\" >\n\t\t\t\t\t\t\t\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{item.thumbnail_url}}\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h2 *ngIf=\"item.post_title\" [innerHTML]=\"item.post_title\"></h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.post_excerpt\" [innerHTML]=\"item.post_excerpt\"></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\n                                        </ion-row>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<ng-template #lockedBooks>\n\t\t\t\t\t\t\t\t\t<span  (click)=\"scanBarcode()\" class=\"scannedloop\">\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<ion-row class=\"locked\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"lock text-center ion-text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"lock-closed-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-text color=\"light\"> Scan Barcode to unlock.</ion-text>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{item.thumbnail_url}}\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h2 *ngIf=\"item.post_title\" [innerHTML]=\"item.post_title\"></h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.post_excerpt\" [innerHTML]=\"item.post_excerpt\"></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<!-- </span> -->\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<ng-template #booksWithoutScan>\n\t\t\t\t\t\t<span *ngIf=\"item.show_book == 'yes'\" (click)=\"scanBarcode()\" class=\"withoutscan\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ion-row class=\"locked\">\n\t\t\t\t\t\t\t\t<div class=\"lock text-center ion-text-center\">\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"lock-closed-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t<ion-text color=\"light\"> Scan Barcode to unlock.</ion-text>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t\t\t\t<img src=\"{{item.thumbnail_url}}\">\t\t\t\t\t\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t<h2 *ngIf=\"item.post_title\" [innerHTML]=\"item.post_title\"></h2>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.post_excerpt\" [innerHTML]=\"item.post_excerpt\"></p>\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t</span>\n\t\t\n\n\t\t<!-- </ng-template> -->\n\t\t\n\t\t\n\t    \n\t </ion-grid>\n\t\n   \n     \n  \n  \n</ion-content>\n\n\n\n  \n  \n\n");

/***/ }),

/***/ "./src/app/resources/resources-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/resources/resources-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ResourcesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPageRoutingModule", function() { return ResourcesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _resources_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources.page */ "./src/app/resources/resources.page.ts");




const routes = [
    {
        path: '',
        component: _resources_page__WEBPACK_IMPORTED_MODULE_3__["ResourcesPage"]
    }
];
let ResourcesPageRoutingModule = class ResourcesPageRoutingModule {
};
ResourcesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResourcesPageRoutingModule);



/***/ }),

/***/ "./src/app/resources/resources.module.ts":
/*!***********************************************!*\
  !*** ./src/app/resources/resources.module.ts ***!
  \***********************************************/
/*! exports provided: ResourcesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPageModule", function() { return ResourcesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _resources_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources-routing.module */ "./src/app/resources/resources-routing.module.ts");
/* harmony import */ var _resources_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources.page */ "./src/app/resources/resources.page.ts");







let ResourcesPageModule = class ResourcesPageModule {
};
ResourcesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resources_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResourcesPageRoutingModule"]
        ],
        declarations: [_resources_page__WEBPACK_IMPORTED_MODULE_6__["ResourcesPage"]]
    })
], ResourcesPageModule);



/***/ }),

/***/ "./src/app/resources/resources.page.scss":
/*!***********************************************!*\
  !*** ./src/app/resources/resources.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".resources-grid ion-label p {\n  padding: 5px 0; }\n\n.resources-detail-hero {\n  position: relative; }\n\n.resources-hero-info {\n  position: absolute;\n  bottom: 0;\n  padding: 20px 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2VzL0M6XFxkaXNjaXBsZUZpcnN0L3NyY1xcYXBwXFxyZXNvdXJjZXNcXHJlc291cmNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBNEIsY0FBYSxFQUFBOztBQUN6QztFQUF1QixrQkFBaUIsRUFBQTs7QUFDeEM7RUFBcUIsa0JBQWlCO0VBQUMsU0FBUztFQUFDLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVzb3VyY2VzL3Jlc291cmNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzb3VyY2VzLWdyaWQgaW9uLWxhYmVsIHB7cGFkZGluZzo1cHggMH1cclxuLnJlc291cmNlcy1kZXRhaWwtaGVyb3twb3NpdGlvbjpyZWxhdGl2ZTt9XHJcbi5yZXNvdXJjZXMtaGVyby1pbmZve3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTogMDtwYWRkaW5nOiAyMHB4IDE1cHg7fSJdfQ== */");

/***/ }),

/***/ "./src/app/resources/resources.page.ts":
/*!*********************************************!*\
  !*** ./src/app/resources/resources.page.ts ***!
  \*********************************************/
/*! exports provided: ResourcesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPage", function() { return ResourcesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");








let ResourcesPage = class ResourcesPage {
    constructor(activatedRoute, http, Router, toastCtrl, LoadingController, navCtrl, barcodeScanner) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.Router = Router;
        this.toastCtrl = toastCtrl;
        this.LoadingController = LoadingController;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.url = 'https://disciplefirst.com/';
        this.items = [];
        this.page = 1;
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.barcodes = JSON.parse(localStorage.getItem('bookBarcodes'));
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(this.userData);
        console.log(this.barcodes);
        let bookIdmap = {};
        if (this.barcodes) {
            for (var i = 0; i < this.barcodes.length; i++) {
                bookIdmap[this.barcodes[i]['bookId']] = this.barcodes[i];
                console.log(this.barcodes[i].bookId);
            }
        }
        this.barcodeBookIdMap = bookIdmap;
        console.log(bookIdmap, this.barcodeBookIdMap);
        this.barcodeScannerOptions = {
            showTorchButton: true,
            showFlipCameraButton: true
        };
        if (this.userData) {
            this.loadProductbyUserId({ "user_id": this.userData.ID }).subscribe(res => {
                this.items = res;
                console.log(this.items);
                this.loading.dismiss();
            });
        }
        else {
            this.loadProduct(this.url, this.page, true);
        }
    }
    getBookByBarcode(barcodeInfo) {
        barcodeInfo = JSON.parse(barcodeInfo);
        console.log(barcodeInfo);
        let book_barcode = { "book_bar_code": barcodeInfo['text'] };
        let barcodes = JSON.parse(localStorage.getItem('bookBarcodes'));
        if (barcodes) {
            let map = {};
            for (var i = 0; i < barcodes.length; i++) {
                map[barcodes[i]['text']] = barcodes[i];
            }
            barcodes = map;
            if (barcodes[barcodeInfo['text']] == undefined) {
                this.presentLoading();
                const route = this.url + 'wp-json/disciplefirst2019-child/v1/verify-barcode/';
                return this.http.post(route, JSON.stringify(book_barcode), this.httpOptions).subscribe(res => {
                    this.scannedBook = res;
                    this.bookID = this.scannedBook[0].ID;
                    console.log("BookID from API=" + this.bookID);
                    if (res) {
                        barcodes = Object.values(map);
                        barcodeInfo.bookId = this.bookID;
                        barcodes.push(barcodeInfo);
                        localStorage.setItem('bookBarcodes', JSON.stringify(barcodes));
                        this.goToProductDetails(this.bookID);
                    }
                }, error => {
                    alert("Invalid Barcode");
                });
            }
            else {
                let bookID = barcodes[barcodeInfo['text']]['bookId'];
                this.goToProductDetails(bookID);
            }
        }
        else {
            this.presentLoading();
            const route = this.url + 'wp-json/disciplefirst2019-child/v1/verify-barcode/';
            return this.http.post(route, JSON.stringify(book_barcode), this.httpOptions).subscribe(res => {
                this.scannedBook = res;
                this.bookID = this.scannedBook[0].ID;
                console.log("BookID from API=" + this.bookID);
                if (res) {
                    let temp = [];
                    barcodeInfo.bookId = this.bookID;
                    temp.push(barcodeInfo);
                    localStorage.setItem(`bookBarcodes`, JSON.stringify(temp));
                }
                this.goToProductDetails(this.bookID);
            }, error => {
                alert("Invalid Barcode");
            });
        }
    }
    scanBarcode() {
        this.barcodeScanner.scan().then(barcodeData => {
            //alert("Barcode data " + JSON.stringify(barcodeData));
            this.scannedData = barcodeData;
            // this.getBookByBarcode('{"text":"9780999343913", "format":"QR_CODE","cancelled":false}');
            this.getBookByBarcode(JSON.stringify(barcodeData));
        })
            .catch(err => {
            console.log("Error", err);
        });
    }
    scanToUnlock() {
        alert("Scan Barcode To Unlock Book");
    }
    loadProductbyUserId(id) {
        this.presentLoading();
        const route = this.url + 'wp-json/disciplefirst2019-child/v1/books-listing/';
        return this.http.post(route, JSON.stringify(id), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(post => {
            //console.log(post);
            return post;
        }));
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.LoadingController.create({
                //content: '',
                duration: 7000
            });
            return yield this.loading.present();
        });
    }
    loadProduct(url, page, showLoading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.LoadingController.create({
                message: ''
            });
            if (showLoading) {
                yield loading.present();
            }
            const route = this.url + 'wp-json/disciplefirst2019-child/v1/books-listing/';
            if (!page) {
                page = '1';
            }
            return new Promise((resolve, reject) => {
                var concat;
                if (url.indexOf('?') > 0) {
                    concat = '&';
                }
                else {
                    concat = '?';
                }
                this.http.post(route + concat, 'page=' + page)
                    .subscribe(data => {
                    if (showLoading) {
                        loading.dismiss();
                    }
                    this.items = data;
                    console.log(this.items);
                    resolve(this.items);
                }, error => {
                    if (showLoading) {
                        loading.dismiss();
                    }
                    reject(error);
                    this.presentToast(error.error.message);
                });
            });
        });
    }
    doRefresh(event) {
        this.loadProduct(this.url, 1, false).then(() => {
            event.target.complete();
        }).catch(() => {
            event.target.complete();
        });
    }
    loadMore(event) {
        this.page++;
        //console.log(this.page++);
        this.loadProduct(this.url, this.page, false).then(() => {
            event.target.complete();
        }).catch(() => {
            event.target.complete();
        });
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                duration: 4000,
                position: 'bottom',
                cssClass: 'normal-toast'
            });
            toast.present();
        });
    }
    goToProductDetails(postid) {
        //console.log(this.key.memory_verses);
        if (this.key) {
            let postData = {
                id: postid,
                key: this.key.memory_verses
            };
            let navigationExtras = {
                queryParams: {
                    post_id: JSON.stringify(postData)
                }
            };
            this.Router.navigate(['resource-detail'], navigationExtras);
        }
        else {
            console.log('bb');
            let postData = {
                id: postid
            };
            let navigationExtras = {
                queryParams: {
                    post_id: JSON.stringify(postData)
                }
            };
            this.Router.navigate(['resource-detail'], navigationExtras);
        }
        //console.log(navigationExtras);
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
        this.Router.navigate(['memory-verses'], navigationExtras);
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
        this.Router.navigate(['leader-notes'], navigationExtras);
    }
    gotoLogin() {
        this.Router.navigate(['login']);
    }
    ngOnInit() {
        if (this.activatedRoute.snapshot.queryParams['key']) {
            this.key = JSON.parse(this.activatedRoute.snapshot.queryParams['key']);
            console.log(this.key);
        }
    }
};
ResourcesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"] }
];
ResourcesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resources',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resources.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resources/resources.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resources.page.scss */ "./src/app/resources/resources.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"]])
], ResourcesPage);



/***/ })

}]);
//# sourceMappingURL=resources-resources-module-es2015.js.map