import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RealEstateManagementComponent } from './real-estate-management/real-estate-management.component';
import { ReferenceDataComponent } from './reference-data/reference-data.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { AgentManagementComponent } from './agent-management/agent-management.component';
import { AgentViewComponent } from './views/agent-view/agent-view.component';
import { VisitRequestManagementComponent } from './visit-request-management/visit-request-management.component';
import { VisitRequestViewComponent } from './views/visit-request-view/visit-request-view.component';

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
        path: 'agent/view-agent/:id',
        component: AgentViewComponent,
        data: {title: 'Agent View'}
    },
    {
        path: 'visit-request',
        component: VisitRequestManagementComponent,
        data: {title: 'Visit Requests'}
    },
    {
        path: 'visit-request/view-visit-request/:id',
        component: VisitRequestViewComponent,
        data: {title: 'Visit Requests View'}
    }
];

export default routerConfig;