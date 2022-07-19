import { HomepageComponent } from './homepage.component';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageAddComponent } from 'src/app/components/homepag-add/homepage-add.component';

const routes: Route[] = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: 'add',
        component: HomepageAddComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
