import { UserList } from './interfaces/user.interface';
import { UserState } from './store/user/user.state';
import { Component } from '@angular/core';

import { Store, Select } from '@ngxs/store';

import { last, Observable, Subject, takeUntil } from 'rxjs';
import { GetUserList } from './store/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';

  ngOnInit(): void {
    const arr = [0, 0, 0, 0];
    const fn = <T>(item: T) => !!item;

    const res = this.calc(arr, fn);
    console.log(res);
  }

  calc(arr: number[], fn: <T>(item: T) => boolean = (item) => !!item): boolean {
    return arr.some(fn);
  }
}
