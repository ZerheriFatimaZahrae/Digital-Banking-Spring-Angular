import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { CustomersComponent } from './customers/customers.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuItem, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { LoginComponent } from './login/login.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    CustomerAccountsComponent,
    CustomersComponent,
    NavbarComponent,
    NewCustomerComponent,
    AdminTemplateComponent,
    LoginComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,

    MatIconButton,
    MatMenuModule,
    MatMenuTrigger,
    MatMenuItem,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,

    MatTableModule,
    MatSortModule,
    MatPaginator,

    FormsModule,
    MatRadioButton,
    MatRadioGroup
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    //{ provide: HTTP_INTERCEPTORS, useClass: appHttpInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
