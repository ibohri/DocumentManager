import { ClientReportsComponent } from './client-reports/client-reports.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TreeModule } from 'primeng/components/tree/tree';
import  {ButtonModule } from 'primeng/components/button/button';
import  {ListboxModule } from 'primeng/components/listbox/listbox';
import  {AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import  {SidebarModule } from 'primeng/components/sidebar/sidebar';
import  {PanelMenuModule } from 'primeng/components/panelmenu/panelmenu';
import  {DialogModule } from 'primeng/components/dialog/dialog';
import  {InputTextModule } from 'primeng/components/inputtext/inputtext';
import  {DataListModule } from 'primeng/components/datalist/datalist';
import  {DragDropModule } from 'primeng/components/dragdrop/dragdrop';

import { AppComponent } from './app.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
import { RouterModule } from '@angular/router';
import { FileSettingsComponent } from './file-settings/file-settings.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FilemanagerComponent,
    ClientReportsComponent,
    FileSettingsComponent,
    TopbarComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileUploadModule,
    DragDropModule,
    ButtonModule,
    AutoCompleteModule,
    TreeModule,
BrowserAnimationsModule,
    DialogModule,
    RouterModule.forRoot([
      { path: "", component: FilemanagerComponent },
      { path: "clientreports", component: ClientReportsComponent },
      { path: "filesettings", component: FileSettingsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
