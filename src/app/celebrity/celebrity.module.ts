import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelebrityComponent } from './celebrity.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CelebrityComponent],
  exports: [CelebrityComponent]
})
export class CelebrityModule { }
