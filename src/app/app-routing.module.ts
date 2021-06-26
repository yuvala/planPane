import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanViewComponent } from './plan-view/plan-view.component';

const routes: Routes = [
  { path: 'plan-viewer', component: PlanViewComponent },
  { path: '',   redirectTo: '/plan-viewer', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

