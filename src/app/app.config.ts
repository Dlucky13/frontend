import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ENVIRONMENT } from '@shared/models';
import { loggingInterceptor } from './zones/authorized/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([loggingInterceptor])
    ),
    {
      provide: ENVIRONMENT,
      useValue: environment
    }
  ]
};
