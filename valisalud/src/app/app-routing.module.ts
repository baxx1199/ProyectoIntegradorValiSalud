import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiabetesViewComponent } from './views/diabetes-view/diabetes-view.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { TensionViewComponent } from './views/tension-view/tension-view.component';

const routes: Routes = [
  {    path: '', component :MainViewComponent  },
  {    path: 'diabetes', component :DiabetesViewComponent  },
  {    path: 'tension', component :TensionViewComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
