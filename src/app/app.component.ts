import { Component, EventEmitter, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { fader, stepper, slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slider],
})
export class AppComponent {
  @ViewChild('outlet', { static: false }) public outlet!: RouterOutlet;

  public isDetailsRoute!: boolean;
  public isMainRoute!: boolean;

  public prepareRoute(outlet: RouterOutlet): RouterOutlet {
    const { activatedRouteData } = outlet;
    return outlet && activatedRouteData && activatedRouteData['animation'];
  }

  public onRouterAttach(event: unknown): void {
    console.log('attach', event);
  }

  public onRouterDetach(event: unknown): void {
    console.log('detach', event);
  }

  public onDetailsRouteActivated(): void {
    this.isDetailsRoute = true;
    console.log(this.isDetailsRoute);
  }

  public onDetailsRouteDeactivated(): void {
    this.isDetailsRoute = false;
    console.log(this.isDetailsRoute);
  }
}
