import { Component, OnInit } from '@angular/core';
import { SelfService } from './self.service';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css']
})
export class SelfComponent implements OnInit {

  myIp = '';

  displayMyIpAddress(): void {
    this.selfService.getMyIpAddress().subscribe(
      result => this.myIp = result['ip']
    );
  }

  // displayMyIpAddress() 함수는 selfService의
  // getMyIpAddress()를 호출하고 결과로 Observable<Object>를
  // subscribe 하여 그 결과를 myIp에 입력하는 역할
  // subscribe함수의 매개변수로 익명함수를 전달

  // Observable<Object> 에 데이터가 만들어지면 그 값을
  // subscribe에 등록한 함수를 실행
  // 함수를 실행 시킬 때에는 만들어진 데이터를 매개변수로 전달

  // 반환된 Json String 중 ip값을 myIp에 입력

  constructor(private selfService: SelfService) { }
  // constructor에 매개변수는 변수의 선언 ?
  // autowire ?

  ngOnInit() {
  }

}
