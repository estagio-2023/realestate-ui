import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyManagementComponent } from './property-management/property-management.component';
import { ReferenceDataComponent } from './reference-data/reference-data.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';

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
    },
    {
        path: 'reference-data',
        component: ReferenceDataComponent,
        data: {title: 'Reference Data'}
    },
    {
        path: 'customer',
        component: CustomerManagementComponent,
        data: {title: 'Customer Management'}
    }
];

export default routerConfig;