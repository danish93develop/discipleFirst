import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-resource-single-content',
  templateUrl: './resource-single-content.page.html',
  styleUrls: ['./resource-single-content.page.scss'],
})
export class ResourceSingleContentPage implements OnInit {
  id:any;
  data:any;
  week:any;
  day:any;
  type:any;
  url: string = 'https://disciplefirst.com/';
  loading:any;
  weekData: any;
  dayData:any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public http: HttpClient,
    public LoadingController: LoadingController
  ) { 
    this.presentLoading();
    let data = JSON.parse(this.route.snapshot.queryParams['book_content']);
    let id = data.id;
    this.weekData = data.select_week;
    this.dayData = data.select_day;
    
    console.log(data.select_week);
    console.log(data.select_day);

    this.getBookContent(data, id).subscribe(res => {
      this.data = res;
      //console.log(this.data);
      this.loading.dismiss();
    });
  }
  
  async presentLoading() {
    this.loading = await this.LoadingController.create({
      //content: '',
      duration: 5000
    });
    return await this.loading.present();
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'content-type':"application/x-www-form-urlencoded"
    })
  }
  

  getBookContent(data, id) {
    console.log(data);
    //let params = { request_type: "book_content", select_week: "Week 2", select_day: "Day 1" };    
    const route = this.url + 'wp-json/disciplefirst2019-child/v1/' + `book-content/${id}`
    return this.http.post(route, JSON.stringify(data), this.httpOptions).pipe(
      map(post => {        
        console.log(post);
        return post;
      })
    )
  }

  ngOnInit() {

  }

}
