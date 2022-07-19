import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomepageComponent],
  // imports: [HomepageComponent],
  imports: [CommonModule, RouterModule, HomepageRoutingModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
