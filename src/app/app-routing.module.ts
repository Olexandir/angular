import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageTopicListComponent } from './components/homepage-topic-list/homepage-topic-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopicDetailsComponent } from './components/topic-details/topic-details.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    title: 'Homepage',
    component: HomepageComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: 'topics',
    component: HomepageTopicListComponent,
  },
  {
    path: 'topic/:id',
    component: TopicDetailsComponent,
    outlet: 'details',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
