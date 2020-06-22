function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogBlogPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>.internal-header .toolbar-container{padding-top:15px !important;padding-bottom:15px !important}</style>\n<!-- Back button with a default href -->\n<ion-header  class=\"internal-header ion-align-items-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\t  \n    </ion-buttons>\n\t    <ion-title><img class=\"logo\" src=\"../assets/images/logo.svg\"></ion-title>\n\t\t  <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <section class=\"text-center internal-hero\" style='background:url(../assets/images/blog-bg.jpg);'>\n    <h3 class=\"span-underline internal-hero-title\"><span>READ THE BLOG</span></h3>\n  </section>      \n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n    \n     <ion-grid class=\"blog-grid\">\t \n     \n         <ion-toolbar> \n          <ion-row class=\"ion-align-items-center\">\n           <ion-col size=\"9\"><ion-label><h2 class=\"my-0\">Blog Posts</h2></ion-label></ion-col>\n            <!---ion-col size=\"3\">\n              <ion-select ok-text=\"Okay\" cancel-text=\"Nah\">\n                <ion-select-option value=\"dos\">Sort By</ion-select-option>\n                <ion-select-option value=\"lunix\">Blog Notification</ion-select-option>\n                <ion-select-option value=\"mac7\">Search Blog</ion-select-option>                \n              </ion-select>\n            </ion-col-->\t\n          </ion-row>\n          </ion-toolbar> \n     \n          <ion-row *ngFor=\"let item of items\" (click)=\"goToPostDetails(item.id)\">\n           <ion-col size=\"5\">\n             <!-- <img src=\"../assets/images/default-placeholder.png\"> -->\n             <img src=\"{{item.jetpack_featured_media_url}}\" >\n           </ion-col>\n           <ion-col size=\"7\">\n               <ion-label>\n              <h2 *ngIf=\"item.title && item.title.rendered\" [innerHTML]=\"item.title.rendered\"></h2>\n              <p *ngIf=\"item.excerpt && item.excerpt.rendered\" [innerHTML]=\"item.excerpt.rendered\"></p>\t\t\t                            \n              <small>{{ item.date_gmt | date }}</small>\n              </ion-label>\n              \n            </ion-col>\t\t\n          </ion-row>\n\n     </ion-grid>  \n     \n     <!--<ion-button expand=\"block\" color=\"secondary\" size=\"medium\" (click)=\"loadMore($event)\" >Load More</ion-button>-->\n\n     <ion-infinite-scroll (ionInfinite)=\"loadMore($event)\">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    \n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/blog/blog-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/blog/blog-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: BlogPageRoutingModule */

  /***/
  function srcAppBlogBlogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPageRoutingModule", function () {
      return BlogPageRoutingModule;
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


    var _blog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog.page */
    "./src/app/blog/blog.page.ts");

    var routes = [{
      path: '',
      component: _blog_page__WEBPACK_IMPORTED_MODULE_3__["BlogPage"]
    }];

    var BlogPageRoutingModule = function BlogPageRoutingModule() {
      _classCallCheck(this, BlogPageRoutingModule);
    };

    BlogPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BlogPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/blog/blog.module.ts":
  /*!*************************************!*\
    !*** ./src/app/blog/blog.module.ts ***!
    \*************************************/

  /*! exports provided: BlogPageModule */

  /***/
  function srcAppBlogBlogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPageModule", function () {
      return BlogPageModule;
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


    var _blog_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blog-routing.module */
    "./src/app/blog/blog-routing.module.ts");
    /* harmony import */


    var _blog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blog.page */
    "./src/app/blog/blog.page.ts");

    var BlogPageModule = function BlogPageModule() {
      _classCallCheck(this, BlogPageModule);
    };

    BlogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlogPageRoutingModule"]],
      declarations: [_blog_page__WEBPACK_IMPORTED_MODULE_6__["BlogPage"]]
    })], BlogPageModule);
    /***/
  },

  /***/
  "./src/app/blog/blog.page.scss":
  /*!*************************************!*\
    !*** ./src/app/blog/blog.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogBlogPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blog-grid ion-label p {\n  padding: 5px 0; }\n\n.blog-detail-hero {\n  position: relative; }\n\n.detail-hero-info {\n  position: absolute;\n  bottom: 0;\n  padding: 20px 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9DOlxcZGlzY2lwbGVGaXJzdC9zcmNcXGFwcFxcYmxvZ1xcYmxvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBdUIsY0FBYSxFQUFBOztBQUNwQztFQUFrQixrQkFBaUIsRUFBQTs7QUFDbkM7RUFBa0Isa0JBQWlCO0VBQUMsU0FBUztFQUFDLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLWdyaWQgaW9uLWxhYmVsIHB7cGFkZGluZzo1cHggMH1cclxuLmJsb2ctZGV0YWlsLWhlcm97cG9zaXRpb246cmVsYXRpdmU7fVxyXG4uZGV0YWlsLWhlcm8taW5mb3twb3NpdGlvbjphYnNvbHV0ZTtib3R0b206IDA7cGFkZGluZzogMjBweCAxNXB4O30iXX0= */";
    /***/
  },

  /***/
  "./src/app/blog/blog.page.ts":
  /*!***********************************!*\
    !*** ./src/app/blog/blog.page.ts ***!
    \***********************************/

  /*! exports provided: BlogPage */

  /***/
  function srcAppBlogBlogPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPage", function () {
      return BlogPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var BlogPage = /*#__PURE__*/function () {
      function BlogPage(activatedRoute, http, Router, toastCtrl, loadingController, navCtrl) {
        _classCallCheck(this, BlogPage);

        this.activatedRoute = activatedRoute;
        this.http = http;
        this.Router = Router;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.url = 'https://disciplefirst.com/';
        this.items = [];
        this.page = 1;
        this.loadPost(this.url, this.page, true);
      }

      _createClass(BlogPage, [{
        key: "loadPost",
        value: function loadPost(url, page, showLoading) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading, route;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: ''
                    });

                  case 2:
                    loading = _context.sent;

                    if (!showLoading) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 6;
                    return loading.present();

                  case 6:
                    route = this.url + 'wp-json/wp/v2/posts'; // set pagination

                    if (!page) {
                      page = '1';
                    }

                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      var concat; // check if url already has a query param

                      if (url.indexOf('?') > 0) {
                        concat = '&';
                      } else {
                        concat = '?';
                      }

                      _this.http.get(route + concat + 'page=' + page).subscribe(function (data) {
                        if (showLoading) {
                          loading.dismiss();
                        }

                        console.log(_this.items);
                        _this.items = _this.items.concat(data);
                        resolve(_this.items);
                      }, function (error) {
                        if (showLoading) {
                          loading.dismiss();
                        }

                        reject(error);

                        _this.presentToast(error.error.message);
                      });
                    }));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.loadPost(this.url, 1, false).then(function () {
            event.target.complete();
          })["catch"](function () {
            event.target.complete();
          });
        }
      }, {
        key: "loadMore",
        value: function loadMore(event) {
          this.page++;
          this.loadPost(this.url, this.page, false).then(function () {
            event.target.complete();
          })["catch"](function () {
            event.target.complete();
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 3000,
                      position: 'bottom',
                      cssClass: 'normal-toast'
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "goToPostDetails",
        value: function goToPostDetails(post) {
          //alert(post);
          var navigationExtras = {
            queryParams: {
              special: JSON.stringify(post)
            }
          }; //console.log(navigationExtras);

          this.Router.navigate(['blog-detail'], navigationExtras);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {//this.blog = this.activatedRoute.snapshot.paramMap.get('id');
        }
      }]);

      return BlogPage;
    }();

    BlogPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    BlogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog.page.scss */
      "./src/app/blog/blog.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], BlogPage);
    /***/
  }
}]);
//# sourceMappingURL=blog-blog-module-es5.js.map