import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ToggleDirective } from './layout/sidebar/toggle.directive';
import { HomeComponent } from './page/home/home.component';
import { TableComponent } from './page/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';
import { CaselistComponent } from './page/caselist/caselist.component';
import { MaterialModule } from './material/material.module';
import { CaseListRibbonComponent } from './page/case-list-ribbon/case-list-ribbon.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserEmulationInterceptor } from './service/user-emulation-interceptor';
import { NewCaseComponent } from './page/new-case/new-case.component';
import { CaseTextComponent } from './page/caseAssoc/case-text/case-text.component';
import { CaseNumberComponent } from './page/caseAssoc/case-number/case-number.component';
import { CaseSelectComponent } from './page/caseAssoc/case-select/case-select.component';
import { CaseLookupComponent } from './page/caseAssoc/case-lookup/case-lookup.component';
import { CaseDateOnlyComponent } from './page/caseAssoc/case-date-only/case-date-only.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SpeechToTextComponent } from './page/speech-to-text/speech-to-text.component';
import { DialogModelComponent } from './page/caseAssoc/dialog-model/dialog-model.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToggleDirective,
    HomeComponent,
    TableComponent,
    CommonLayoutComponent,
    CaselistComponent,
    CaseListRibbonComponent,
    NewCaseComponent,
    CaseTextComponent,
    CaseNumberComponent,
    CaseSelectComponent,
    CaseLookupComponent,
    CaseDateOnlyComponent,
    SpeechToTextComponent,
    DialogModelComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
    
  },{ provide: HTTP_INTERCEPTORS, useClass: UserEmulationInterceptor, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
