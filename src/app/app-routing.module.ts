import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularRoutingComponent } from './pages/angular-routing/angular-routing.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'prefix',
  },
  {
    path: 'homepage',
    title: 'Homepage',
    component: HomepageComponent,
  },
  {
    path: 'angular-routing',
    title: 'Routing',
    component: AngularRoutingComponent,
    data: { animation: 'isRight' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
