(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"internal-header ion-align-items-center\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\t  \r\n    </ion-buttons>\r\n\t    <ion-title><img class=\"logo\" src=\"../assets/images/logo.svg\"></ion-title>\r\n\t\t  <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"light\" [fullscreen]=\"true\">\r\n    \r\n    \r\n    <ion-grid style=\"height:100%\">\r\n        <ion-row color=\"primary\" class=\"ion-align-items-center\" style=\"height:100%\">\r\n            \r\n          <ion-col>\r\n    \r\n <ion-card class=\"mb-0 login-card\">\r\n    <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\r\n        \r\n      \r\n            <div class=\"text-center span-underline mb-2\"><h3 color=\"dark\"><span>USER LOGIN</span></h3></div>\r\n            \r\n           \r\n              <ion-item>\r\n                  \r\n                <ion-input name=\"username\" type=\"email\" placeholder=\"your@email.com\" ngModel required></ion-input>\r\n              </ion-item>\r\n              \r\n              <ion-item>\r\n                <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\r\n              </ion-item>\r\n          \r\n            <div class=\"ion-padding\">\r\n              <ion-button type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\" color=\"secondary\">Login</ion-button>\r\n              </div>\r\n         \r\n      \r\n    </form>\r\n  </ion-card>\r\n  \r\n   \r\n          </ion-col>\r\n          \r\n        </ion-row>\r\n        \r\n      </ion-grid>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/auth/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/auth/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/auth/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let LoginPage = class LoginPage {
    constructor(activatedRoute, http, Router, toastCtrl, LoadingController) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.Router = Router;
        this.toastCtrl = toastCtrl;
        this.LoadingController = LoadingController;
        this.url = 'https://disciplefirst.com/';
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
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
    login(form) {
        this.presentLoading();
        //console.log(form.value);
        let formData = { "username": form.value.username, "password": form.value.password };
        console.log(formData);
        const route = this.url + 'wp-json/disciplefirst2019-child/v1/authenticate';
        return this.http.post(route, JSON.stringify(formData), this.httpOptions).subscribe(res => {
            this.responseData = res;
            //console.log(this.responseData);
            localStorage.setItem('userData', JSON.stringify(this.responseData));
            console.log(JSON.parse(localStorage.getItem('userData')));
            //console.log(this.responseData.ID);
            this.Router.navigate(['home']).then(() => {
                window.location.reload();
            });
            this.loading.dismiss();
        }, error => {
            this.presentToast("Username/Password incorrect");
            //alert("Username/Password incorrect");
            this.loading.dismiss();
        });
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'bottom',
                cssClass: 'normal-toast'
            });
            toast.present();
        });
    }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module-es2015.js.map