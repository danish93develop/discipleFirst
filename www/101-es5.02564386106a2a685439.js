function _defineProperties(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{mMFO:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=function l(){_classCallCheck(this,l)},o=e("pMnS"),r=e("MKJQ"),s=e("sZkV"),a=e("SVse"),i=e("mrSG"),b=e("IheW"),c=e("lJxs"),p=function(){function l(n,e,u,t){var o=this;_classCallCheck(this,l),this.route=n,this.router=e,this.http=u,this.LoadingController=t,this.url="https://disciplefirst.com/",this.httpOptions={headers:new b.g({"Content-Type":"application/json"})},this.presentLoading();var r=JSON.parse(this.route.snapshot.queryParams.leader_notes),s=r.id;console.log(r),this.getLeaderNotes(s).subscribe((function(l){o.data=l,o.weeks=o.data.request_content,o.bookData={},o.weeks.forEach((function(l,n){var e=l.select_day.value,u=l.select_week.value,t={day:e,week:u,leader_notes:l.leader_notes};o.bookData[u+" | "+e]=t,console.log(t)})),o.loading.dismiss()}))}return _createClass(l,[{key:"presentLoading",value:function(){return i.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.LoadingController.create({duration:8e3});case 2:return this.loading=l.sent,l.next=5,this.loading.present();case 5:return l.abrupt("return",l.sent);case 6:case"end":return l.stop()}}),l,this)})))}},{key:"getLeaderNotes",value:function(l){return this.http.post(this.url+"wp-json/disciplefirst2019-child/v1/"+"book-content/".concat(l),JSON.stringify(l),this.httpOptions).pipe(Object(c.a)((function(l){return l})))}},{key:"ngOnInit",value:function(){}}]),l}(),f=e("iInd"),d=u.nb({encapsulation:0,styles:[[""]],data:{}});function h(l){return u.Kb(0,[(l()(),u.pb(0,0,null,null,5,"div",[["class","px-1 item-line-before"]],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,3,"ion-label",[],null,null,null,r.X,r.r)),u.ob(2,49152,null,0,s.M,[u.h,u.k,u.x],null,null),(l()(),u.pb(3,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),u.Ib(4,null,["",""])),(l()(),u.pb(5,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){var e=n.component;l(n,4,0,n.context.$implicit.key),l(n,5,0,e.bookData[n.context.$implicit.key].leader_notes)}))}function k(l){return u.Kb(0,[(l()(),u.pb(0,0,null,null,15,"ion-header",[["class","internal-header ion-align-items-center"]],null,null,null,r.R,r.l)),u.ob(1,49152,null,0,s.A,[u.h,u.k,u.x],null,null),(l()(),u.pb(2,0,null,0,13,"ion-toolbar",[],null,null,null,r.lb,r.F)),u.ob(3,49152,null,0,s.yb,[u.h,u.k,u.x],null,null),(l()(),u.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.J,r.d)),u.ob(5,49152,null,0,s.k,[u.h,u.k,u.x],null,null),(l()(),u.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/resources"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Bb(l,8).onClick(e)&&t),t}),r.H,r.b)),u.ob(7,49152,null,0,s.f,[u.h,u.k,u.x],{defaultHref:[0,"defaultHref"]},null),u.ob(8,16384,null,0,s.g,[[2,s.eb],s.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),u.pb(9,0,null,0,2,"ion-title",[],null,null,null,r.jb,r.D)),u.ob(10,49152,null,0,s.wb,[u.h,u.k,u.x],null,null),(l()(),u.pb(11,0,null,0,0,"img",[["class","logo"],["src","../assets/images/logo.svg"]],null,null,null,null,null)),(l()(),u.pb(12,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,r.J,r.d)),u.ob(13,49152,null,0,s.k,[u.h,u.k,u.x],null,null),(l()(),u.pb(14,0,null,0,1,"ion-menu-button",[],null,null,null,r.Z,r.u)),u.ob(15,49152,null,0,s.Q,[u.h,u.k,u.x],null,null),(l()(),u.pb(16,0,null,null,8,"ion-content",[],null,null,null,r.P,r.j)),u.ob(17,49152,null,0,s.t,[u.h,u.k,u.x],null,null),(l()(),u.pb(18,0,null,0,3,"section",[["class","text-center internal-hero"],["style","background:url(../assets/images/memory-verses.jpg);"]],null,null,null,null,null)),(l()(),u.pb(19,0,null,null,2,"h3",[["class","span-underline internal-hero-title"]],null,null,null,null,null)),(l()(),u.pb(20,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Ib(-1,null,["LEADER NOTE"])),(l()(),u.eb(16777216,null,0,2,null,h)),u.ob(23,278528,null,0,a.j,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),u.Db(0,a.f,[u.r])],(function(l,n){var e=n.component;l(n,7,0,"/resources"),l(n,8,0,"/resources"),l(n,23,0,u.Jb(n,23,0,u.Bb(n,24).transform(e.bookData)))}),null)}var g=u.lb("app-leader-notes",p,(function(l){return u.Kb(0,[(l()(),u.pb(0,0,null,null,1,"app-leader-notes",[],null,null,null,k,d)),u.ob(1,114688,null,0,p,[f.a,f.m,b.c,s.Cb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),m=e("s7LF"),v=function l(){_classCallCheck(this,l)};e.d(n,"LeaderNotesPageModuleNgFactory",(function(){return y}));var y=u.mb(t,[],(function(l){return u.yb([u.zb(512,u.j,u.X,[[8,[o.a,g]],[3,u.j],u.v]),u.zb(4608,a.m,a.l,[u.s,[2,a.s]]),u.zb(4608,m.l,m.l,[]),u.zb(4608,s.a,s.a,[u.x,u.g]),u.zb(4608,s.Db,s.Db,[s.a,u.j,u.p]),u.zb(4608,s.Gb,s.Gb,[s.a,u.j,u.p]),u.zb(1073742336,a.b,a.b,[]),u.zb(1073742336,m.k,m.k,[]),u.zb(1073742336,m.b,m.b,[]),u.zb(1073742336,s.Ab,s.Ab,[]),u.zb(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),u.zb(1073742336,v,v,[]),u.zb(1073742336,t,t,[]),u.zb(1024,f.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);