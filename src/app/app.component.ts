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

  // @Select(UserState) userList$!: Observable<UserList>;

  // private ngUnsubscribe = new Subject<void>();

  // constructor(private userStore: Store) {}

  // ngOnInit(): void {
  //   this.getUserList();

  //   this.userList$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
  //     console.log(this.userStore);
  //   });
  // }

  // ngOnDestroy() {
  //   console.log('aaaa');

  //   this.ngUnsubscribe.next();
  //   this.ngUnsubscribe.complete();
  // }

  // private getUserList(): void {
  //   this.userStore
  //     .dispatch(new GetUserList())
  //     .pipe(takeUntil(this.ngUnsubscribe))
  //     .subscribe();
  // }
}
