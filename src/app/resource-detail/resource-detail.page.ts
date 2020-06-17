import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.page.html',
  styleUrls: ['./resource-detail.page.scss'],

})
export class ResourceDetailPage implements OnInit {
  data;
  pageData : any;
  result : any;
  weeks_array: any;
  weeks: any;
  keys: any;
  url: string = 'https://disciplefirst.com/';
  bookData: any = JSON.parse(this.route.snapshot.queryParams['post_id']);
  filterParams : any = {"id": this.bookData.id, "select_week": "", "select_day": "", "request_type":"book_content"};
  loading:any;
  keyvalue:any;
  bookid: any;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    public http: HttpClient,
    public toastCtrl: ToastController,
    public LoadingController: LoadingController
    ) {
    this.presentLoading();
    let post = JSON.parse(this.route.snapshot.queryParams['post_id']);
    this.keyvalue = post.key;
    this.bookid = post.id;
    
    console.log(this.keyvalue);
    console.log(this.bookid);
    
    this.getProductDetails(post.id).subscribe(res => {
      this.data = res;
      this.weeks = this.data.weeks_array;
      console.log(this.data);
      
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
      'Content-Type': 'application/json'
    })
  }

  getProductDetails(id) {    
    const route = this.url + 'wp-json/disciplefirst2019-child/v1/' + `book-details/${id}`
    return this.http.post(route, JSON.stringify(id), this.httpOptions).pipe(
      map(post => {        
        //console.log(post);
        return post;
      })
    )
  }
  
  async filterBookContent(){
      console.log(this.filterParams);
      if(this.filterParams.id != '' && this.filterParams.select_week != '' && this.filterParams.select_day != ''){
          let navigationExtras: any = {
          queryParams: {
            book_content: JSON.stringify(this.filterParams)
          }
        };
        this.router.navigate(['resource-single-content'],navigationExtras);
      }else{
          console.log("Data not found");
          let toast = await this.toastCtrl.create({
                message: 'Data not found',
                duration: 3000,
                position: 'bottom'
            });

            return await toast.present();
      }
  }

  gotoContent(id, week, day, request_type){
    //console.log(week, day, request_type);
    let pageData = {
      id:id,
      select_week:week,
      select_day:day,
      request_type:request_type
    };
    let navigationExtras: any = {
      queryParams: {
        book_content: JSON.stringify(pageData)
      }
    };
     this.router.navigate(['resource-single-content'],navigationExtras)
    //this.router.navigate(['resource-single-content',{id:id, week:week, day:day, request_type:request_type}])
  }

  gotoMemoryVerses(id, request_type){
    //console.log(id,request_type);
    let pageData = {
      id:id,
      request_type:request_type
    };
    let navigationExtras: any = {
      queryParams: {
        memory_verses: JSON.stringify(pageData)
      }
    };
    this.router.navigate(['memory-verses'], navigationExtras)
  }


  gotoLeaderNotes(id, request_type){
    //console.log(id,request_type);
    let pageData = {
      id:id,
      request_type:request_type
    };
    let navigationExtras: any = {
      queryParams: {
        leader_notes: JSON.stringify(pageData)
      }
    };
    this.router.navigate(['leader-notes'], navigationExtras)
  }

  ngOnInit() {
  }

}



