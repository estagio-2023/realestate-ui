import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { RouterLink, RouterLinkActive, RouterOutlet, provideRouter } from '@angular/router'
import routerConfig from './app.routes'
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap'
import { ReferenceDataComponent } from './reference-data/components/reference-data-management/reference-data.component'
import { ReferenceDataModalComponent } from './reference-data/modals/reference-data-modal/reference-data-modal.component'
import { ErrorMessageComponent } from './common/components/error-message/error-message.component'
import { RealEstateManagementComponent } from './realestate/components/real-estate-management/real-estate-management.component'
import { RealEstateManagementModalComponent } from './realestate/modals/real-estate-management-modal/real-estate-management-modal.component'
import { HttpClientModule } from '@angular/common/http'
import { CustomerManagementComponent } from './customer/components/customer-management/customer-management.component'
import { ToastComponent } from './common/components/toast/toast.component'
import { CustomerManagementModalComponent } from './customer/modals/customer-management-modal/customer-management-modal.component'
import { AgentManagementComponent } from './agent/components/agent-management/agent-management.component'
import { AgentModalComponent } from './agent/modals/agent-modal/agent-modal.component'
import { VisitRequestManagementComponent } from './visit-request/components/visit-request-management/visit-request-management.component'
import { VisitRequestDetailsComponent } from './visit-request/components/visit-request-details/visit-request-details.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReferenceDataComponent,
    ReferenceDataModalComponent,
    RealEstateManagementComponent,
    RealEstateManagementModalComponent,
    ErrorMessageComponent,
    CustomerManagementComponent,
    ToastComponent,
    CustomerManagementModalComponent,
    AgentManagementComponent,
    AgentModalComponent,
    VisitRequestManagementComponent,
    VisitRequestDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbToastModule
  ],
  providers: [
    provideRouter(routerConfig)
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}