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
import { NaotecnicoComponent } from './naotecnico/naotecnico.component';
import { CadComponent } from './cad/cad.component';
import { HomeComponent } from './home/home.component';7

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
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
    path: 'naotecnico',
    component: NaotecnicoComponent
  },
  {
    path: 'cad',
    component: CadComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
