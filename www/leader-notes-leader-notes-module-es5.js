function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leader-notes-leader-notes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/leader-notes/leader-notes.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leader-notes/leader-notes.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLeaderNotesLeaderNotesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header  class=\"internal-header ion-align-items-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/resources\"></ion-back-button>\n\t  \n    </ion-buttons>\n\t    <ion-title><img class=\"logo\" src=\"../assets/images/logo.svg\"></ion-title>\n\t\t  <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n     <section class=\"text-center internal-hero\" style='background:url(../assets/images/memory-verses.jpg);'>\n         <h3 class=\"span-underline internal-hero-title\">\n             <span>LEADER NOTES</span>\n             <!--<ion-icon name=\"arrow-forward-sharp\"></ion-icon>-->\n         </h3>\n         </section> \n\n  <!---section class=\"blog-detail-hero\" *ngIf=\"data\">\n    <img [src]=\"data.thumbnail_url\">\n\t\t<ion-col class=\"detail-hero-info\" padding>\n\t\t\t<ion-label>\n        <h2>Leader Notes</h2>\n\t\t\t</ion-label>\t\t\t\n\t\t</ion-col>   \n\n  </section-->\n\n  <div *ngFor=\"let item of bookData | keyvalue\" class=\"px-1 item-line-before\">\n\n      <ion-label><span>{{item.key}}</span></ion-label>\n      \n    <div [innerHTML] =\"bookData[item.key].leader_notes\" ></div>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/leader-notes/leader-notes-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/leader-notes/leader-notes-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: LeaderNotesPageRoutingModule */

  /***/
  function srcAppLeaderNotesLeaderNotesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaderNotesPageRoutingModule", function () {
      return LeaderNotesPageRoutingModule;
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


    var _leader_notes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./leader-notes.page */
    "./src/app/leader-notes/leader-notes.page.ts");

    var routes = [{
      path: '',
      component: _leader_notes_page__WEBPACK_IMPORTED_MODULE_3__["LeaderNotesPage"]
    }];

    var LeaderNotesPageRoutingModule = function LeaderNotesPageRoutingModule() {
      _classCallCheck(this, LeaderNotesPageRoutingModule);
    };

    LeaderNotesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LeaderNotesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/leader-notes/leader-notes.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/leader-notes/leader-notes.module.ts ***!
    \*****************************************************/

  /*! exports provided: LeaderNotesPageModule */

  /***/
  function srcAppLeaderNotesLeaderNotesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaderNotesPageModule", function () {
      return LeaderNotesPageModule;
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


    var _leader_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./leader-notes-routing.module */
    "./src/app/leader-notes/leader-notes-routing.module.ts");
    /* harmony import */


    var _leader_notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./leader-notes.page */
    "./src/app/leader-notes/leader-notes.page.ts");

    var LeaderNotesPageModule = function LeaderNotesPageModule() {
      _classCallCheck(this, LeaderNotesPageModule);
    };

    LeaderNotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _leader_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeaderNotesPageRoutingModule"]],
      declarations: [_leader_notes_page__WEBPACK_IMPORTED_MODULE_6__["LeaderNotesPage"]]
    })], LeaderNotesPageModule);
    /***/
  },

  /***/
  "./src/app/leader-notes/leader-notes.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/leader-notes/leader-notes.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLeaderNotesLeaderNotesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYWRlci1ub3Rlcy9sZWFkZXItbm90ZXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/leader-notes/leader-notes.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/leader-notes/leader-notes.page.ts ***!
    \***************************************************/

  /*! exports provided: LeaderNotesPage */

  /***/
  function srcAppLeaderNotesLeaderNotesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaderNotesPage", function () {
      return LeaderNotesPage;
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

    var LeaderNotesPage = /*#__PURE__*/function () {
      function LeaderNotesPage(route, router, http, LoadingController) {
        var _this = this;

        _classCallCheck(this, LeaderNotesPage);

        this.route = route;
        this.router = router;
        this.http = http;
        this.LoadingController = LoadingController;
        this.url = 'https://disciplefirst.com/'; // Http Options

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
        this.presentLoading();
        var data = JSON.parse(this.route.snapshot.queryParams['leader_notes']);
        var id = data.id;
        console.log(data);
        this.getLeaderNotes(id).subscribe(function (res) {
          _this.data = res;
          _this.weeks = _this.data.request_content;
          _this.bookData = {};

          _this.weeks.forEach(function (element, index) {
            var day = element.select_day.value;
            var week = element.select_week.value;
            var leaderNotes = element.leader_notes;
            var key = week + " | " + day;
            var temp = {
              day: day,
              week: week,
              leader_notes: leaderNotes
            };
            _this.bookData[key] = temp; // this.bookData.push(element);

            console.log(temp);
          }); //console.log(this.bookData);


          _this.loading.dismiss();
        });
      }

      _createClass(LeaderNotesPage, [{
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
                      duration: 8000
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
        key: "getLeaderNotes",
        value: function getLeaderNotes(id) {
          var route = this.url + 'wp-json/disciplefirst2019-child/v1/' + "book-content/".concat(id);
          return this.http.post(route, JSON.stringify(id), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (post) {
            //console.log(post);
            return post;
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LeaderNotesPage;
    }();

    LeaderNotesPage.ctorParameters = function () {
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

    LeaderNotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-leader-notes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./leader-notes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/leader-notes/leader-notes.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./leader-notes.page.scss */
      "./src/app/leader-notes/leader-notes.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])], LeaderNotesPage);
    /***/
  }
}]);
//# sourceMappingURL=leader-notes-leader-notes-module-es5.js.map