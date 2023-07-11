import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'empezar-recojo',
    loadChildren: () => import('./empezar-recojo/empezar-recojo.module').then( m => m.EmpezarRecojoPageModule)
  },
  {
    path: 'cargar-paquete',
    loadChildren: () => import('./cargar-paquete/cargar-paquete.module').then( m => m.CargarPaquetePageModule)
  },
  {
    path: 'cargar-documento',
    loadChildren: () => import('./cargar-documento/cargar-documento.module').then( m => m.CargarDocumentoPageModule)
  },
  {
    path: 'documentos-cargados',
    loadChildren: () => import('./documentos-cargados/documentos-cargados.module').then( m => m.DocumentosCargadosPageModule)
  },
  {
    path: 'edit-paquete',
    loadChildren: () => import('./edit-paquete/edit-paquete.module').then( m => m.EditPaquetePageModule)
  },
  {
    path: 'cargados-paquetes',
    loadChildren: () => import('./cargados-paquetes/cargados-paquetes.module').then( m => m.CargadosPaquetesPageModule)
  },
  {
    path: 'lista-recojos',
    loadChildren: () => import('./lista-recojos/lista-recojos.module').then( m => m.ListaRecojosPageModule)
  },
  {
    path: 'lista-gui-emision',
    loadChildren: () => import('./lista-gui-emision/lista-gui-emision.module').then( m => m.ListaGuiEmisionPageModule)
  },
  {
    path: 'gui-emision-transportista',
    loadChildren: () => import('./gui-emision-transportista/gui-emision-transportista.module').then( m => m.GuiEmisionTransportistaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
