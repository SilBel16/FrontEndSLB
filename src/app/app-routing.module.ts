import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditinfoComponent } from './componentes/acerca-de/editinfo.component';
import { NewinfoComponent } from './componentes/acerca-de/newinfo.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditredesComponent } from './componentes/header/editredes.component';
import { NewredesComponent } from './componentes/header/newredes.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditproyectoComponent } from './componentes/proyectos/editproyecto.component';
import { NewproyectoComponent } from './componentes/proyectos/newproyecto.component';
import { EditskillComponent } from './componentes/skills/editskill.component';
import { EditsoftskillComponent } from './componentes/skills/editsoftskill.component';
import { NewskillComponent } from './componentes/skills/newskill.component';
import { NewsoftskillComponent } from './componentes/skills/newsoftskill.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'login', component:LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},
  {path:'editedu/:id', component: EditeducacionComponent},
  {path:'nuevopro', component: NewproyectoComponent},
  {path:'editpro/:id', component: EditproyectoComponent},
  {path:'nuevaskill', component: NewskillComponent},
  {path:'editskill/:id', component: EditskillComponent},
  {path:'nuevasoftskill', component:NewsoftskillComponent},
  {path:'editsoftskill/:id', component: EditsoftskillComponent},
  {path:'nuevared', component:NewredesComponent},
  {path:'editred/:id', component: EditredesComponent},
  {path:'nuevainfo', component:NewinfoComponent},
  {path:'editinfo/:id', component: EditinfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
