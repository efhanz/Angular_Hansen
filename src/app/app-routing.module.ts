import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnacksAboutComponent } from './snacks-about/snacks-about.component';
import { SnacksHomeComponent } from './snacks-home/snacks-home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'snacks',
    pathMatch:'full',
  },

  {
    path: 'snacks',
    component: SnacksHomeComponent,
  },
  {
    path: 'about',
    component: SnacksAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
