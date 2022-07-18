import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { Card } from './../../interfaces/app.interface';

@Component({
  standalone: true,
  selector: 'app-homepage-page-card',
  templateUrl: './homepage-page-card.component.html',
  imports: [CommonModule, RouterModule],
})
export class HomepagePageCardComponent {
  @Input() public topic!: Card;

  constructor(private router: Router) {}

  //! public openPage() {
  //   const simpleRoute = this.topic.cardTitle.toLowerCase();
  //   this.router.navigate([`angular-${simpleRoute}`]);
  // }
}
