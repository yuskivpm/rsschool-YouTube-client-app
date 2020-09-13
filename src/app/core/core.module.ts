import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { SortButtonComponent } from './components/sort-button/sort-button.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SortButtonComponent,
    UserLoginComponent,
    FooterComponent,
    NotFoundComponent,
    AdminComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class CoreModule { }
