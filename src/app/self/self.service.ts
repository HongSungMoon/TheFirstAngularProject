import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SelfService {

  constructor(private http: Http) { }
  // SelfService의 생성자
  // : 뒤에 붙는 것은 자료형 TypeScript

  getMyIpAddress(): Observable<Object> {
    return this.http.get('https://freegeoip.net/json')
    .map( (data: Response) => data.json() );
  }
  // Observable<T>
  // Http.get() 함수는 Observable<Response>를 리턴
  // Ajax 요청은 Async하게(비동기적) 동작
  // Http클래스의 get함수를 실행시키면
  // Observable<Response>를 리턴해주고 결과물은
  // Observable<Response>를 구독하여(subscribe) 받아가면 된다.

  // Response는 Request의 결과물을 담고 있는 클래스
  // Status code, Response Header 등...

  // map()함수는 Observable<T> 클래스에 있는 함수로
  // 해당하는 전달 데이터를 바꿔주는 함수
  // 위 예문에서 Http.get()의 반환형인 Observable<Response>를
  // Observable<Object>로 바꿔줌

  // map()함수의 매개변수로 '(data: Response) => data.json()' 전달
  // ES6의 새로운 문법 - 익명함수의 새로운 표현 방식

  // function(data) {
  //   return data.json();
  // }
  // 와 같은 익명함수를 표현하는 새로운 방식
  // 그러나 두 방식이 완전히 같지는 않다.
}
