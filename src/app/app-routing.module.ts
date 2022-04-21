import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
  path: 'character',  loadChildren: () =>   import('./character/character.module').then(   (m) => m.CharacterModule   ),
  canActivate: [AuthGuard],
}, 
{
  path: 'location',  loadChildren: () =>   import('./location/location.module').then(   (m) => m.LocationModule   ),
  canActivate: [AuthGuard],
}, 
{
  path: 'episodes',  loadChildren: () =>   import('./episodes/episodes.module').then(   (m) => m.EpisodesModule   ),
  canActivate: [AuthGuard],
}, 
{ path: '**', pathMatch: 'full', redirectTo: '/character' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
