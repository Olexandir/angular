import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomepageTopicListComponent } from 'src/app/components/homepage-topic-list/homepage-topic-list.component';

@Component({
  standalone: true,
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  imports: [CommonModule, HomepageTopicListComponent],
})
export class HomepageComponent {}
