import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celebrity-container',
  templateUrl: './celebrity-container.component.html',
  styleUrls: ['./celebrity-container.component.css']
})
export class CelebrityContainerComponent implements OnInit {

  star = {
    name: 'Ronaldo',
    photoUrl: 'https://www.thesun.co.uk/wp-content/uploads/2016/06/ronaldo_phablet_top.jpg?strip=all&w=620&h=180&crop=1',
    introduction: 'Ronaldo'
  };

  clickedStar = '';

  constructor() { }

  ngOnInit() {
  }

  showName(name): void {
    this.clickedStar = name;
  }

}
