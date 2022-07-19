import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageTopicListComponent } from 'src/app/components/homepage-topic-list/homepage-topic-list.component';

@Component({
  // standalone: true,
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  // imports: [CommonModule, RouterModule, HomepageTopicListComponent],
})
export class HomepageComponent {}
