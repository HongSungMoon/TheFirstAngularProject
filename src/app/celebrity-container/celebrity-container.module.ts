import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelebrityContainerComponent } from './celebrity-container.component';
import { CelebrityModule } from '../celebrity/celebrity.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CelebrityModule,
    // 이렇게 해야 Celebrity를 Import 한 상위 모듈에서도
    // CelebrityComponent를 사용 할 수 있다.
    RouterModule.forChild(
      [
        {
          path : '',
          component : CelebrityContainerComponent
        }
      ]
    )
  ],
  declarations: [CelebrityContainerComponent]
  // import 할 때는 비어있는 스트링을 전달
  // /celebrity로 요청이 들어왔을 때 기본값으로
  // CelebrityContainerComponent를 보여주겠다는 의미

})
export class CelebrityContainerModule { }
