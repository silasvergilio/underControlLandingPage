import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsComponent } from './awards/awards.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'premios',
    component: AwardsComponent
  },
  {
    path: 'sobrenos',
    component: SobrenosComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
