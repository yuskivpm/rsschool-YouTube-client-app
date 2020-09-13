import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnauthGuard } from 'src/app/core/guard/unauth.guard';
import { SkipIfAuthGuard } from 'src/app/core/guard/skip-if-auth.guard';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { AdminComponent } from './core/pages/admin/admin.component';

import { LOGIN_PAGE, LIST_PAGE, ADMIN_PAGE } from './constants/common';

const routes: Routes = [
  {
    path: '',
    canActivate: [SkipIfAuthGuard],
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: LOGIN_PAGE,
    canActivate: [SkipIfAuthGuard],
    loadChildren: () =>
      import('src/app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: LIST_PAGE,
    canActivate: [UnauthGuard],
    loadChildren: () =>
      import('src/app/youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {
    path: ADMIN_PAGE,
    canActivate: [UnauthGuard],
    component: AdminComponent,
  },
  {
    path: '**',
    canActivate: [UnauthGuard],
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
