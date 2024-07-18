import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, RouterLink, RouterLinkActive, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes  
      // ,withPreloading(PreloadAllModules)
    ),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideAnimationsAsync()
  ]
};
