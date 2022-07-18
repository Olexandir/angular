import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CustomRouteReuseStrategyService } from './service/route-reuse-strategy.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageComponent,
    AppHeaderComponent,
    AppFooterComponent,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategyService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
