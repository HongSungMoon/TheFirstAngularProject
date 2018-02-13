import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-celebrity',
  templateUrl: './celebrity.component.html',
  styleUrls: ['./celebrity.component.css']
})
export class CelebrityComponent implements OnInit {

  @Input() photoUrl;
  @Input() name;
  @Input() introduction;
  // 이 어노테이션이 있어야 부모 컴포넌트에서 변수값을 넣을 수 있다.
  @Output() imageClicked: EventEmitter<any> = new EventEmitter();
  // <any> 는 어떠한 자료형도 매개변수로 전달할 수 있다는 뜻

  constructor() { }

  ngOnInit() {
  }

  emitImageClickedEvent(): void {
    this.imageClicked.emit(this.name);
  }
  // imageClicked를 이용해서 이벤트를 발생시키고
  // 매개변수로 name 프로퍼티를 전달

}
