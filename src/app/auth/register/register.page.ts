import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  url: string = 'https://dev.disciplefirst.com/'
  responseData:any;
  loading:any;

  constructor(
    private activatedRoute: ActivatedRoute,
      public http: HttpClient,
      public Router: Router,
      public toastCtrl: ToastController,
      public LoadingController: LoadingController
  ) { }

  async presentLoading() {
    this.loading = await this.LoadingController.create({
      //content: '',
      duration: 7000
    });
        return await this.loading.present();
    }

      // Http Options
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    }

    register(form){
      this.presentLoading();
      //console.log(form.value);
      let formData = {"username":form.value.username, "email":form.value.email, "password":form.value.password};

      const route = this.url + 'wp-json/disciplefirst2019-child/v1/register'
      return this.http.post(route, JSON.stringify(formData), this.httpOptions).subscribe(res => {      
        this.responseData = res;
        console.log(this.responseData);
        this.presentToast("User registered successfully..");
        this.Router.navigate(['login']);
        // this.Router.navigate(['home']).then(() => {
        //   window.location.reload();
        // });
        
        this.loading.dismiss();
      },
      error => {
        this.presentToast("Invalid Username/Email");
        //console.log("Something went wrong");
        this.loading.dismiss();
      });
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
  }

}
