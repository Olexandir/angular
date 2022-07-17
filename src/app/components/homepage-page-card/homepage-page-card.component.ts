import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Card } from './../../interfaces/app.interface';

@Component({
  standalone: true,
  selector: 'app-homepage-page-card',
  templateUrl: './homepage-page-card.component.html',
})
export class HomepagePageCardComponent {
  @Input() public topic!: Card;

  constructor(private router: Router) {}

  public openPage() {
    const simpleRoute = this.topic.cardTitle.toLowerCase();
    this.router.navigate([`./angular-${simpleRoute}`]);
  }
}
