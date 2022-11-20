import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const ROOT_ELEMENT_TAG = 'app-root';

let rootElement = document.querySelector(ROOT_ELEMENT_TAG);

if (!rootElement) {
  rootElement = document.createElement(ROOT_ELEMENT_TAG);
  rootElement.id = 'angular-chrome-app';
  document.body.appendChild(document.createElement(ROOT_ELEMENT_TAG));
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
