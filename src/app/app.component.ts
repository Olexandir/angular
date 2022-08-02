import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'algorithms';
  private arr = [0, 1, 2, 3];
  private arr2 = [2, 3, 4, 5];
  private arr3 = [1, 2, 3, 1, 2, 3];

  private obj8 = {
    id: 0,
    name: 'Fat Tony',
    [Symbol.toPrimitive](hint: any): any {
      return hint == 'string' ? this.name : this.id;
    },
  };

  private meetups = [
    { name: 'JavaScript', isActive: true, members: 100 },
    { name: 'Angular', isActive: true, members: 900 },
    { name: 'Node', isActive: false, members: 600 },
    { name: 'React', isActive: true, members: 500 },
  ];

  ngOnInit() {
    const subFn1 = <T>(i: T): boolean => !!i;
    const subFn2 = <T>(i: T): void => console.log(i);

    const res = this.task10(2)(3)(10);

    console.log(res);
  }

  private task1(arr: any[], fn: <T>(item: T) => boolean = (item) => !!item) {
    return arr.some(fn);
  }

  private task2(arr1: any[], arr2: any[]): any[] {
    const fn = <T>(a: Array<T>, b: Array<T>): Array<T> =>
      a.map((v, index) => (!b.includes(v) ? v : b[index]));
    return arr1.length > arr2.length ? fn(arr1, arr2) : fn(arr2, arr1);
  }

  private task3(arr: any[], fn: Function): void {
    for (let i = arr.length - 1; i >= 0; i--) fn(arr[i]);
  }

  private task4(arr1: any[], arr2: any[]): any[] {
    return [...new Set([...arr1, ...arr2])];
  }

  private task5(arr1: any[], ...args: any[]): any[] {
    return arr1.filter((v) => !args.includes(v));
  }

  private task6(arr1: any[], value: any): any[] {
    return arr1.reduce(
      (acc, item, index) => (item === value ? [...acc, index] : [...acc]),
      [],
    );
  }

  private task7(arr: any[]): number {
    return arr.reduce(
      (acc, item: any) => (item.isActive ? acc + item.members : acc),
      0,
    );
  }

  //! private task8(arr: any[]): number {}

  private task9() {
    console.log(
      `Hello ${this.obj8}`,
      +this.obj8,
      (this.obj8 as unknown as number) + 10,
    );
  }

  private task10 = (num: number) => (num2: number) => (num3: number) =>
    num + num2 + num3;
}
