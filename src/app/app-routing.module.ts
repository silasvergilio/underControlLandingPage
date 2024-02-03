import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsComponent } from './awards/awards.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';7
import { FirstComponent } from './first/first.component';
import { RobosComponent } from './robos/robos.component';
import { PatrocinadoresComponent } from './patrocinadores/patrocinadores.component';
import { GicComponent } from './gic/gic.component';
import { ComunidadeComponent } from './comunidade/comunidade.component';
import { DevelopmentComponent } from './development/development.component';
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
    path: 'patrocinadores',
    component: PatrocinadoresComponent
  },
  {
    path: 'gic',
    component: GicComponent
  },
  {
    path: 'comunidade',
    component: ComunidadeComponent
  },
  {
    path: 'development',
    component: DevelopmentComponent
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
