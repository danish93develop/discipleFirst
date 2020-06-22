(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["memory-verses-memory-verses-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/memory-verses/memory-verses.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/memory-verses/memory-verses.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"internal-header ion-align-items-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/resources\"></ion-back-button>\n\t  \n    </ion-buttons>\n\t    <ion-title><img class=\"logo\" src=\"../assets/images/logo.svg\"></ion-title>\n\t\t  <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n     <section class=\"text-center internal-hero\" style='background:url(../assets/images/memory-verses.jpg);'>\n         <h3 class=\"span-underline internal-hero-title\">\n             <span>MEMORY VERSE</span>\n             <!--<ion-icon name=\"arrow-forward-sharp\"></ion-icon>-->\n         </h3>\n         </section> \n         \n      <!--    <ion-grid class=\"px-1 jumpto-filters mb-1\"> -->\n      <!--    <ion-row  class=\"ion-align-items-center\"> -->\n      <!--     <ion-col size=\"3\">  <ion-label>Jump to</ion-label></ion-col>-->\n      <!--     <ion-col size=\"3\" style=\"max-width:100%\">-->\n      <!--             <ion-select placeholder=\"Week\">-->\n      <!--            <ion-select-option value=\"f\">Week 1</ion-select-option>-->\n      <!--            <ion-select-option value=\"m\">Week 2</ion-select-option>-->\n      <!--            <ion-select-option value=\"m\">Week 3</ion-select-option>-->\n      <!--            <ion-select-option value=\"m\">Week 4</ion-select-option>-->\n      <!--            <ion-select-option value=\"m\">Week 5</ion-select-option>-->\n      <!--            <ion-select-option value=\"m\">Week 6</ion-select-option>-->\n      <!--            <ion-select-option value=\"m\">Week 7</ion-select-option>-->\n      <!--            </ion-select>-->\n      <!--        </ion-col>  -->\n              \n      <!--      <ion-col size=\"3\">-->\n      <!--             <ion-select placeholder=\"Day\" style=\"max-width:100%\">-->\n      <!--            <ion-select-option value=\"f\">Day 1</ion-select-option>-->\n      <!--            <ion-select-option value=\"m\">Day 2</ion-select-option>-->\n      <!--            <ion-select-option value=\"m\">Day 3</ion-select-option>-->\n      <!--            <ion-select-option value=\"m\">Day 4</ion-select-option>-->\n      <!--            <ion-select-option value=\"m\">Day 5</ion-select-option>-->\n      <!--            <ion-select-option value=\"m\">Day 6</ion-select-option>-->\n      <!--            <ion-select-option value=\"m\">Day 7</ion-select-option>-->\n      <!--            </ion-select>-->\n      <!--        </ion-col>  -->\n      <!--     <ion-col size=\"3\" padding> <ion-button expand=\"block\" color=\"secondary\" size=\"small\">Go</ion-button></ion-col>-->\n      <!--      </ion-row> -->\n    \t <!--</ion-grid>-->\n\n  <!---section class=\"blog-detail-hero\" *ngIf=\"data\">\n    <img [src]=\"data.thumbnail_url\">\n\t\t<ion-col class=\"detail-hero-info\" padding>\n\t\t\t<ion-label>\n        <h2 [innerHTML]=\"data?.post_title\"></h2>\n        <h2>Memory Verses</h2>\n\t\t\t</ion-label>\t\t\t\n\t\t</ion-col>   \n\n  </section-->\n\n  <div *ngIf=\"data\" class=\"px-1 item-line-before\">\n    <ion-label><span [innerHTML]=\"data['post_title']\"></span></ion-label>\n    <div [innerHTML]=\"data['weekly_memory_verses']\"></div>\n  </div> \n  \n  <!-- <div *ngFor=\"let item of bookData | keyvalue\" class=\"px-1 item-line-before\">\n      <ion-label><span [innerHTML]=\"bookData[item.key].book_title\"></span> | {{item.key}}</ion-label>\n    <div [innerHTML] =\"bookData[item.key].memory_verses\" ></div>\n  </div> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/memory-verses/memory-verses-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/memory-verses/memory-verses-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MemoryVersesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryVersesPageRoutingModule", function() { return MemoryVersesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _memory_verses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memory-verses.page */ "./src/app/memory-verses/memory-verses.page.ts");




const routes = [
    {
        path: '',
        component: _memory_verses_page__WEBPACK_IMPORTED_MODULE_3__["MemoryVersesPage"]
    }
];
let MemoryVersesPageRoutingModule = class MemoryVersesPageRoutingModule {
};
MemoryVersesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MemoryVersesPageRoutingModule);



/***/ }),

/***/ "./src/app/memory-verses/memory-verses.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/memory-verses/memory-verses.module.ts ***!
  \*******************************************************/
/*! exports provided: MemoryVersesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryVersesPageModule", function() { return MemoryVersesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _memory_verses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./memory-verses-routing.module */ "./src/app/memory-verses/memory-verses-routing.module.ts");
/* harmony import */ var _memory_verses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./memory-verses.page */ "./src/app/memory-verses/memory-verses.page.ts");







let MemoryVersesPageModule = class MemoryVersesPageModule {
};
MemoryVersesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _memory_verses_routing_module__WEBPACK_IMPORTED_MODULE_5__["MemoryVersesPageRoutingModule"]
        ],
        declarations: [_memory_verses_page__WEBPACK_IMPORTED_MODULE_6__["MemoryVersesPage"]]
    })
], MemoryVersesPageModule);



/***/ }),

/***/ "./src/app/memory-verses/memory-verses.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/memory-verses/memory-verses.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbW9yeS12ZXJzZXMvbWVtb3J5LXZlcnNlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/memory-verses/memory-verses.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/memory-verses/memory-verses.page.ts ***!
  \*****************************************************/
/*! exports provided: MemoryVersesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryVersesPage", function() { return MemoryVersesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let MemoryVersesPage = class MemoryVersesPage {
    constructor(route, router, http, LoadingController) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.LoadingController = LoadingController;
        this.url = 'https://disciplefirst.com/';
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.presentLoading();
        let data = JSON.parse(this.route.snapshot.queryParams['memory_verses']);
        let id = data.id;
        //console.log(data);
        this.getMemoryVerses(id).subscribe(res => {
            this.data = res;
            console.log(this.data['weekly_memory_verses']);
            this.weeks = this.data.request_content;
            this.bookData = {};
            //console.log(this.data);
            this.weeks.forEach((element, index) => {
                let day = element.select_day.value;
                let week = element.select_week.value;
                let memoryVerses = element.memory_verses;
                let key = week + " | " + day;
                let temp = {
                    day: day,
                    week: week,
                    memory_verses: memoryVerses,
                    book_title: this.data.post_title
                };
                this.bookData[key] = temp;
                // this.bookData.push(element);
                // console.log(temp);
                this.loading.dismiss();
            });
            console.log(this.bookData);
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.LoadingController.create({
                //content: '',
                duration: 8000
            });
            return yield this.loading.present();
        });
    }
    getMemoryVerses(id) {
        const route = this.url + 'wp-json/disciplefirst2019-child/v1/' + `book-content/${id}`;
        return this.http.post(route, JSON.stringify(id), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(post => {
            //console.log(post);
            return post;
        }));
    }
    ngOnInit() {
    }
};
MemoryVersesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
MemoryVersesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-memory-verses',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./memory-verses.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/memory-verses/memory-verses.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./memory-verses.page.scss */ "./src/app/memory-verses/memory-verses.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], MemoryVersesPage);



/***/ })

}]);
//# sourceMappingURL=memory-verses-memory-verses-module-es2015.js.map