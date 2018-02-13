import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfComponent } from './self.component';
import { SelfService } from './self.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SelfComponent],
  providers: [SelfService]
})
export class SelfModule { }
