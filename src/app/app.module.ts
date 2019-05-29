import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

import { EmployeeTitle } from './employee/employee-title.pipe';
import { EmployeeCountComponent } from './employee/employee-count/employee-count.component';
import { OthersComponent } from './others/others.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { EmployeeService } from './employee/employee-service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTitle,
    EmployeeCountComponent,
    OthersComponent,
    HomeComponent,
    PageNotFoundComponent,
    EmployeeViewComponent
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
