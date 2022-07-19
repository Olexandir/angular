import { Component } from '@angular/core';

@Component({
  standalone: true,
  interpolation: ['$', '$'],
  templateUrl: './homepage-add.component.html',
})
export class HomepageAddComponent {
  public hello = 'Test new interpolation';
}
