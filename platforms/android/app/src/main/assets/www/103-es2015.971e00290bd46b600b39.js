(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{M6NY:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var s=u("pMnS"),o=u("MKJQ"),r=u("sZkV"),i=u("SVse"),a=u("mrSG"),b=u("IheW"),p=u("lJxs");class c{constructor(l,n,u,e){this.route=l,this.router=n,this.http=u,this.LoadingController=e,this.url="https://disciplefirst.com/",this.httpOptions={headers:new b.g({"Content-Type":"application/json"})},this.presentLoading();let t=JSON.parse(this.route.snapshot.queryParams.memory_verses);this.getMemoryVerses(t.id).subscribe(l=>{this.data=l,console.log(this.data.weekly_memory_verses),this.weeks=this.data.request_content,this.bookData={},this.weeks.forEach((l,n)=>{let u=l.select_day.value,e=l.select_week.value;this.bookData[e+" | "+u]={day:u,week:e,memory_verses:l.memory_verses,book_title:this.data.post_title},this.loading.dismiss()}),console.log(this.bookData)})}presentLoading(){return a.a(this,void 0,void 0,(function*(){return this.loading=yield this.LoadingController.create({duration:8e3}),yield this.loading.present()}))}getMemoryVerses(l){return this.http.post(this.url+"wp-json/disciplefirst2019-child/v1/"+`book-content/${l}`,JSON.stringify(l),this.httpOptions).pipe(Object(p.a)(l=>l))}ngOnInit(){}}var h=u("iInd"),d=e.nb({encapsulation:0,styles:[[""]],data:{}});function m(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,4,"div",[["class","px-1 item-line-before"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,2,"ion-label",[],null,null,null,o.X,o.r)),e.ob(2,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(l()(),e.pb(3,0,null,0,0,"span",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e.pb(4,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){var u=n.component;l(n,3,0,u.data.post_title),l(n,4,0,u.data.weekly_memory_verses)}))}function k(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,15,"ion-header",[["class","internal-header ion-align-items-center"]],null,null,null,o.R,o.l)),e.ob(1,49152,null,0,r.A,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,13,"ion-toolbar",[],null,null,null,o.lb,o.F)),e.ob(3,49152,null,0,r.yb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.J,o.d)),e.ob(5,49152,null,0,r.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/resources"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Bb(l,8).onClick(u)&&t),t}),o.H,o.b)),e.ob(7,49152,null,0,r.f,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.ob(8,16384,null,0,r.g,[[2,r.eb],r.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,o.jb,o.D)),e.ob(10,49152,null,0,r.wb,[e.h,e.k,e.x],null,null),(l()(),e.pb(11,0,null,0,0,"img",[["class","logo"],["src","../assets/images/logo.svg"]],null,null,null,null,null)),(l()(),e.pb(12,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,o.J,o.d)),e.ob(13,49152,null,0,r.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(14,0,null,0,1,"ion-menu-button",[],null,null,null,o.Z,o.u)),e.ob(15,49152,null,0,r.Q,[e.h,e.k,e.x],null,null),(l()(),e.pb(16,0,null,null,7,"ion-content",[],null,null,null,o.P,o.j)),e.ob(17,49152,null,0,r.t,[e.h,e.k,e.x],null,null),(l()(),e.pb(18,0,null,0,3,"section",[["class","text-center internal-hero"],["style","background:url(../assets/images/memory-verses.jpg);"]],null,null,null,null,null)),(l()(),e.pb(19,0,null,null,2,"h3",[["class","span-underline internal-hero-title"]],null,null,null,null,null)),(l()(),e.pb(20,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["MEMORY VERSE"])),(l()(),e.eb(16777216,null,0,1,null,m)),e.ob(23,16384,null,0,i.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,"/resources"),l(n,8,0,"/resources"),l(n,23,0,u.data)}),null)}function f(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-memory-verses",[],null,null,null,k,d)),e.ob(1,114688,null,0,c,[h.a,h.m,b.c,r.Cb],null,null)],(function(l,n){l(n,1,0)}),null)}var g=e.lb("app-memory-verses",c,f,{},{},[]),v=u("s7LF");class y{}u.d(n,"MemoryVersesPageModuleNgFactory",(function(){return w}));var w=e.mb(t,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[s.a,g]],[3,e.j],e.v]),e.zb(4608,i.m,i.l,[e.s,[2,i.s]]),e.zb(4608,v.l,v.l,[]),e.zb(4608,r.a,r.a,[e.x,e.g]),e.zb(4608,r.Db,r.Db,[r.a,e.j,e.p]),e.zb(4608,r.Gb,r.Gb,[r.a,e.j,e.p]),e.zb(1073742336,i.b,i.b,[]),e.zb(1073742336,v.k,v.k,[]),e.zb(1073742336,v.b,v.b,[]),e.zb(1073742336,r.Ab,r.Ab,[]),e.zb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),e.zb(1073742336,y,y,[]),e.zb(1073742336,t,t,[]),e.zb(1024,h.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);