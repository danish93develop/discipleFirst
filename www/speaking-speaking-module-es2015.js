(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["speaking-speaking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/speaking/speaking.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/speaking/speaking.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>.internal-header .toolbar-container{padding-top:15px !important;padding-bottom:15px !important}</style>\n<!-- Back button with a default href -->\n<ion-header  class=\"internal-header ion-align-items-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n\t  \n    </ion-buttons>\n\t    <ion-title><img class=\"logo\" src=\"../assets/images/logo.svg\"></ion-title>\n\t\t  <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\" color=\"light\">\n    \n\n<section  class=\"text-center internal-hero ion-align-items-center\" style='background:url(../assets/images/contact-us-banner.jpg)'>\n    <h3 class=\"span-underline internal-hero-title\"><span>Speaking Request\n</span></h3>\n  </section>\n  \n\n    <div class=\"px-1 py-1\">\n        \n      <h5>SPEAKING REQUEST FOR PASTOR CRAIG</h5>  \n      <p>Thank you for your interest in Pastor Craig’s availability at your upcoming event. It is a privilege that you would allow Craig to serve alongside you in the ministry of encouraging others towards following Jesus’ call to make disciples.\n\nDue to his desire to lead his family and First Colleyville well, Craig is not able to accept all of the invitations he receives. Each request will be evaluated to make sure that his obligations to family and church come first. A few parameters our team has developed to aid in protecting Craig’s role as Lead Pastor of First Colleyville are:</p>\n\n<ul class=\"custom-list\">\n<li>In order to protect his time and obligations at First Colleyville, Craig seldom speaks on Sundays.</li>\n<li>In order to maximize his time away from home and the church, Craig prioritizes events that fit within discipleFIRST’s process of Forums and Cohorts.</li>\n<li>If the event requires multiple days we would love to explore as many opportunities for Craig to encourage as many leaders as possible while he is traveling.</li>\n<li>It is the position of the leaders of discipleFIRST that Craig will not travel alone. So, either his wife, Liz, or a member of the discipleFIRST team will accompany him.</li>\n<li>For all speaking engagements discipleFIRST requires that Craig’s Travel &amp; Incidental expenses (also Liz’s if she accompanies him) be reimbursed.</li>\n<li>Honorariums for each event would be determined by the invitee. However, other costs may be required for printed items and other expenses, but these would be clearly communicated by discipleFIRST before the event.</li>\n</ul>\n        \n    <p><strong>If you would like to submit a request, please complete the form below. It will be reviewed by the discipleFIRST team, and we will contact you as soon as a decision is made. Thank you!</strong></p>   \n        \n        \n     <!---p class=\"text-center\">Please send us a message using the form below and our staff will contact you shortly. Thank you!</p-->    \n\n    <iframe class=\"ccb-form grow-cohort-form\" src=\"https://disciplefirst.ccbchurch.com/goto/forms/46/responses/new\" style=\"height:600px;width:100%\"></iframe>\n    \n     </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/speaking/speaking-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/speaking/speaking-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SpeakingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakingPageRoutingModule", function() { return SpeakingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _speaking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speaking.page */ "./src/app/speaking/speaking.page.ts");




const routes = [
    {
        path: '',
        component: _speaking_page__WEBPACK_IMPORTED_MODULE_3__["SpeakingPage"]
    }
];
let SpeakingPageRoutingModule = class SpeakingPageRoutingModule {
};
SpeakingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SpeakingPageRoutingModule);



/***/ }),

/***/ "./src/app/speaking/speaking.module.ts":
/*!*********************************************!*\
  !*** ./src/app/speaking/speaking.module.ts ***!
  \*********************************************/
/*! exports provided: SpeakingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakingPageModule", function() { return SpeakingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _speaking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./speaking-routing.module */ "./src/app/speaking/speaking-routing.module.ts");
/* harmony import */ var _speaking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./speaking.page */ "./src/app/speaking/speaking.page.ts");







let SpeakingPageModule = class SpeakingPageModule {
};
SpeakingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _speaking_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpeakingPageRoutingModule"]
        ],
        declarations: [_speaking_page__WEBPACK_IMPORTED_MODULE_6__["SpeakingPage"]]
    })
], SpeakingPageModule);



/***/ }),

/***/ "./src/app/speaking/speaking.page.scss":
/*!*********************************************!*\
  !*** ./src/app/speaking/speaking.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWFraW5nL3NwZWFraW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/speaking/speaking.page.ts":
/*!*******************************************!*\
  !*** ./src/app/speaking/speaking.page.ts ***!
  \*******************************************/
/*! exports provided: SpeakingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakingPage", function() { return SpeakingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpeakingPage = class SpeakingPage {
    constructor() { }
    ngOnInit() {
    }
};
SpeakingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-speaking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./speaking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/speaking/speaking.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./speaking.page.scss */ "./src/app/speaking/speaking.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SpeakingPage);



/***/ })

}]);
//# sourceMappingURL=speaking-speaking-module-es2015.js.map