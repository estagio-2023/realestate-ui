import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RealEstateManagementComponent } from './realestate/components/real-estate-management/real-estate-management.component';
import { ReferenceDataComponent } from './reference-data/components/reference-data-management/reference-data.component';
import { CustomerManagementComponent } from './customer/components/customer-management/customer-management.component';
import { AgentManagementComponent } from './agent/components/agent-management/agent-management.component';
import { AgentDetailsComponent } from './agent/components/agent-details/agent-details.component';
import { VisitRequestManagementComponent } from './visit-request/components/visit-request-management/visit-request-management.component';
import { VisitRequestDetailsComponent } from './visit-request/components/visit-request-details/visit-request-details.component';
import { ViewCustomerComponent } from './views/view-customer/view-customer.component';

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
    {
        path: 'agent',
        component: AgentManagementComponent,
        data: {title: 'Agent Component'}
    },
    {
        path: 'agent/details/:id',
        component: AgentDetailsComponent,
        data: {title: 'Agent Details'}
    },
    {
        path: 'visit-request',
        component: VisitRequestManagementComponent,
        data: {title: 'Visit Requests'}
    },
    {
        path: 'visit-request/details/:id',
        component: VisitRequestDetailsComponent,
        data: {title: 'Visit Requests View'}
    },
    { 
        path:'customer/view-customer/:id',
        component: ViewCustomerComponent,
        data: {title: 'Customer View'}
    }

];

export default routerConfig;