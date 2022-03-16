import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFormComponent } from './views/edit-form/edit-form.component';
import { FormComponent } from './views/home/form/form.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'newSpot', 
    component: FormComponent 
  },
  { 
    path: 'editSpot', 
    component: EditFormComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
