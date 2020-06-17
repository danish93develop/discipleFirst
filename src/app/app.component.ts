import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    options : InAppBrowserOptions = {
        location : 'yes',//Or 'no' 
        hidden : 'no', //Or  'yes'
        clearcache : 'yes',
        clearsessioncache : 'yes',
        zoom : 'yes',//Android only ,shows browser zoom controls 
        hardwareback : 'yes',
        mediaPlaybackRequiresUserAction : 'no',
        shouldPauseOnSuspend : 'no', //Android only 
        closebuttoncaption : 'Close', //iOS only
        disallowoverscroll : 'no', //iOS only 
        toolbar : 'yes', //iOS only 
        enableViewportScale : 'no', //iOS only 
        allowInlineMediaPlayback : 'no',//iOS only 
        presentationstyle : 'pagesheet',//iOS only 
        fullscreen : 'yes',//Windows only    
    };
  userData = JSON.parse(localStorage.getItem('userData'));
  memory_verses: any;
  memoryData: any;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home/',
      icon: 'paper-plane'
    },
    {
      title: 'About',
      url: '/about/About',
      icon: 'paper-plane'
    },
    {
      title: 'Digital Resources',
      url: '/resources/',
      icon: 'paper-plane'
    },
    {
      title: 'Blog',
      url: '/blog/',
      icon: 'archive'
    },
    {
      title: 'Contact Us',
      url: '/contact/',
      icon: 'mail'
    },
    
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  loading:any;
  isAbout:any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public Router: Router,
    public LoadingController: LoadingController,
    public theInAppBrowser: InAppBrowser
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
    async presentLoading() {
        this.loading = await this.LoadingController.create({
          //content: '',
          duration: 3000
        });
        return await this.loading.present();
    }
    
public openWithSystemBrowser(url : string){
    let target = "_system";
    this.theInAppBrowser.create(url,target,this.options);
}
public openWithInAppBrowser(url : string){
    let target = "_blank";
    this.theInAppBrowser.create(url,target,this.options);
}
public openWithCordovaBrowser(url : string){
    let target = "_self";
    this.theInAppBrowser.create(url,target,this.options);
}  
  
  logout(){
    this.presentLoading();
    localStorage.removeItem('userData');
    this.Router.navigate(['home']).then(() => {
        window.location.reload();
      });
    console.log("user logged out successfully..");
  }
  
  pageload(){
     this.Router.navigate(['home']).then(() => {
        window.location.reload();
      }); 
  }
  
  gotoResources(data){
      let memoryData = {
          memory_verses:data
        };
        console.log(memoryData);
      let navigationData: any = {
      queryParams: {
        key: JSON.stringify(memoryData)
      }
    };
      this.Router.navigate(['resources'], navigationData);
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
