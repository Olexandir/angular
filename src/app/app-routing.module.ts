import { CustomErrorHandler } from './service/error-handler.service';
import { HomepageModule } from './pages/homepage/homepage.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomepageTopicListComponent } from './components/homepage-topic-list/homepage-topic-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopicDetailsComponent } from './components/topic-details/topic-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    title: 'Homepage',
    loadChildren: () => HomepageModule,
    // component: HomepageComponent,
    // data: { animation: 'isLeft' },
  },
  {
    path: 'topics',
    component: HomepageTopicListComponent,
  },
  {
    path: 'topic/:id',
    component: TopicDetailsComponent,
    outlet: 'details',
    data: {
      saveComponentState: true,
    },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // NoPreloading (default)
      //! enableTracing: true,
      // Логирование ивентов навигации в консоль, используется для дебагинга

      //! useHash: true,
      // Меняет стратегию со стандартной (PathLocationStrategy (History API)) на HashLocationStrategy
      // Дефолтная стратегия производит чистый урл и поддерживает SSR, SEO-friendly, при этом, IE может не поддерживать
      // Hash - поддерживается всеми браузерами, при этом, некрасивый, нечистый урл с '#', не поддерживает SSR

      //! initialNavigation: 'enabledNonBlocking', (default) (A11 - all fields are deprecated)
      // Начальная навигация при дефолтном значении начинает срабатывать сразу после того как корневой компонент был создан
      //? enabledBlocking - начальная навигация стартует до того как компонент был создан,
      // и начальная загрузка компонента заблокирована до тех пор, пока не закончится initialNavigation
      // необходимо для SSR
      //? disabled - начальная навигация не производится, используется в том случае, если необходимо больше контроля над роутером
      // в момент начальной навигации из-за сложной логики по инициализации приложения

      //! errorHandler: CustomErrorHandler, ХЗ проблема типа

      // onSameUrlNavigation: 'ignore',(default) 'reload',

      // scrollPositionRestoration: 'disabled',(default) 'enabled', 'top',

      // anchorScrolling: 'disabled',(default) 'enabled' скроллит до элемента якоря в случае, если в урле есть фрагмент

      // scrollOffset: [numberX, numberY] Устанавливает отступ после скролла до эл-та якоря

      // paramsInheritanceStrategy: 'always', 'emptyOnly' (default)
      // Определяет, как роутер связывает параметры, данные и зарезолвленные параметры от родительского роута к дочернему

      // malformedUriErrorHandler: дефолтный обработчик переносит нас на корневой урл,
      // а Кастомный - по-другому обработает ошибку

      // urlUpdateStrategy: 'deferred'(default) 'eager'
      // Стратегия обновления пути в адресной строке
      // По дефолту обновляет путь в адресной строке только после успешной навигации,
      // 'eager' обновляет путь до перехода по урлу, позволяет обрабатывать неудачную навигацию,
      // показывая ошибки рядом с урлом, переход по которому провалился

      // relativeLinkResolution: 'corrected'(default), 'legacy' ./ , ../

      // canceledNavigationResolution: 'computed', 'replace'(default)
      // 'computed' - ХЗ, 'replace' - возвращает урл с которого хотели перейти, но не перешли
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
