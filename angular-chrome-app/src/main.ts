import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const ROOT_ELEMENT_TAG = 'app-root';

let rootElement = document.querySelector(ROOT_ELEMENT_TAG);

if (!rootElement) {
  rootElement = document.createElement(ROOT_ELEMENT_TAG);
  rootElement.id = 'angular-chrome-app';
  const globalStyles = document.createElement('style');
  globalStyles.innerHTML = `
    ${ROOT_ELEMENT_TAG} {
      position: fixed;
      left: 0;
      top: 0;
      width: 300px;
      height: 100vh;
      background: #ffffff;
      border-right: 1px solid #c2c2c2;
      z-index: 999;
      }
  `;
  document.body.appendChild(globalStyles);
  document.body.appendChild(document.createElement(ROOT_ELEMENT_TAG));
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
