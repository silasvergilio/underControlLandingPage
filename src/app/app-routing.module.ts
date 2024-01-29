import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsComponent } from './awards/awards.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';7
import { FirstComponent } from './first/first.component';
import { RobosComponent } from './robos/robos.component';
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
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'robos',
    component: RobosComponent
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
