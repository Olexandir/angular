import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';

import { UserAPIService } from './service/hhtp.service';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './store/user/user.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomepageComponent,
    UserListPageComponent,

    NgxsModule.forRoot([UserState], {
      developmentMode: true,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({ name: 'userState' }),
  ],
  providers: [UserAPIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
