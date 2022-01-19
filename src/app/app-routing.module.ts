import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TableComponent } from './page/table/table.component';
import { CaselistComponent } from './page/caselist/caselist.component';
import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';
import { NewCaseComponent } from './page/new-case/new-case.component';
import { SpeechToTextComponent } from './page/speech-to-text/speech-to-text.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'table', component: TableComponent},
  {path: 'aa', component: SpeechToTextComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'case',
    component: CommonLayoutComponent,
    children: [
      {
        path: '',
        component: CaselistComponent
      }
    ]
  },
  {
    path: 'newCase',
    component: CommonLayoutComponent,
    children: [
      {
        path: '',
        component: NewCaseComponent,
        
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
