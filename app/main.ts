import { PlatformRef } from '@angular/core/src/application_ref';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';
// 
//
// const platform: PlatformRef = platformBrowserDynamic();
// platform.bootstrapModule(AppModule);
//

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
