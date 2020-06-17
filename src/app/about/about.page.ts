import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  public about: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.about = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
