import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';

@Injectable()
export class CustomRouteReuseStrategyService implements RouteReuseStrategy {
  // Создание уникальной коллекциию, где ключ является урлом,
  // а значение - ссылкой на компонент, с сохраненный стэйтом
  private newMap = new Map<string, DetachedRouteHandle>();

  private getRouteKey(route: ActivatedRouteSnapshot): string {
    // Вспомогательная функция, возвращает уникальный ключ по урлу
    //(урл компонента должен быть унифицирован по айди и т.д. и т.п.)
    return route.pathFromRoot
      .filter((u) => u.url)
      .map((u) => u.url)
      .join('/');
  }

  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // Определяет, должен ли сохраняться стэйт компонента по урлу,
    // с которого уходит пользоатель
    // Для этого в роут модуле передается data: { [name]: boolean }
    return route.data['saveComponentState'] || false;
  }

  public store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null,
  ): void {
    // Сохраняет состояние компонента, если метод shouldDetach вернул true
    const key = this.getRouteKey(route);
    this.newMap.set(key, handle!);
  }

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // Определяет должен ли загружаться стэйт, загруженного по роуту компонета
    const key = this.getRouteKey(route);
    const isComponentSaved = this.newMap.has(key);
    return isComponentSaved || false;
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    // Загружает компонент с его сохраненным стэйтом,
    // если метод shouldAttach вернуд true
    const key = this.getRouteKey(route);
    const savedComponent = this.newMap.get(key);
    return savedComponent!;
  }

  public shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot,
  ): boolean {
    // Не позволяет переиспользовать те же самые роуты
    // { path, component }
    return future.routeConfig === curr.routeConfig;
  }
}
