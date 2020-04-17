import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome-screen', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'welcome-screen',
    loadChildren: () => import('./pages/welcome-screen/welcome-screen.module').then( m => m.WelcomeScreenPageModule)
  },
  {
    path: 'sign-in-screen',
    loadChildren: () => import('./pages/sign-in-screen/sign-in-screen.module').then( m => m.SignInScreenPageModule)
  },
  {
    path: 'sign-in-telefonnummer',
    loadChildren: () => import('./pages/sign-in-telefonnummer/sign-in-telefonnummer.module').then( m => m.SignInTelefonnummerPageModule)
  },
  {
    path: 'telefonnummer-bestaetigen',
    loadChildren: () => import('./pages/telefonnummer-bestaetigen/telefonnummer-bestaetigen.module').then( m => m.TelefonnummerBestaetigenPageModule)
  },
  {
    path: 'start-screen',
    loadChildren: () => import('./pages/start-screen/start-screen.module').then( m => m.StartScreenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
