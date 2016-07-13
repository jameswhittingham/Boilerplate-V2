import { provideRouter, RouterConfig } from '@angular/router';

import {HomeRoutes} from './home/home.routes';
import {StyleguideRoutes} from './styleguide/styleguide.routes';
import {FormRoutes} from './form/form.routes';
import {FormResultsRoutes} from './form-results/form-results.routes';
import {TodoRoutes} from './todo/todo.routes';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...StyleguideRoutes,
  ...FormRoutes,
  ...FormResultsRoutes,
  ...TodoRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
