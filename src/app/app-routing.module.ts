import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnauthGuard } from 'src/app/shared/guard/unauth.guard';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { LOGIN_PAGE, LIST_PAGE } from './constants/common';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: LOGIN_PAGE,
    loadChildren: () =>
      import('src/app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: LIST_PAGE,
    canActivate: [UnauthGuard],
    canLoad: [UnauthGuard],
    loadChildren: () =>
      import('src/app/youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
