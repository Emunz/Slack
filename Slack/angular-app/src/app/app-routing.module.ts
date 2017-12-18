import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegistrationComponent } from './login-registration/login-registration.component'
import { ChatComponent } from './chat/chat.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginRegistrationComponent
  },
  {
    path: 'conversations',
    pathMatch: 'full',
    component: ChatComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
