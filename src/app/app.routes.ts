import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RealEstateManagementComponent } from './real-estate-management/real-estate-management.component';
import { ReferenceDataComponent } from './reference-data/reference-data.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routerConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {title: 'Home Page'}
    },
    {
        path: 'real-estates',
        component: RealEstateManagementComponent,
        data: {title: 'Real Estate'}
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
    },
    { //Componente viewcustomer está a ser "exportado"
        path:'customer/view-customer/:id',
        component: ViewCustomerComponent,
        data: {title: 'Customer View'}
    }

];

export default routerConfig;