function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource-single-content-resource-single-content-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resource-single-content/resource-single-content.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resource-single-content/resource-single-content.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResourceSingleContentResourceSingleContentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header  class=\"internal-header ion-align-items-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/resources\"></ion-back-button>\n\t  \n    </ion-buttons>\n\t    <ion-title><img class=\"logo\" src=\"../assets/images/logo.svg\"></ion-title>\n\t\t  <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    \n\n     <section  class=\"text-center internal-hero resource-detail-hero\" [style.backgroundImage]=\"'url(' + data.thumbnail_url + ')'\" *ngIf=\"data\">\n    <h3 class=\"internal-hero-title\"><span [innerHTML]=\"data?.post_title\"></span></h3>\n      </section>\n \n\t<ion-grid class=\"blog-detail\" >\t \n    <ion-col>\n        <div  class=\"px-1\">\n         <ion-label ><span [innerHTML]=\"data?.post_title\"></span> | {{weekData}} | {{dayData}}</ion-label>\n         \n        <div [innerHTML]=\"data?.request_content\" padding class=\"verses-detailed-content ion-padding-top\"></div>\n      </div>\n    </ion-col>\n  </ion-grid>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/resource-single-content/resource-single-content-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/resource-single-content/resource-single-content-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ResourceSingleContentPageRoutingModule */

  /***/
  function srcAppResourceSingleContentResourceSingleContentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceSingleContentPageRoutingModule", function () {
      return ResourceSingleContentPageRoutingModule;
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


    var _resource_single_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resource-single-content.page */
    "./src/app/resource-single-content/resource-single-content.page.ts");

    var routes = [{
      path: '',
      component: _resource_single_content_page__WEBPACK_IMPORTED_MODULE_3__["ResourceSingleContentPage"]
    }];

    var ResourceSingleContentPageRoutingModule = function ResourceSingleContentPageRoutingModule() {
      _classCallCheck(this, ResourceSingleContentPageRoutingModule);
    };

    ResourceSingleContentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResourceSingleContentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/resource-single-content/resource-single-content.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/resource-single-content/resource-single-content.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ResourceSingleContentPageModule */

  /***/
  function srcAppResourceSingleContentResourceSingleContentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceSingleContentPageModule", function () {
      return ResourceSingleContentPageModule;
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


    var _resource_single_content_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resource-single-content-routing.module */
    "./src/app/resource-single-content/resource-single-content-routing.module.ts");
    /* harmony import */


    var _resource_single_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./resource-single-content.page */
    "./src/app/resource-single-content/resource-single-content.page.ts");

    var ResourceSingleContentPageModule = function ResourceSingleContentPageModule() {
      _classCallCheck(this, ResourceSingleContentPageModule);
    };

    ResourceSingleContentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resource_single_content_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResourceSingleContentPageRoutingModule"]],
      declarations: [_resource_single_content_page__WEBPACK_IMPORTED_MODULE_6__["ResourceSingleContentPage"]]
    })], ResourceSingleContentPageModule);
    /***/
  },

  /***/
  "./src/app/resource-single-content/resource-single-content.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/resource-single-content/resource-single-content.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResourceSingleContentResourceSingleContentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlLXNpbmdsZS1jb250ZW50L3Jlc291cmNlLXNpbmdsZS1jb250ZW50LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/resource-single-content/resource-single-content.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/resource-single-content/resource-single-content.page.ts ***!
    \*************************************************************************/

  /*! exports provided: ResourceSingleContentPage */

  /***/
  function srcAppResourceSingleContentResourceSingleContentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceSingleContentPage", function () {
      return ResourceSingleContentPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ResourceSingleContentPage = /*#__PURE__*/function () {
      function ResourceSingleContentPage(route, router, http, LoadingController) {
        var _this = this;

        _classCallCheck(this, ResourceSingleContentPage);

        this.route = route;
        this.router = router;
        this.http = http;
        this.LoadingController = LoadingController;
        this.url = 'https://disciplefirst.com/'; // Http Options

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'content-type': "application/x-www-form-urlencoded"
          })
        };
        this.presentLoading();
        var data = JSON.parse(this.route.snapshot.queryParams['book_content']);
        var id = data.id;
        this.weekData = data.select_week;
        this.dayData = data.select_day;
        console.log(data.select_week);
        console.log(data.select_day);
        this.getBookContent(data, id).subscribe(function (res) {
          _this.data = res; //console.log(this.data);

          _this.loading.dismiss();
        });
      }

      _createClass(ResourceSingleContentPage, [{
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.LoadingController.create({
                      //content: '',
                      duration: 5000
                    });

                  case 2:
                    this.loading = _context.sent;
                    _context.next = 5;
                    return this.loading.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getBookContent",
        value: function getBookContent(data, id) {
          console.log(data); //let params = { request_type: "book_content", select_week: "Week 2", select_day: "Day 1" };    

          var route = this.url + 'wp-json/disciplefirst2019-child/v1/' + "book-content/".concat(id);
          return this.http.post(route, JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (post) {
            console.log(post);
            return post;
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResourceSingleContentPage;
    }();

    ResourceSingleContentPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }];
    };

    ResourceSingleContentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resource-single-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resource-single-content.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resource-single-content/resource-single-content.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resource-single-content.page.scss */
      "./src/app/resource-single-content/resource-single-content.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])], ResourceSingleContentPage);
    /***/
  }
}]);
//# sourceMappingURL=resource-single-content-resource-single-content-module-es5.js.map