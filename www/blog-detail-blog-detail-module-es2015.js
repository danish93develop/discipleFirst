(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-detail-blog-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-detail/blog-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-detail/blog-detail.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>.internal-header .toolbar-container{padding-top:15px !important;padding-bottom:15px !important}</style>\n<!-- Back button with a default href -->\n<ion-header  class=\"internal-header ion-align-items-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/blog\"></ion-back-button>\n\t  \n    </ion-buttons>\n\t    <ion-title><img class=\"logo\" src=\"../assets/images/logo.svg\"></ion-title>\n\t\t  <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\t<section class=\"blog-detail-hero\" *ngIf=\"data\">\n\t\t<ion-col class=\"detail-hero-info\" padding>\n\t\t\t<ion-label>\n\t\t\t<ion-text color=\"light\"><h2 [innerHTML]=\"data?.title.rendered\"></h2></ion-text>\t\t\n\t\t\t<ion-text color=\"light\"><h5>January 3, 2020</h5></ion-text> \n\t\t\t</ion-label>\t\t\t\n\t\t</ion-col>\n\t\t<img [src]=\"data.media_url\" style=\"width:100%\">\n\t</section>\n    \n\t\n\t <ion-grid class=\"blog-detail\">\n\t   <ion-col>\n\t\t<div class='px-1'>\t\t\t\n\t\t\t<p [innerHTML]=\"data?.content.rendered\" class=\"mt-0\"></p>\n\t\t</div>\n\t   </ion-col>\n     \n\t </ion-grid>\n\t\n   \n     \n  \n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/blog-detail/blog-detail-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/blog-detail/blog-detail-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BlogDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailPageRoutingModule", function() { return BlogDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _blog_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-detail.page */ "./src/app/blog-detail/blog-detail.page.ts");




const routes = [
    {
        path: '',
        component: _blog_detail_page__WEBPACK_IMPORTED_MODULE_3__["BlogDetailPage"]
    }
];
let BlogDetailPageRoutingModule = class BlogDetailPageRoutingModule {
};
BlogDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BlogDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/blog-detail/blog-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.module.ts ***!
  \***************************************************/
/*! exports provided: BlogDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailPageModule", function() { return BlogDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _blog_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-detail-routing.module */ "./src/app/blog-detail/blog-detail-routing.module.ts");
/* harmony import */ var _blog_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-detail.page */ "./src/app/blog-detail/blog-detail.page.ts");







let BlogDetailPageModule = class BlogDetailPageModule {
};
BlogDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _blog_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlogDetailPageRoutingModule"]
        ],
        declarations: [_blog_detail_page__WEBPACK_IMPORTED_MODULE_6__["BlogDetailPage"]]
    })
], BlogDetailPageModule);



/***/ }),

/***/ "./src/app/blog-detail/blog-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctZGV0YWlsL2Jsb2ctZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/blog-detail/blog-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.page.ts ***!
  \*************************************************/
/*! exports provided: BlogDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailPage", function() { return BlogDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let BlogDetailPage = class BlogDetailPage {
    constructor(route, router, http, toastCtrl, LoadingController) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.LoadingController = LoadingController;
        this.url = 'https://disciplefirst.com/';
        //console.log(this.route.snapshot.queryParams['special']);
        let id = this.route.snapshot.queryParams['special'];
        console.log(id);
        this.getPostDetails(id).subscribe(res => {
            this.data = res;
            //console.log(this.data);
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
    getPostDetails(id) {
        this.presentLoading();
        console.log('getPostDetails', id);
        const route = this.url + 'wp-json/wp/v2/' + `posts/${id}?_embed`;
        return this.http.get(route).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(post => {
            post['media_url'] = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
            console.log(post);
            return post;
        }));
    }
    ngOnInit() {
    }
};
BlogDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
BlogDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-detail/blog-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog-detail.page.scss */ "./src/app/blog-detail/blog-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], BlogDetailPage);



/***/ })

}]);
//# sourceMappingURL=blog-detail-blog-detail-module-es2015.js.map