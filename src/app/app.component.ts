import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { fader, stepper, slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slider],
})
export class AppComponent {
  public prepareRoute(outlet: RouterOutlet): RouterOutlet {
    const { activatedRouteData } = outlet;
    return outlet && activatedRouteData && activatedRouteData['animation'];
  }
}
