import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.home = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
