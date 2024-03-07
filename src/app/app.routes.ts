import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routerConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {title: 'Home Page'}
    }
];

export default routerConfig;