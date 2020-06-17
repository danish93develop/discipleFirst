import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage implements OnInit {
  public resources: string;  
  url: string = 'https://disciplefirst.com/'
  items: any = []
  page: any = 1;
  userData: any = JSON.parse(localStorage.getItem('userData'));
  barcodes: any = JSON.parse(localStorage.getItem('bookBarcodes'));
  key:any; 
  postData:any;
  loading:any;  
  encodeData: any;
  arr: {};
  scannedData: {};

  barcodeScannerOptions: BarcodeScannerOptions;
  barcodeData: any;
  scannedBook: any;
  bookID: any;
  barcodeBookIdMap: {};
     
  constructor(
      private activatedRoute: ActivatedRoute,
      public http: HttpClient,
      public Router: Router,
      public toastCtrl: ToastController,
      public LoadingController: LoadingController,
      public navCtrl: NavController,
      private barcodeScanner: BarcodeScanner,
    ) { 
      console.log(this.userData);
      console.log(this.barcodes);
      let bookIdmap={}
      if(this.barcodes){
        for(var i = 0; i < this.barcodes.length; i++){
          bookIdmap[this.barcodes[i]['bookId']] = this.barcodes[i];
          console.log(this.barcodes[i].bookId);
        }
      }
      this.barcodeBookIdMap = bookIdmap;
      console.log(bookIdmap, this.barcodeBookIdMap);
      

      this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
      
    if(this.userData){
       this.loadProductbyUserId({"user_id": this.userData.ID}).subscribe(res => {
          this.items = res;
          console.log(this.items);
          this.loading.dismiss();
        }); 
    }else{
        this.loadProduct(this.url,this.page, true);
    }
      
    }

   
    getBookByBarcode(barcodeInfo) {
      barcodeInfo = JSON.parse(barcodeInfo);
      console.log(barcodeInfo);
      let book_barcode = { "book_bar_code" : barcodeInfo['text'] };
      
      let barcodes = JSON.parse(localStorage.getItem('bookBarcodes'));
      if(barcodes){
        let map = {};
        for(var i = 0; i < barcodes.length; i++){
          map[barcodes[i]['text']] = barcodes[i];
        }

        barcodes = map
        if(barcodes[barcodeInfo['text']] == undefined){
          this.presentLoading();
          const route = this.url + 'wp-json/disciplefirst2019-child/v1/verify-barcode/'
          return this.http.post(route, JSON.stringify(book_barcode), this.httpOptions).subscribe(res => {      
            this.scannedBook = res;
            this.bookID = this.scannedBook[0].ID        
            console.log("BookID from API=" + this.bookID);

            if(res){
              barcodes = Object.values(map);
              barcodeInfo.bookId = this.bookID;
              barcodes.push(barcodeInfo);
              localStorage.setItem('bookBarcodes', JSON.stringify(barcodes)); 
              this.goToProductDetails(this.bookID);
            }
          },
          error => {
            alert("Invalid Barcode");
          });
        }
        else{
          let bookID = barcodes[barcodeInfo['text']] ['bookId']
          this.goToProductDetails(bookID);
        }
      }
      else{
        this.presentLoading();
        const route = this.url + 'wp-json/disciplefirst2019-child/v1/verify-barcode/'
        return this.http.post(route, JSON.stringify(book_barcode), this.httpOptions).subscribe(res => {      
          this.scannedBook = res;
          this.bookID = this.scannedBook[0].ID        
          console.log("BookID from API=" + this.bookID);

          if(res){
            let temp = [];
            barcodeInfo.bookId = this.bookID;
            temp.push(barcodeInfo);
            localStorage.setItem(`bookBarcodes`, JSON.stringify(temp)); 
          }
          this.goToProductDetails(this.bookID);
        },
        error => {
          alert("Invalid Barcode");
        });
      }
    }
      

      scanBarcode(){
      this.barcodeScanner.scan().then(barcodeData => {
          //alert("Barcode data " + JSON.stringify(barcodeData));
          this.scannedData = barcodeData;
        // this.getBookByBarcode('{"text":"9780999343913", "format":"QR_CODE","cancelled":false}');
          this.getBookByBarcode(JSON.stringify(barcodeData));

        })
        .catch(err => {
          console.log("Error", err);
      });

    }

    scanToUnlock(){
      alert("Scan Barcode To Unlock Book");
    }

    
    
    loadProductbyUserId(id) {    
        this.presentLoading();
        const route = this.url + 'wp-json/disciplefirst2019-child/v1/books-listing/'
        return this.http.post(route, JSON.stringify(id), this.httpOptions).pipe(
          map(post => {        
            //console.log(post);
            return post;
          })
        )
    }
    
    async presentLoading() {
        this.loading = await this.LoadingController.create({
          //content: '',
          duration: 7000
        });
        return await this.loading.present();
    }
    
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    }

    async loadProduct(url: string, page, showLoading) {
      const loading = await this.LoadingController.create({
        message: ''
      });
      if (showLoading) {
        await loading.present();
    }

    const route = this.url + 'wp-json/disciplefirst2019-child/v1/books-listing/'
    if (!page) {
      page = '1';
    }

    return new Promise((resolve, reject) => {
      var concat;
      if (url.indexOf('?') > 0) {
        concat = '&';
      } else {
        concat = '?';
      }

      this.http.post(route + concat , 'page=' + page)
        .subscribe(data => {

          if (showLoading) {
            loading.dismiss();
          }
          this.items = data;
          console.log(this.items);
          resolve(this.items);
        },
          error => {
            if (showLoading) {
              loading.dismiss();
            }
            reject(error);
            this.presentToast(error.error.message)
          })
    });
  }

  doRefresh(event) {
    this.loadProduct(this.url, 1, false).then(() => {
      event.target.complete()
    }).catch(() => {
      event.target.complete()
    });
  }

  loadMore(event) {
    this.page++;
    //console.log(this.page++);

    this.loadProduct(this.url, this.page, false).then(() => {
      event.target.complete()
    }).catch(() => {
      event.target.complete()
    });

  }

  async presentToast(msg) {

    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'bottom',
      cssClass: 'normal-toast'
    });

    toast.present();
  }

  goToProductDetails(postid){
    //console.log(this.key.memory_verses);
    if(this.key){
        let postData = {
            id:postid,
            key:this.key.memory_verses
        };
        let navigationExtras: any = {
      queryParams: {
        post_id: JSON.stringify(postData)
      }
    };
    this.Router.navigate(['resource-detail'], navigationExtras);
    }else{
        console.log('bb');
        let postData = {
            id:postid
        };  
        let navigationExtras: any = {
      queryParams: {
        post_id: JSON.stringify(postData)
      }
    };
    this.Router.navigate(['resource-detail'], navigationExtras);
    }   
    
  //console.log(navigationExtras);
  
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
    this.Router.navigate(['memory-verses'], navigationExtras)
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
    this.Router.navigate(['leader-notes'], navigationExtras)
  }

  gotoLogin(){
      this.Router.navigate(['login']);
  }


  ngOnInit() {
      if(this.activatedRoute.snapshot.queryParams['key']){
          this.key = JSON.parse(this.activatedRoute.snapshot.queryParams['key']);
          console.log(this.key);
      }
  }

}
