import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  url: string = 'https://disciplefirst.com/'
  responseData:any;
  loading:any;
  
  constructor(
    private activatedRoute: ActivatedRoute,
      public http: HttpClient,
      public Router: Router,
      public toastCtrl: ToastController,
      public LoadingController: LoadingController
  ) { 

    }
  
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
  

    login(form){
        this.presentLoading();
        //console.log(form.value);
        let formData = {"username":form.value.username, "password":form.value.password};
        console.log(formData);
        const route = this.url + 'wp-json/disciplefirst2019-child/v1/authenticate'
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
        },
        error => {
          // let toast = this.toastCtrl.create({
          //     message: 'Wrong Email / Password.',
          //     duration: 3000,
          //     position: 'top'
          // });

          // toast.present();

          alert("Username/Password incorrect");
          this.loading.dismiss();
        });
    }

  

  ngOnInit() {
    
  }

}
