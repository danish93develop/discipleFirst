function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-staff-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/staff.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/staff.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStaffStaffPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>.internal-header .toolbar-container{padding-top:15px !important;padding-bottom:15px !important}</style>\n<!-- Back button with a default href -->\n<ion-header  class=\"internal-header ion-align-items-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n\t  \n    </ion-buttons>\n\t    <ion-title><img class=\"logo\" src=\"../assets/images/logo.svg\"></ion-title>\n\t\t  <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n    \n\n<section  class=\"text-center internal-hero ion-align-items-center\" style='background:url(../assets/images/about-us-banner.jpg)'>\n    <h3 class=\"span-underline internal-hero-title\"><span>Disciple First Staff</span></h3>\n  </section>\n  \n\n    <ion-grid class=\"members\">\n       \n      <ion-row>  \n       <ion-col size=\"3\"><img src=\"https://disciplefirst.com/wp-content/uploads/2018/04/Dee-Crouse2.jpg\"></ion-col>\n         <ion-col size=\"9\">\n             <h5 class=\"my-0\">Dee Crouse</h5>\n             <small>EXECUTIVE DIRECTOR</small>\n             <p>BIO: Dee was called into the DiscipleFIRST ministry after a successful 40-year career in the oil and gas industry.\n             He has been a member of First Colleyville for nearly 30 years and has served in numerous service and leadership capacities. \n             He is a Deacon and also leads a Connect Group class. Dee has a passion for serving and disciple-making and over the years has invested in several small groups to help men, both domestically and abroad, to know and follow Jesus. His heart is to see the disciple-making movement multiply in churches throughout the world. Dee lives in the DFW area and is married to his beautiful wife, \n             Tina, and has four adult children and several grandchildren.</p>\n            </ion-col>   \n        </ion-row> \n        \n        <ion-row>  \n       <ion-col size=\"3\"><img src=\"https://disciplefirst.com/wp-content/uploads/2016/04/Ben-Borgman.jpg\"></ion-col>\n         <ion-col size=\"9\">\n             <h5 class=\"my-0\">Ben Borgman</h5>\n             <small>DIRECTOR OF MINISTRY PARTNERSHIPS AND TRAINING</small>\n             <p>BIO: Ben was called into fulltime ministry after 12 years in the business world. Ben’s passion is to help people be disciples of Jesus Christ and become disciple makers. Ben lives in the DFW area and is a member of First Colleyville where he serves as the teacher for his Connect Group and is a member of the deacon body. Ben has a wife of 15 years, Kari. They have two children Karson and Ally.</p>\n            </ion-col>   \n        </ion-row> \n        \n        <ion-row>  \n       <ion-col size=\"3\"><img src=\"https://disciplefirst.com/wp-content/uploads/2016/04/Keith-Williams2.jpg\"></ion-col>\n         <ion-col size=\"9\">\n             <h5 class=\"my-0\">Keith Williams</h5>\n             <small>DIRECTOR OF TECHNOLOGY AND RESOURCES</small>\n             <p>BIO: Keith was called into full-time ministry starting in 2015 after 26 years in the Corporate Information Technology world. Keith’s passion for missions and disciple-making started in his early college years and continues as he helps others grow in their spiritual walk with Jesus by leading various Bible studies and disciple-making groups. He has been on numerous mission trips across North/Central/South America, Africa, Europe and Asia. Keith lives in the DFW area and is a member of First Colleyville serving as a Deacon & other leadership roles. Keith is a proud great-uncle for 14 times now.</p>\n            </ion-col>   \n        </ion-row> \n        \n        <ion-row>  \n       <ion-col size=\"3\"><img src=\"https://disciplefirst.com/wp-content/uploads/2019/10/BrentParker2.jpg\"></ion-col>\n         <ion-col size=\"9\">\n             <h5 class=\"my-0\">Brent Parker</h5>\n             <small>COACH</small>\n             <p>BIO: Brent was called into pastoral ministry in 2002 and has served as the Lead Pastor of churches in Mississippi & Alabama for over 16 years. Brent takes great delight in teaching people the Word of God, but his primary passion is training disciples to make disciples. Currently living in the Vancleave, Mississippi community, he serves as the Lead Pastor of First Baptist Vancleave. He has a Master's of Divinity from New Orleans Baptist Theological Seminary and a Doctorate of Ministry in Evangelism and Church Growth from Southern Baptist Theological Seminary. Brent has been married to his beautiful wife Jennifer for over 20 years. They have 3 children, Sarah, Anna and Will.</p>\n            </ion-col>   \n        </ion-row> \n        \n        <ion-row>  \n       <ion-col size=\"3\"><img src=\"https://disciplefirst.com/wp-content/uploads/2019/10/Gibson2taller.jpg\"></ion-col>\n         <ion-col size=\"9\">\n             <h5 class=\"my-0\">Gibson Largent</h5>\n             <small>COACH</small>\n             <p>BIO: Gibson Largent is the founding pastor of Ridgeline Church, a plant out of Riverside Community Church, where he served as an associate pastor from 2007-2011. He and his family moved to the Philadelphia area after attending the Southern Baptist Theological Seminary from 2005-2007 in Louisville, Kentucky. He is originally from Norman, Oklahoma. He and Julie have four kids and live in Souderton.</p>\n            </ion-col>   \n        </ion-row> \n         \n          \n          \n     \n         \n          \n    \t</ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/staff/staff-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/staff/staff-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: StaffPageRoutingModule */

  /***/
  function srcAppStaffStaffRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffPageRoutingModule", function () {
      return StaffPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _staff_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./staff.page */
    "./src/app/staff/staff.page.ts");

    var routes = [{
      path: '',
      component: _staff_page__WEBPACK_IMPORTED_MODULE_3__["StaffPage"]
    }];

    var StaffPageRoutingModule = function StaffPageRoutingModule() {
      _classCallCheck(this, StaffPageRoutingModule);
    };

    StaffPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StaffPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/staff/staff.module.ts":
  /*!***************************************!*\
    !*** ./src/app/staff/staff.module.ts ***!
    \***************************************/

  /*! exports provided: StaffPageModule */

  /***/
  function srcAppStaffStaffModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffPageModule", function () {
      return StaffPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _staff_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./staff-routing.module */
    "./src/app/staff/staff-routing.module.ts");
    /* harmony import */


    var _staff_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./staff.page */
    "./src/app/staff/staff.page.ts");

    var StaffPageModule = function StaffPageModule() {
      _classCallCheck(this, StaffPageModule);
    };

    StaffPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _staff_routing_module__WEBPACK_IMPORTED_MODULE_5__["StaffPageRoutingModule"]],
      declarations: [_staff_page__WEBPACK_IMPORTED_MODULE_6__["StaffPage"]]
    })], StaffPageModule);
    /***/
  },

  /***/
  "./src/app/staff/staff.page.scss":
  /*!***************************************!*\
    !*** ./src/app/staff/staff.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppStaffStaffPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL3N0YWZmLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/staff/staff.page.ts":
  /*!*************************************!*\
    !*** ./src/app/staff/staff.page.ts ***!
    \*************************************/

  /*! exports provided: StaffPage */

  /***/
  function srcAppStaffStaffPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffPage", function () {
      return StaffPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StaffPage = /*#__PURE__*/function () {
      function StaffPage() {
        _classCallCheck(this, StaffPage);
      }

      _createClass(StaffPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StaffPage;
    }();

    StaffPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./staff.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/staff.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./staff.page.scss */
      "./src/app/staff/staff.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], StaffPage);
    /***/
  }
}]);
//# sourceMappingURL=staff-staff-module-es5.js.map