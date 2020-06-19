function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{ah5c:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=function l(){_classCallCheck(this,l)},r=u("pMnS"),i=u("MKJQ"),o=u("sZkV"),a=u("s7LF"),s=u("mrSG"),b=u("IheW"),d=function(){function l(n,u,e,t,r){_classCallCheck(this,l),this.activatedRoute=n,this.http=u,this.Router=e,this.toastCtrl=t,this.LoadingController=r,this.url="https://dev.disciplefirst.com/",this.httpOptions={headers:new b.g({"Content-Type":"application/json"})}}return _createClass(l,[{key:"presentLoading",value:function(){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.LoadingController.create({duration:7e3});case 2:return this.loading=l.sent,l.next=5,this.loading.present();case 5:return l.abrupt("return",l.sent);case 6:case"end":return l.stop()}}),l,this)})))}},{key:"register",value:function(l){var n=this;return this.presentLoading(),this.http.post(this.url+"wp-json/disciplefirst2019-child/v1/register",JSON.stringify({username:l.value.username,email:l.value.email,password:l.value.password}),this.httpOptions).subscribe((function(l){n.responseData=l,console.log(n.responseData),n.presentToast("User registered successfully.."),n.Router.navigate(["login"]),n.loading.dismiss()}),(function(l){n.presentToast("Invalid Username/Email"),n.loading.dismiss()}))}},{key:"presentToast",value:function(l){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastCtrl.create({message:l,duration:3e3,position:"bottom",cssClass:"normal-toast"});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"ngOnInit",value:function(){}}]),l}(),c=u("iInd"),p=e.nb({encapsulation:0,styles:[[""]],data:{}});function g(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,15,"ion-header",[["class","internal-header ion-align-items-center"]],null,null,null,i.R,i.l)),e.ob(1,49152,null,0,o.A,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,13,"ion-toolbar",[],null,null,null,i.lb,i.F)),e.ob(3,49152,null,0,o.yb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.J,i.d)),e.ob(5,49152,null,0,o.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Bb(l,8).onClick(u)&&t),t}),i.H,i.b)),e.ob(7,49152,null,0,o.f,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.ob(8,16384,null,0,o.g,[[2,o.eb],o.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,i.jb,i.D)),e.ob(10,49152,null,0,o.wb,[e.h,e.k,e.x],null,null),(l()(),e.pb(11,0,null,0,0,"img",[["class","logo"],["src","../assets/images/logo.svg"]],null,null,null,null,null)),(l()(),e.pb(12,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,i.J,i.d)),e.ob(13,49152,null,0,o.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(14,0,null,0,1,"ion-menu-button",[],null,null,null,i.Z,i.u)),e.ob(15,49152,null,0,o.Q,[e.h,e.k,e.x],null,null),(l()(),e.pb(16,0,null,null,55,"ion-content",[["color","light"]],null,null,null,i.P,i.j)),e.ob(17,49152,null,0,o.t,[e.h,e.k,e.x],{color:[0,"color"],fullscreen:[1,"fullscreen"]},null),(l()(),e.pb(18,0,null,0,53,"ion-grid",[["style","height:100%"]],null,null,null,i.Q,i.k)),e.ob(19,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(20,0,null,0,51,"ion-row",[["class","ion-align-items-center"],["color","primary"],["style","height:100%"]],null,null,null,i.eb,i.y)),e.ob(21,49152,null,0,o.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(22,0,null,0,49,"ion-col",[],null,null,null,i.O,i.i)),e.ob(23,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.pb(24,0,null,0,47,"ion-card",[["class","mb-0 login-card"]],null,null,null,i.N,i.e)),e.ob(25,49152,null,0,o.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(26,0,null,0,45,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,r=l.component;return"submit"===n&&(t=!1!==e.Bb(l,28).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Bb(l,28).onReset()&&t),"ngSubmit"===n&&(t=!1!==r.register(e.Bb(l,28))&&t),t}),null,null)),e.ob(27,16384,null,0,a.m,[],null,null),e.ob(28,4210688,[["form",4]],0,a.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Fb(2048,null,a.a,null,[a.h]),e.ob(30,16384,null,0,a.g,[[4,a.a]],null,null),(l()(),e.pb(31,0,null,null,3,"div",[["class","text-center span-underline mb-2"]],null,null,null,null,null)),(l()(),e.pb(32,0,null,null,2,"h3",[["color","dark"]],null,null,null,null,null)),(l()(),e.pb(33,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Register"])),(l()(),e.pb(35,0,null,null,10,"ion-item",[],null,null,null,i.W,i.q)),e.ob(36,49152,null,0,o.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(37,0,null,0,8,"ion-input",[["name","username"],["ngModel",""],["placeholder","Enter username"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Bb(l,40)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,40)._handleInputEvent(u.target)&&t),t}),i.V,i.p)),e.ob(38,16384,null,0,a.j,[],{required:[0,"required"]},null),e.Fb(1024,null,a.c,(function(l){return[l]}),[a.j]),e.ob(40,16384,null,0,o.Jb,[e.k],null,null),e.Fb(1024,null,a.d,(function(l){return[l]}),[o.Jb]),e.ob(42,671744,null,0,a.i,[[2,a.a],[6,a.c],[8,null],[6,a.d]],{name:[0,"name"],model:[1,"model"]},null),e.Fb(2048,null,a.e,null,[a.i]),e.ob(44,16384,null,0,a.f,[[4,a.e]],null,null),e.ob(45,49152,null,0,o.F,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.pb(46,0,null,null,10,"ion-item",[],null,null,null,i.W,i.q)),e.ob(47,49152,null,0,o.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(48,0,null,0,8,"ion-input",[["name","email"],["ngModel",""],["placeholder","email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Bb(l,51)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,51)._handleInputEvent(u.target)&&t),t}),i.V,i.p)),e.ob(49,16384,null,0,a.j,[],{required:[0,"required"]},null),e.Fb(1024,null,a.c,(function(l){return[l]}),[a.j]),e.ob(51,16384,null,0,o.Jb,[e.k],null,null),e.Fb(1024,null,a.d,(function(l){return[l]}),[o.Jb]),e.ob(53,671744,null,0,a.i,[[2,a.a],[6,a.c],[8,null],[6,a.d]],{name:[0,"name"],model:[1,"model"]},null),e.Fb(2048,null,a.e,null,[a.i]),e.ob(55,16384,null,0,a.f,[[4,a.e]],null,null),e.ob(56,49152,null,0,o.F,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.pb(57,0,null,null,10,"ion-item",[],null,null,null,i.W,i.q)),e.ob(58,49152,null,0,o.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(59,0,null,0,8,"ion-input",[["name","password"],["ngModel",""],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Bb(l,62)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,62)._handleInputEvent(u.target)&&t),t}),i.V,i.p)),e.ob(60,16384,null,0,a.j,[],{required:[0,"required"]},null),e.Fb(1024,null,a.c,(function(l){return[l]}),[a.j]),e.ob(62,16384,null,0,o.Jb,[e.k],null,null),e.Fb(1024,null,a.d,(function(l){return[l]}),[o.Jb]),e.ob(64,671744,null,0,a.i,[[2,a.a],[6,a.c],[8,null],[6,a.d]],{name:[0,"name"],model:[1,"model"]},null),e.Fb(2048,null,a.e,null,[a.i]),e.ob(66,16384,null,0,a.f,[[4,a.e]],null,null),e.ob(67,49152,null,0,o.F,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.pb(68,0,null,null,3,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.pb(69,0,null,null,2,"ion-button",[["color","secondary"],["expand","block"],["type","submit"]],null,null,null,i.I,i.c)),e.ob(70,49152,null,0,o.j,[e.h,e.k,e.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(l()(),e.Ib(-1,0,["Submit"]))],(function(l,n){l(n,7,0,"/"),l(n,8,0,"/"),l(n,17,0,"light",!0),l(n,38,0,""),l(n,42,0,"username",""),l(n,45,0,"username","Enter username","","text"),l(n,49,0,""),l(n,53,0,"email",""),l(n,56,0,"email","email","","email"),l(n,60,0,""),l(n,64,0,"password",""),l(n,67,0,"password","Password","","password"),l(n,70,0,"secondary",e.Bb(n,28).invalid,"block","submit")}),(function(l,n){l(n,26,0,e.Bb(n,30).ngClassUntouched,e.Bb(n,30).ngClassTouched,e.Bb(n,30).ngClassPristine,e.Bb(n,30).ngClassDirty,e.Bb(n,30).ngClassValid,e.Bb(n,30).ngClassInvalid,e.Bb(n,30).ngClassPending),l(n,37,0,e.Bb(n,38).required?"":null,e.Bb(n,44).ngClassUntouched,e.Bb(n,44).ngClassTouched,e.Bb(n,44).ngClassPristine,e.Bb(n,44).ngClassDirty,e.Bb(n,44).ngClassValid,e.Bb(n,44).ngClassInvalid,e.Bb(n,44).ngClassPending),l(n,48,0,e.Bb(n,49).required?"":null,e.Bb(n,55).ngClassUntouched,e.Bb(n,55).ngClassTouched,e.Bb(n,55).ngClassPristine,e.Bb(n,55).ngClassDirty,e.Bb(n,55).ngClassValid,e.Bb(n,55).ngClassInvalid,e.Bb(n,55).ngClassPending),l(n,59,0,e.Bb(n,60).required?"":null,e.Bb(n,66).ngClassUntouched,e.Bb(n,66).ngClassTouched,e.Bb(n,66).ngClassPristine,e.Bb(n,66).ngClassDirty,e.Bb(n,66).ngClassValid,e.Bb(n,66).ngClassInvalid,e.Bb(n,66).ngClassPending)}))}var h=e.lb("app-register",d,(function(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-register",[],null,null,null,g,p)),e.ob(1,114688,null,0,d,[c.a,b.c,c.m,o.Kb,o.Cb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),m=u("SVse"),f=function l(){_classCallCheck(this,l)};u.d(n,"RegisterPageModuleNgFactory",(function(){return v}));var v=e.mb(t,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[r.a,h]],[3,e.j],e.v]),e.zb(4608,m.m,m.l,[e.s,[2,m.s]]),e.zb(4608,a.l,a.l,[]),e.zb(4608,o.a,o.a,[e.x,e.g]),e.zb(4608,o.Db,o.Db,[o.a,e.j,e.p]),e.zb(4608,o.Gb,o.Gb,[o.a,e.j,e.p]),e.zb(1073742336,m.b,m.b,[]),e.zb(1073742336,a.k,a.k,[]),e.zb(1073742336,a.b,a.b,[]),e.zb(1073742336,o.Ab,o.Ab,[]),e.zb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),e.zb(1073742336,f,f,[]),e.zb(1073742336,t,t,[]),e.zb(1024,c.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);