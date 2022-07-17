import { fader, stepper, slider } from './route-animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slider],
})
export class AppComponent {
  title = 'angular';

  prepareRoute(outlet: RouterOutlet) {
    const { activatedRouteData } = outlet;
    return outlet && activatedRouteData && activatedRouteData['animation'];
  }
}
