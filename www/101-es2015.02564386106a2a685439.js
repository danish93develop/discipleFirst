(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{mMFO:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),s=u("MKJQ"),i=u("sZkV"),r=u("SVse"),a=u("mrSG"),b=u("IheW"),c=u("lJxs");class p{constructor(l,n,u,t){this.route=l,this.router=n,this.http=u,this.LoadingController=t,this.url="https://disciplefirst.com/",this.httpOptions={headers:new b.g({"Content-Type":"application/json"})},this.presentLoading();let e=JSON.parse(this.route.snapshot.queryParams.leader_notes),o=e.id;console.log(e),this.getLeaderNotes(o).subscribe(l=>{this.data=l,this.weeks=this.data.request_content,this.bookData={},this.weeks.forEach((l,n)=>{let u=l.select_day.value,t=l.select_week.value,e={day:u,week:t,leader_notes:l.leader_notes};this.bookData[t+" | "+u]=e,console.log(e)}),this.loading.dismiss()})}presentLoading(){return a.a(this,void 0,void 0,(function*(){return this.loading=yield this.LoadingController.create({duration:8e3}),yield this.loading.present()}))}getLeaderNotes(l){return this.http.post(this.url+"wp-json/disciplefirst2019-child/v1/"+`book-content/${l}`,JSON.stringify(l),this.httpOptions).pipe(Object(c.a)(l=>l))}ngOnInit(){}}var d=u("iInd"),h=t.nb({encapsulation:0,styles:[[""]],data:{}});function k(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,5,"div",[["class","px-1 item-line-before"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,3,"ion-label",[],null,null,null,s.X,s.r)),t.ob(2,49152,null,0,i.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t.Ib(4,null,["",""])),(l()(),t.pb(5,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){var u=n.component;l(n,4,0,n.context.$implicit.key),l(n,5,0,u.bookData[n.context.$implicit.key].leader_notes)}))}function f(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,15,"ion-header",[["class","internal-header ion-align-items-center"]],null,null,null,s.R,s.l)),t.ob(1,49152,null,0,i.A,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,13,"ion-toolbar",[],null,null,null,s.lb,s.F)),t.ob(3,49152,null,0,i.yb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.J,s.d)),t.ob(5,49152,null,0,i.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/resources"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,8).onClick(u)&&e),e}),s.H,s.b)),t.ob(7,49152,null,0,i.f,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.ob(8,16384,null,0,i.g,[[2,i.eb],i.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.pb(9,0,null,0,2,"ion-title",[],null,null,null,s.jb,s.D)),t.ob(10,49152,null,0,i.wb,[t.h,t.k,t.x],null,null),(l()(),t.pb(11,0,null,0,0,"img",[["class","logo"],["src","../assets/images/logo.svg"]],null,null,null,null,null)),(l()(),t.pb(12,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,s.J,s.d)),t.ob(13,49152,null,0,i.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(14,0,null,0,1,"ion-menu-button",[],null,null,null,s.Z,s.u)),t.ob(15,49152,null,0,i.Q,[t.h,t.k,t.x],null,null),(l()(),t.pb(16,0,null,null,8,"ion-content",[],null,null,null,s.P,s.j)),t.ob(17,49152,null,0,i.t,[t.h,t.k,t.x],null,null),(l()(),t.pb(18,0,null,0,3,"section",[["class","text-center internal-hero"],["style","background:url(../assets/images/memory-verses.jpg);"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,2,"h3",[["class","span-underline internal-hero-title"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["LEADER NOTE"])),(l()(),t.eb(16777216,null,0,2,null,k)),t.ob(23,278528,null,0,r.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Db(0,r.f,[t.r])],(function(l,n){var u=n.component;l(n,7,0,"/resources"),l(n,8,0,"/resources"),l(n,23,0,t.Jb(n,23,0,t.Bb(n,24).transform(u.bookData)))}),null)}function g(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"app-leader-notes",[],null,null,null,f,h)),t.ob(1,114688,null,0,p,[d.a,d.m,b.c,i.Cb],null,null)],(function(l,n){l(n,1,0)}),null)}var m=t.lb("app-leader-notes",p,g,{},{},[]),v=u("s7LF");class x{}u.d(n,"LeaderNotesPageModuleNgFactory",(function(){return y}));var y=t.mb(e,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[o.a,m]],[3,t.j],t.v]),t.zb(4608,r.m,r.l,[t.s,[2,r.s]]),t.zb(4608,v.l,v.l,[]),t.zb(4608,i.a,i.a,[t.x,t.g]),t.zb(4608,i.Db,i.Db,[i.a,t.j,t.p]),t.zb(4608,i.Gb,i.Gb,[i.a,t.j,t.p]),t.zb(1073742336,r.b,r.b,[]),t.zb(1073742336,v.k,v.k,[]),t.zb(1073742336,v.b,v.b,[]),t.zb(1073742336,i.Ab,i.Ab,[]),t.zb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),t.zb(1073742336,x,x,[]),t.zb(1073742336,e,e,[]),t.zb(1024,d.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);