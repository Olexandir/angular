import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  imports: [RouterModule],
})
export class AppHeaderComponent {}
