import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'header', component: HeaderComponent },
{ path: 'footer', component: FooterComponent },
{ path: 'home', component: HomeComponent },
{ path: 'formulario', component: FormularioComponent },
{ path: 'comentarios', component: ComentariosComponent }
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule { }
