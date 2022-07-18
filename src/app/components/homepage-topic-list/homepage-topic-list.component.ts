import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Card } from 'src/app/interfaces/app.interface';
import { topicCardList } from 'src/app/mock/mock-data';

import { HomepagePageCardComponent } from '../homepage-page-card/homepage-page-card.component';

@Component({
  standalone: true,
  selector: 'app-homepage-topic-list',
  templateUrl: './homepage-topic-list.component.html',
  imports: [CommonModule, RouterModule, HomepagePageCardComponent],
})
export class HomepageTopicListComponent {
  public topicList: Card[] = [...topicCardList];
}
