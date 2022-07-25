import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  public handleError(error: any): void {
    console.warn('Particular error occur: ', error);
    // return { error: 'AAAAAAAAAAAA' }
  }
}
