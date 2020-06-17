import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController} from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  public notifications: string;
  isToggled:any;
  isMemoryVerse: any;
  isWeekly: any;
  isWeeklyGrowGroup: any;
  clickSub:any;
  
  constructor(
        private activatedRoute: ActivatedRoute,
        public toastCtrl: ToastController,
        private localNotifications: LocalNotifications        
      ) 
    {
    
    let isToggledNotification = JSON.parse(localStorage.getItem('firstNotification'));
    console.log(isToggledNotification);
    if(isToggledNotification != null){
      this.isToggled = true;
    }else{
      this.isToggled = false;
    }
    
    let isMemoryVerseNotification = JSON.parse(localStorage.getItem('secondNotification'));
    console.log(isMemoryVerseNotification);
    if(isMemoryVerseNotification != null){
      this.isMemoryVerse = true;
    }else{
      this.isMemoryVerse = false;
    }
    
    let isWeeklydNotification = JSON.parse(localStorage.getItem('thirdNotification'));
    console.log(isWeeklydNotification);
    if(isWeeklydNotification != null){
      this.isWeekly = true;
    }else{
      this.isWeekly = false;
    }

    let isWeeklyGrowGroupdNotification = JSON.parse(localStorage.getItem('fourthNotification'));
    console.log(isWeeklyGrowGroupdNotification);
    if(isWeeklyGrowGroupdNotification != null){
      this.isWeeklyGrowGroup = true;
    }else{
      this.isWeeklyGrowGroup = false;
    }

  }

  notify() {
    // this.clickSub = this.localNotifications.on('click').subscribe(data => {
    //   console.log(data);
    // });
    let firstNotify = {"isToggled":this.isToggled};

    if(this.isToggled == true){
      console.log("Toggled: "+ this.isToggled); 
      localStorage.setItem('firstNotification', JSON.stringify(firstNotify));

      this.localNotifications.schedule({
        id: Math.floor((Math.random() * 1000)),
        text: 'Have you spent time L.I.S.T.E.N.ing to God through His Word today?',
        data: { secret: 'secret' },
        trigger: { every: { hour: 10, minute: 10 }, count: 1440 }
      });
      this.presentToast("Notification enable");
    }else{
      console.log("Toggled: "+ this.isToggled); 
      this.presentToast("Notification disable");
      localStorage.removeItem('firstNotification');
    }   

  }

  notifyMemoryVerse() {     
    let secondNotify = {"isMemoryVerse":this.isMemoryVerse};
    if(this.isMemoryVerse == true){
      console.log("MemoryVerse: "+ this.isMemoryVerse); 
      localStorage.setItem('secondNotification', JSON.stringify(secondNotify));

      this.localNotifications.schedule({
        id: Math.floor((Math.random() * 1000)),
        text: 'Have you reviewed your memory verses today?',
        data: { secret: 'secret' },
        trigger: { every: { hour: 11, minute: 0 }, count: 1440 }
      });
      this.presentToast("Notification enable");
    }else{
      console.log("MemoryVerse: "+ this.isMemoryVerse); 
      this.presentToast("Notification disable");
      localStorage.removeItem('secondNotification');
    }
  }

  notifyWeekly(){
    let thirdNotify = {"isWeekly":this.isWeekly};

    if(this.isWeekly == true){
      console.log("Weekly: "+ this.isWeekly); 
      localStorage.setItem('thirdNotification', JSON.stringify(thirdNotify));

      this.localNotifications.schedule([{
        id: Math.floor((Math.random() * 1000)),
        text: 'Have you reviewed your “I will…” Statement for this week?',
        trigger: { 'every': {'weekday': 1, 'hour': 10, 'minute': 40 }, 'count': 1 }
      },
      {
        id: Math.floor((Math.random() * 1000)),
        text: 'Pray for a lost friend',
        trigger: { 'every': {'weekday': 1, 'hour': 10, 'minute': 40 }, 'count': 1 }
      },
      {
        id: Math.floor((Math.random() * 1000)),
        text: 'Pray for who could be in your next Grow Group',
        trigger: { 'every': {'weekday': 1, 'hour': 10, 'minute': 40 }, 'count': 1 }
      },
      {
        id: Math.floor((Math.random() * 1000)),
        text: 'Pray for the people on your top five list',
        trigger: { 'every': {'weekday': 1, 'hour': 10, 'minute': 40 }, 'count': 1 }
      },
      {
        id: Math.floor((Math.random() * 1000)),
        text: 'Express your thankfulness to God throughout your day today',
        trigger: { 'every': {'weekday': 1, 'hour': 10, 'minute': 40 }, 'count': 1 }
      }
    ]);
    this.presentToast("Notification enable");
    }else{
      console.log("Weekly: "+ this.isWeekly); 
      this.presentToast("Notification disable");
      localStorage.removeItem('thirdNotification');
    }
  }

  notifyWeeklyGrowGroup(){
    let fourthNotify = {"isWeeklyGrowGroup":this.isWeeklyGrowGroup};

    if(this.isWeeklyGrowGroup == true){
      console.log("WeeklyGroup: "+ this.isWeeklyGrowGroup); 
      localStorage.setItem('fourthNotification', JSON.stringify(fourthNotify));

      this.localNotifications.schedule({
        id: Math.floor((Math.random() * 1000)),
        text: 'Share something from you L.I.S.T.E.N. journal that stood out with you Grow Group',
        trigger: { 'every': {'weekday': 1, 'hour': 10, 'minute': 40 }, 'count': 1 }
      });
      this.presentToast("Notification enable");
    }else{
      console.log("WeeklyGroup: "+ this.isWeeklyGrowGroup); 
      this.presentToast("Notification disable");
      localStorage.removeItem('fourthNotification');
    }
  }

  async presentToast(msg) {

    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      cssClass: 'normal-toast'
    });

    toast.present();

  }

  ngOnInit() {
    //this.notifications = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
