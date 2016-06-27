import { provideRouter, RouterConfig } from '@angular/router';

import {HomeRoutes} from './home/home.routes';
import {StyleguideRoutes} from './styleguide/styleguide.routes';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...StyleguideRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
