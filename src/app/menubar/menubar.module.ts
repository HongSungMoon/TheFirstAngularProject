import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenubarComponent],
  exports: [MenubarComponent]
  // MenubarModule에서 MenubarComponent를 export
  // MenubarModule 자신을 포함한 상위 모듈에서도
  // MenubarComponent를 쓸 수 있도록 하겠다는 뜻
})
export class MenubarModule { }
