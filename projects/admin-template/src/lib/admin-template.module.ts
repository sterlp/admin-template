import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AdminTemplateComponent } from './admin-template.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [AdminTemplateComponent, SidebarComponent, HeaderComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [AdminTemplateComponent, SidebarComponent, HeaderComponent]
})
export class AdminTemplateModule { }
