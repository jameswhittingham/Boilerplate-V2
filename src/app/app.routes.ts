import { provideRouter, RouterConfig } from '@angular/router';

import {HomeRoutes} from './home/home.routes';
import {StyleguideRoutes} from './styleguide/styleguide.routes';
import {FormRoutes} from './form/form.routes';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...StyleguideRoutes,
  ...FormRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
