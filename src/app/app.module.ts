import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { RouterLink, RouterLinkActive, RouterOutlet, provideRouter } from '@angular/router'
import routerConfig from './app.routes'
import { PropertyManagementComponent } from './property-management/property-management.component'
// import { FormControl, FormGroup, Validators } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyManagementComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    
  ],
  providers: [
    provideRouter(routerConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
