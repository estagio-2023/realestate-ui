import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { RouterLink, RouterLinkActive, RouterOutlet, provideRouter } from '@angular/router'
import routerConfig from './app.routes'
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap'
import { ReferenceDataComponent } from './reference-data/reference-data.component'
import { ReferenceDataModalComponent } from './modals/reference-data-modal/reference-data-modal.component'
import { ErrorMessageComponent } from './error-message/error-message.component'
import { RealEstateManagementComponent } from './real-estate-management/real-estate-management.component'
import { RealEstateManagementModalComponent } from './modals/real-estate-management-modal/real-estate-management-modal.component'
import { HttpClientModule } from '@angular/common/http'
import { CustomerManagementComponent } from './customer-management/customer-management.component'
import { ToastComponent } from './toast/toast.component'
import { CustomerManagementModalComponent } from './modals/customer-management-modal/customer-management-modal.component'
import { AgentManagementComponent } from './agent-management/agent-management.component'
import { AgentModalComponent } from './modals/agent-modal/agent-modal.component'
import { VisitRequestManagementComponent } from './visit-request-management/visit-request-management.component'

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
    VisitRequestManagementComponent
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