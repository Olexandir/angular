import { HTTPService } from './service/hhtp.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';
  constructor(private serv: HTTPService) {}

  ngOnInit(): void {
    this.serv.getUserList();
  }
}
