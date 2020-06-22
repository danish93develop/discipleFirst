(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>.internal-header .toolbar-container{padding-top:15px !important;padding-bottom:15px !important}</style>\n<!-- Back button with a default href -->\n<ion-header  class=\"internal-header ion-align-items-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n\t  \n    </ion-buttons>\n\t    <ion-title  class=\"text-center\"><img class=\"logo\" src=\"../assets/images/logo.svg\"></ion-title>\n\t\t  <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\">\n\n\t<section class=\"text-center internal-hero\" style='background:url(../assets/images/notifications-bg.jpg);'>\n\t\t<h3 class=\"span-underline internal-hero-title\"><span>CHOOSE NOTIFICATIONS</span></h3>\n\t</section>\n\t\t\n\t\t <ion-grid class=\"blog-grid px-1\">\t \n\t\t \n\t\t\t\t<!-- List Header with Outline Button -->\n\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\n\t\t\t\t\t <ion-col class=\"py-2\"><ion-label><h2 class=\"my-0\">Choose Your Notifications:</h2></ion-label></ion-col>\n\t\t\t\t\t\t\t\n\t\t\t\t\t</ion-row>\n\t\t \n\t\t \n\t\t\t  \t<ion-row class=\"ion-align-items-center\">\n\t\t\t\t \t<ion-col size=\"9\">\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<h2>Daily L.I.S.T.E.N.ing to God</h2>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t \t<ion-col size=\"3\">\n\t\t\t\t\t \t<ion-toggle [(ngModel)]=\"isToggled\" (ngModelChange)=\"notify()\" color=\"success\" color=\"success\"  ></ion-toggle>\n\t\t\t\t\t</ion-col>\t\t\t\t\t \n\t\t\t\t</ion-row>\n\t\t\t\t\n\t\t\t\t <ion-row class=\"ion-align-items-center\">\n\t\t\t\t <ion-col size=\"9\">\n\t\t\t\t\t   <ion-label>\n\t\t\t\t\t\t\t<h2>Daily Memory Verse Notifications</h2>\n\t\t\t\t\t\t\t<!-- <p>Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...</p>\t -->\n\t\t\t\t\t\t  </ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t <ion-col size=\"3\"><ion-toggle [(ngModel)]=\"isMemoryVerse\" (ionChange)=\"notifyMemoryVerse()\" color=\"success\" color=\"success\" checked ></ion-toggle></ion-col>\t\t     \t\t\n\t\t\t\t   </ion-row>\n\t\t\t\t   \n\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\n\t\t\t\t <ion-col size=\"9\">\n\t\t\t\t\t   <ion-label>\n\t\t\t\t\t\t\t<h2>Weekely Notifications</h2>\n\t\t\t\t\t\t\t<!-- <p>Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...</p>\t -->\n\t\t\t\t\t\t  </ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t <ion-col size=\"3\"><ion-toggle [(ngModel)]=\"isWeekly\" (ionChange)=\"notifyWeekly()\" color=\"success\" checked></ion-toggle></ion-col>\t\t     \t\t\n\t\t\t\t   </ion-row>\n\t\t\t\t   \n\t\t\t\t   \n\t\t\t\t<ion-row class=\"ion-align-items-center\">\n\t\t\t\t <ion-col size=\"9\">\n\t\t\t\t\t   <ion-label>\n\t\t\t\t\t\t\t<h2>Weekely Sharing with Grow Group</h2>\n\t\t\t\t\t\t\t<!-- <p>Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...</p>\t -->\n\t\t\t\t\t\t  </ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t <ion-col size=\"3\"><ion-toggle [(ngModel)]=\"isWeeklyGrowGroup\" (ionChange)=\"notifyWeeklyGrowGroup()\" color=\"success\" checked></ion-toggle></ion-col>\t\t     \t\t\n\t\t\t\t</ion-row>\n\t\t\t\t   \n\t\t\t\t   \n\t\t\t\t\t<!-- <ion-row class=\"ion-align-items-center\">\n\t\t\t\t\t   <ion-col class=\"text-center\" size=\"5\" offset=\"1\">\t\t\t\t   \n\t\t\t\t\t\t\t<ion-button expand=\"block\" color=\"success\" fill=\"outline\">ALL OFF</ion-button>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t   <ion-col class=\"text-center\" size=\"5\">\t\t\t\t   \n\t\t\t\t\t\t\t <ion-button color=\"success outline\" expand=\"block\" >ALL ON</ion-button>\n\t\t\t\t\t\t</ion-col>\t     \t\t\n\t\t\t\t   </ion-row> -->\n\t\t\t\t   \n\t\t </ion-grid>\n\t\n\t</ion-content>\n\t");

/***/ }),

/***/ "./src/app/notifications/notifications-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function() { return NotificationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications-routing.module */ "./src/app/notifications/notifications-routing.module.ts");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");







let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");





let NotificationsPage = class NotificationsPage {
    constructor(activatedRoute, toastCtrl, localNotifications) {
        this.activatedRoute = activatedRoute;
        this.toastCtrl = toastCtrl;
        this.localNotifications = localNotifications;
        let isToggledNotification = JSON.parse(localStorage.getItem('firstNotification'));
        console.log(isToggledNotification);
        if (isToggledNotification != null) {
            this.isToggled = true;
        }
        else {
            this.isToggled = false;
        }
        let isMemoryVerseNotification = JSON.parse(localStorage.getItem('secondNotification'));
        console.log(isMemoryVerseNotification);
        if (isMemoryVerseNotification != null) {
            this.isMemoryVerse = true;
        }
        else {
            this.isMemoryVerse = false;
        }
        let isWeeklydNotification = JSON.parse(localStorage.getItem('thirdNotification'));
        console.log(isWeeklydNotification);
        if (isWeeklydNotification != null) {
            this.isWeekly = true;
        }
        else {
            this.isWeekly = false;
        }
        let isWeeklyGrowGroupdNotification = JSON.parse(localStorage.getItem('fourthNotification'));
        console.log(isWeeklyGrowGroupdNotification);
        if (isWeeklyGrowGroupdNotification != null) {
            this.isWeeklyGrowGroup = true;
        }
        else {
            this.isWeeklyGrowGroup = false;
        }
    }
    notify() {
        // this.clickSub = this.localNotifications.on('click').subscribe(data => {
        //   console.log(data);
        // });
        let firstNotify = { "isToggled": this.isToggled };
        if (this.isToggled == true) {
            console.log("Toggled: " + this.isToggled);
            localStorage.setItem('firstNotification', JSON.stringify(firstNotify));
            this.localNotifications.schedule({
                id: Math.floor((Math.random() * 1000)),
                text: 'Have you spent time L.I.S.T.E.N.ing to God through His Word today?',
                data: { secret: 'secret' },
                trigger: { every: { hour: 10, minute: 10 }, count: 1440 }
            });
            this.presentToast("Notification Enabled");
        }
        else {
            console.log("Toggled: " + this.isToggled);
            this.presentToast("Notification Disabled");
            localStorage.removeItem('firstNotification');
        }
    }
    notifyMemoryVerse() {
        let secondNotify = { "isMemoryVerse": this.isMemoryVerse };
        if (this.isMemoryVerse == true) {
            console.log("MemoryVerse: " + this.isMemoryVerse);
            localStorage.setItem('secondNotification', JSON.stringify(secondNotify));
            this.localNotifications.schedule({
                id: Math.floor((Math.random() * 1000)),
                text: 'Have you reviewed your memory verses today?',
                data: { secret: 'secret' },
                trigger: { every: { hour: 11, minute: 0 }, count: 1440 }
            });
            this.presentToast("Notification Enabled");
        }
        else {
            console.log("MemoryVerse: " + this.isMemoryVerse);
            this.presentToast("Notification Disabled");
            localStorage.removeItem('secondNotification');
        }
    }
    notifyWeekly() {
        let thirdNotify = { "isWeekly": this.isWeekly };
        if (this.isWeekly == true) {
            console.log("Weekly: " + this.isWeekly);
            localStorage.setItem('thirdNotification', JSON.stringify(thirdNotify));
            this.localNotifications.schedule([{
                    id: Math.floor((Math.random() * 1000)),
                    text: 'Have you reviewed your “I will…” Statement for this week?',
                    trigger: { 'every': { 'weekday': 1, 'hour': 10, 'minute': 40 }, 'count': 1 }
                },
                {
                    id: Math.floor((Math.random() * 1000)),
                    text: 'Pray for a lost friend',
                    trigger: { 'every': { 'weekday': 1, 'hour': 10, 'minute': 40 }, 'count': 1 }
                },
                {
                    id: Math.floor((Math.random() * 1000)),
                    text: 'Pray for who could be in your next Grow Group',
                    trigger: { 'every': { 'weekday': 1, 'hour': 10, 'minute': 40 }, 'count': 1 }
                },
                {
                    id: Math.floor((Math.random() * 1000)),
                    text: 'Pray for the people on your top five list',
                    trigger: { 'every': { 'weekday': 1, 'hour': 10, 'minute': 40 }, 'count': 1 }
                },
                {
                    id: Math.floor((Math.random() * 1000)),
                    text: 'Express your thankfulness to God throughout your day today',
                    trigger: { 'every': { 'weekday': 1, 'hour': 10, 'minute': 40 }, 'count': 1 }
                }
            ]);
            this.presentToast("Notification Enabled");
        }
        else {
            console.log("Weekly: " + this.isWeekly);
            this.presentToast("Notification Disabled");
            localStorage.removeItem('thirdNotification');
        }
    }
    notifyWeeklyGrowGroup() {
        let fourthNotify = { "isWeeklyGrowGroup": this.isWeeklyGrowGroup };
        if (this.isWeeklyGrowGroup == true) {
            console.log("WeeklyGroup: " + this.isWeeklyGrowGroup);
            localStorage.setItem('fourthNotification', JSON.stringify(fourthNotify));
            this.localNotifications.schedule({
                id: Math.floor((Math.random() * 1000)),
                text: 'Share something from you L.I.S.T.E.N. journal that stood out with you Grow Group',
                trigger: { 'every': { 'weekday': 1, 'hour': 10, 'minute': 40 }, 'count': 1 }
            });
            this.presentToast("Notification Enabled");
        }
        else {
            console.log("WeeklyGroup: " + this.isWeeklyGrowGroup);
            this.presentToast("Notification Disabled");
            localStorage.removeItem('fourthNotification');
        }
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
        //this.notifications = this.activatedRoute.snapshot.paramMap.get('id');
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"] }
];
NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"]])
], NotificationsPage);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map