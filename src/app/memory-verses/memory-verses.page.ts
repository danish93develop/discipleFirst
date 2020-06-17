import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-memory-verses',
  templateUrl: './memory-verses.page.html',
  styleUrls: ['./memory-verses.page.scss'],
})
export class MemoryVersesPage implements OnInit {
  data:any;
  weeks:any;
  id:any;
  type:any;
  url: string = 'https://disciplefirst.com/';
  bookData: any;
  loading:any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public http: HttpClient,
    public LoadingController: LoadingController
  ) { 
    this.presentLoading();
    let data = JSON.parse(this.route.snapshot.queryParams['memory_verses']);
    let id = data.id;
    //console.log(data);

    this.getMemoryVerses(id).subscribe(res => {
      
      this.data = res;
      console.log(this.data['weekly_memory_verses']);
      this.weeks = this.data.request_content;
      this.bookData = {};
      //console.log(this.data);
      this.weeks.forEach((element, index) => {
        let day = element.select_day.value;
        let week = element.select_week.value;
        let memoryVerses = element.memory_verses;

        let key = week + " | " + day
        let temp = {
          day:day,
          week:week,
          memory_verses: memoryVerses,
          book_title: this.data.post_title
        };
        this.bookData[key] = temp;
        // this.bookData.push(element);
        // console.log(temp);
        this.loading.dismiss();
      });
      console.log(this.bookData);
      
    });
  }
  
  async presentLoading() {
        this.loading = await this.LoadingController.create({
          //content: '',
          duration: 8000
        });
        return await this.loading.present();
    }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getMemoryVerses(id) {    
    const route = this.url + 'wp-json/disciplefirst2019-child/v1/' + `book-content/${id}`
    return this.http.post(route, JSON.stringify(id), this.httpOptions).pipe(
      map(post => {        
        //console.log(post);
        return post;
      })
    )
  }  

  ngOnInit() {    
  }

}
