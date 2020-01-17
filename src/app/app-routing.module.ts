import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'home', component :HomeComponent},
  { path :'gallery', component : GalleryComponent, canActivate: [AuthGuard] },
  {path : 'about', component : AboutComponent},
  {path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
