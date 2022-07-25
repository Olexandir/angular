import { Injectable } from '@angular/core';
import { Action, State, StateToken, StateContext } from '@ngxs/store';
import { map, takeLast, tap } from 'rxjs';

import { UserAPIService } from 'src/app/service/hhtp.service';

import { User, UserList } from './../../interfaces/user.interface';
import { GetUserList } from './user.actions';

const USER_STATE_TOKEN = new StateToken<UserList>('userState');

@State<UserList>({
  name: USER_STATE_TOKEN,
  defaults: {} as UserList,
})
@Injectable()
export class UserState {
  constructor(private userAPIService: UserAPIService) {}

  @Action(GetUserList)
  getUserList(state: StateContext<UserList>) {
    const currentState = state.getState();

    return this.userAPIService.getUserList().pipe(
      map((userArr) => {
        const userObj = userArr.reduce((acc, user) => {
          return { ...acc, [user.id]: user };
        }, {} as { [key: string]: User });
        return userObj;
      }),
      tap((userList) => state.setState({ ...currentState, ...userList })),
    );
  }
}
