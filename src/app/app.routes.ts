import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './home/cadastrar/cadastrar.component';
import { LoginComponent } from './home/login/login.component';

export const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'cadastrar', component: CadastrarComponent },
      { path: 'login', component: LoginComponent},
    ]
  },
];
