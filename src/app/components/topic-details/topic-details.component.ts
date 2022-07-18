import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './topic-details.component.html',
  imports: [RouterModule],
})
export class TopicDetailsComponent {
  public savedInfo = '';

  public saveInputChange(value: string): void {
    this.savedInfo = value;
  }

  public onBlur(input: HTMLInputElement) {
    input.value = '';
  }
}
