import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.page.html',
  styleUrls: ['./blog-detail.page.scss'],
})
export class BlogDetailPage implements OnInit {
  data;
  url: string = 'https://disciplefirst.com/';
  loading:any;

  constructor(private route: ActivatedRoute, private router: Router, public http: HttpClient, public toastCtrl: ToastController,
    public LoadingController: LoadingController ) {
      //console.log(this.route.snapshot.queryParams['special']);
    let id = this.route.snapshot.queryParams['special'];
    console.log(id);    
    this.getPostDetails(id).subscribe(res => {
      this.data = res;
      //console.log(this.data);
    });
  }

  async presentLoading() {
    this.loading = await this.LoadingController.create({
      //content: '',
      duration: 5000
    });
    return await this.loading.present();
}

  getPostDetails(id) {
    this.presentLoading();
    console.log('getPostDetails', id);
    const route = this.url + 'wp-json/wp/v2/' + `posts/${id}?_embed`
    return this.http.get(route).pipe(
      map(post => {
        post['media_url'] = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
        console.log(post);
        return post;
      })
    )
  }

  ngOnInit() {
  }

}
