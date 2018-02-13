import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenubarModule } from './menubar/menubar.module';
// AppModule에 MenubarModule 모듈 import
// AppModule이 MenubarModule을 포함하게 만듬

import { RouterModule } from '@angular/router';
import { SelfComponent } from './self/self.component';
import { SelfModule } from './self/self.module';

import { RecommendModule } from './recommend/recommend.module';
import { RecommendComponent } from './recommend/recommend.component';

import { HttpModule } from '@angular/http';
// import { CelebrityContainerComponent } from './celebrity-container/celebrity-container.component';
// // from 뒤에 붙는 경로는 해당 파일의 위치를 기준으로 기입된다!
// import { CelebrityContainerModule } from './celebrity-container/celebrity-container.module';
// 레이지 로딩을 위하여 주석 처리


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    // AppModule에 MenubarModule 모듈 import
    // AppModule이 MenubarModule을 포함하게 만듬
    SelfModule,
    RouterModule.forRoot(
      [
        {path: 'self', component: SelfComponent},
        {path: 'recommend', component: RecommendComponent},
        // {path: 'celebrity', component: CelebrityContainerComponent}
        {path: 'celebrity', loadChildren: './celebrity-container/celebrity-container.module#CelebrityContainerModule'}
      ]
    ),
    RecommendModule,
    HttpModule,
    // CelebrityContainerModule
    /*
    Angular에서는 일반적인 웹 링크 방식인
    <a href> 대신 routerLink 라는 속성을 사용
    이러한 Angular 특유의 링크방식을 사용하기 위해선
    RouterModule 이 필요 함.

    단순하게 import하는 것이 아니라 forRoot 함수를
    호출하면서 Object Array를 전달

    ['self'라는 path로 라우팅 요청이 들어오면
    SelfComponent를 보여주겠다] 라는 의미로 사용
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
