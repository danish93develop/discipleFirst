(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{iaCu:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),i=u("MKJQ"),s=u("sZkV"),r=u("SVse"),b=u("mrSG");class a{constructor(l,n,u,t,e,o){this.activatedRoute=l,this.http=n,this.Router=u,this.toastCtrl=t,this.loadingController=e,this.navCtrl=o,this.url="https://disciplefirst.com/",this.items=[],this.page=1,this.loadPost(this.url,this.page,!0)}loadPost(l,n,u){return b.a(this,void 0,void 0,(function*(){const t=yield this.loadingController.create({message:""});u&&(yield t.present());const e=this.url+"wp-json/wp/v2/posts";return n||(n="1"),new Promise((o,i)=>{var s;s=l.indexOf("?")>0?"&":"?",this.http.get(e+s+"page="+n).subscribe(l=>{u&&t.dismiss(),console.log(this.items),this.items=this.items.concat(l),o(this.items)},l=>{u&&t.dismiss(),i(l),this.presentToast(l.error.message)})})}))}doRefresh(l){this.loadPost(this.url,1,!1).then(()=>{l.target.complete()}).catch(()=>{l.target.complete()})}loadMore(l){this.page++,this.loadPost(this.url,this.page,!1).then(()=>{l.target.complete()}).catch(()=>{l.target.complete()})}presentToast(l){return b.a(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:l,duration:3e3,position:"bottom",cssClass:"normal-toast"})).present()}))}goToPostDetails(l){let n={queryParams:{special:JSON.stringify(l)}};this.Router.navigate(["blog-detail"],n)}ngOnInit(){}}var c=u("iInd"),p=u("IheW"),h=t.nb({encapsulation:0,styles:[".internal-header[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]{padding-top:15px !important;padding-bottom:15px !important}",[".blog-grid[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:5px 0}.blog-detail-hero[_ngcontent-%COMP%]{position:relative}.detail-hero-info[_ngcontent-%COMP%]{position:absolute;bottom:0;padding:20px 15px}"]],data:{}});function d(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,0,"h2",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.title.rendered)}))}function g(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.excerpt.rendered)}))}function f(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,15,"ion-row",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToPostDetails(l.context.$implicit.id)&&t),t}),i.eb,i.y)),t.ob(1,49152,null,0,s.fb,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,2,"ion-col",[["size","5"]],null,null,null,i.O,i.i)),t.ob(3,49152,null,0,s.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(5,0,null,0,10,"ion-col",[["size","7"]],null,null,null,i.O,i.i)),t.ob(6,49152,null,0,s.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(7,0,null,0,8,"ion-label",[],null,null,null,i.X,i.r)),t.ob(8,49152,null,0,s.M,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,d)),t.ob(10,16384,null,0,r.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,g)),t.ob(12,16384,null,0,r.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(13,0,null,0,2,"small",[],null,null,null,null,null)),(l()(),t.Ib(14,null,["",""])),t.Eb(15,1)],(function(l,n){l(n,3,0,"5"),l(n,6,0,"7"),l(n,10,0,n.context.$implicit.title&&n.context.$implicit.title.rendered),l(n,12,0,n.context.$implicit.excerpt&&n.context.$implicit.excerpt.rendered)}),(function(l,n){l(n,4,0,t.tb(1,"",n.context.$implicit.jetpack_featured_media_url,""));var u=t.Jb(n,14,0,l(n,15,0,t.Bb(n.parent,0),n.context.$implicit.date_gmt));l(n,14,0,u)}))}function m(l){return t.Kb(0,[t.Db(0,r.d,[t.s]),(l()(),t.pb(1,0,null,null,15,"ion-header",[["class","internal-header ion-align-items-center"]],null,null,null,i.R,i.l)),t.ob(2,49152,null,0,s.A,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,13,"ion-toolbar",[],null,null,null,i.lb,i.F)),t.ob(4,49152,null,0,s.yb,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.J,i.d)),t.ob(6,49152,null,0,s.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,9).onClick(u)&&e),e}),i.H,i.b)),t.ob(8,49152,null,0,s.f,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.ob(9,16384,null,0,s.g,[[2,s.eb],s.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.pb(10,0,null,0,2,"ion-title",[],null,null,null,i.jb,i.D)),t.ob(11,49152,null,0,s.wb,[t.h,t.k,t.x],null,null),(l()(),t.pb(12,0,null,0,0,"img",[["class","logo"],["src","../assets/images/logo.svg"]],null,null,null,null,null)),(l()(),t.pb(13,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,i.J,i.d)),t.ob(14,49152,null,0,s.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(15,0,null,0,1,"ion-menu-button",[],null,null,null,i.Z,i.u)),t.ob(16,49152,null,0,s.Q,[t.h,t.k,t.x],null,null),(l()(),t.pb(17,0,null,null,27,"ion-content",[],null,null,null,i.P,i.j)),t.ob(18,49152,null,0,s.t,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"]},null),(l()(),t.pb(19,0,null,0,3,"section",[["class","text-center internal-hero"],["style","background:url(../assets/images/blog-bg.jpg);"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,2,"h3",[["class","span-underline internal-hero-title"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["READ THE BLOG"])),(l()(),t.pb(23,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,u){var t=!0;return"ionRefresh"===n&&(t=!1!==l.component.doRefresh(u)&&t),t}),i.db,i.w)),t.ob(24,49152,null,0,s.Z,[t.h,t.k,t.x],null,null),(l()(),t.pb(25,0,null,0,1,"ion-refresher-content",[],null,null,null,i.cb,i.x)),t.ob(26,49152,null,0,s.ab,[t.h,t.k,t.x],null,null),(l()(),t.pb(27,0,null,0,13,"ion-grid",[["class","blog-grid"]],null,null,null,i.Q,i.k)),t.ob(28,49152,null,0,s.z,[t.h,t.k,t.x],null,null),(l()(),t.pb(29,0,null,0,9,"ion-toolbar",[],null,null,null,i.lb,i.F)),t.ob(30,49152,null,0,s.yb,[t.h,t.k,t.x],null,null),(l()(),t.pb(31,0,null,0,7,"ion-row",[["class","ion-align-items-center"]],null,null,null,i.eb,i.y)),t.ob(32,49152,null,0,s.fb,[t.h,t.k,t.x],null,null),(l()(),t.pb(33,0,null,0,5,"ion-col",[["size","9"]],null,null,null,i.O,i.i)),t.ob(34,49152,null,0,s.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(35,0,null,0,3,"ion-label",[],null,null,null,i.X,i.r)),t.ob(36,49152,null,0,s.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(37,0,null,0,1,"h2",[["class","my-0"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Blog Posts"])),(l()(),t.eb(16777216,null,0,1,null,f)),t.ob(40,278528,null,0,r.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(41,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadMore(u)&&t),t}),i.U,i.n)),t.ob(42,49152,null,0,s.D,[t.h,t.k,t.x],null,null),(l()(),t.pb(43,0,null,0,1,"ion-infinite-scroll-content",[],null,null,null,i.T,i.o)),t.ob(44,49152,null,0,s.E,[t.h,t.k,t.x],null,null)],(function(l,n){var u=n.component;l(n,8,0,"/"),l(n,9,0,"/"),l(n,18,0,!0),l(n,34,0,"9"),l(n,40,0,u.items)}),null)}function x(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"app-blog",[],null,null,null,m,h)),t.ob(1,114688,null,0,a,[c.a,p.c,c.m,s.Kb,s.Cb,s.Eb],null,null)],(function(l,n){l(n,1,0)}),null)}var k=t.lb("app-blog",a,x,{},{},[]),z=u("s7LF");class v{}u.d(n,"BlogPageModuleNgFactory",(function(){return M}));var M=t.mb(e,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[o.a,k]],[3,t.j],t.v]),t.zb(4608,r.m,r.l,[t.s,[2,r.s]]),t.zb(4608,z.l,z.l,[]),t.zb(4608,s.a,s.a,[t.x,t.g]),t.zb(4608,s.Db,s.Db,[s.a,t.j,t.p]),t.zb(4608,s.Gb,s.Gb,[s.a,t.j,t.p]),t.zb(1073742336,r.b,r.b,[]),t.zb(1073742336,z.k,z.k,[]),t.zb(1073742336,z.b,z.b,[]),t.zb(1073742336,s.Ab,s.Ab,[]),t.zb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t.zb(1073742336,v,v,[]),t.zb(1073742336,e,e,[]),t.zb(1024,c.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);