import { HTTPService } from './service/hhtp.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomepageComponent,
    UserListPageComponent,
  ],
  providers: [HTTPService],
  bootstrap: [AppComponent],
})
export class AppModule {}
