import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyManagementComponent } from './property-management/property-management.component';

const routerConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {title: 'Home Page'}
    },
    {
        path: 'property-management',
        component: PropertyManagementComponent,
        data: {title: 'Property Management'}
    }
];

export default routerConfig;