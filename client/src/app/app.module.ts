import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { SDKBrowserModule } from './shared/sdk/index';
import { FacebookModule } from 'ngx-facebook';
import { MentorsModule } from './mentors/mentors.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    HomeModule,
    MentorsModule,
    SDKBrowserModule.forRoot(),
    FacebookModule.forRoot(),
    HttpClientModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
