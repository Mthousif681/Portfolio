import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { NgModule } from '@angular/core';
import { deactivateGuard } from './components/contact/deactivate.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent, canDeactivate: [deactivateGuard] },
  { path: 'form-contact', component: FormContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } // Wildcard route for unknown paths
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }