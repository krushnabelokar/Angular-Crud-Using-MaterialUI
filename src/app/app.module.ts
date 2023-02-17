import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { AddEmpDialogComponent } from './dialog-boxes/add-emp-dialog/add-emp-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateEmpDialogComponent } from './dialog-boxes/update-emp-dialog/update-emp-dialog.component';

@NgModule({
  declarations: [AppComponent, AddEmpDialogComponent, UpdateEmpDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
