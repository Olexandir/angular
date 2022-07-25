import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class HTTPService {
  private readonly getListUrl =
    'https://62deef9b976ae7460be529a7.mockapi.io/api/users';

  constructor(private httpClient: HttpClient) {}

  public getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.getListUrl);
  }
}
