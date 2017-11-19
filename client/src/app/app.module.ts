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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequestsModule } from './requests/requests.module';
import {HttpModule} from './shared/http/http.module';


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
    RequestsModule,
    SDKBrowserModule.forRoot(),
    FacebookModule.forRoot(),
    HttpClientModule,
    HttpModule,
    LayoutModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
