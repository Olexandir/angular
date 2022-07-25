import { Component } from '@angular/core';

import { Store, Select } from '@ngxs/store';
import { Observable, Subject, takeUntil, take } from 'rxjs';
import { UserList } from 'src/app/interfaces/user.interface';
import { GetUserList } from 'src/app/store/user/user.actions';
import { UserState } from 'src/app/store/user/user.state';

@Component({
  standalone: true,
  templateUrl: './user-list-page.component.html',
})
export class UserListPageComponent {
  @Select(UserState) userList$!: Observable<UserList>;

  private ngUnsubscribe = new Subject<void>();

  constructor(private userStore: Store) {}

  ngOnInit(): void {
    this.getUserList();

    this.userList$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private getUserList(): void {
    this.userStore
      .dispatch(new GetUserList())
      // .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe();
  }
}
