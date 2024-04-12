import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { RouterLink, RouterLinkActive, RouterOutlet, provideRouter } from '@angular/router'
import routerConfig from './app.routes'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ReferenceDataComponent } from './reference-data/reference-data.component'
import { ReferenceDataModalComponent } from './modals/reference-data-modal/reference-data-modal.component'
import { ErrorMessageComponent } from './error-message/error-message.component'
import { PropertyManagementComponent } from './property-management/property-management.component'
import { PropertyManagementModalComponent } from './modals/property-management-modal/property-management-modal.component'
import { HttpClientModule } from '@angular/common/http'
import { CustomerManagementComponent } from './customer-management/customer-management.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReferenceDataComponent,
    ReferenceDataModalComponent,
    PropertyManagementComponent,
    PropertyManagementModalComponent,
    ErrorMessageComponent,
    CustomerManagementComponent
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
    HttpClientModule
  ],
  providers: [
    provideRouter(routerConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
