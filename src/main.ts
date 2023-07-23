import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// eslint-disable-next-line import/no-extraneous-dependencies
import { inject } from '@vercel/analytics';
import AppModule from './app/app.module';

inject();

platformBrowserDynamic().bootstrapModule(AppModule)
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err));
