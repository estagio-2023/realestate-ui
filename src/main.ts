import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import routerConfig from './app/app.routes';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routerConfig)
    ]
}).catch((err) => console.error(err));