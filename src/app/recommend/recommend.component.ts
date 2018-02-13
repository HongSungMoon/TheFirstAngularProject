import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  // site1 = 'https://www.naver.com';
  // site2 = 'https://google.co.kr';
  // site3 = 'https://daum.net';
  // site4 = 'https://www.hitcle.com';

  siteList = ['https://www.naver.com', 'https://google.co.kr',
    'https://daum.net', 'https://hitcle.com'];

  constructor() { }

  ngOnInit() {
  }

}
