import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { VeiwComponent } from './veiw/veiw.component';
import { HomeComponent } from './SimpleComponents/home/home.component';
import { LoginComponent } from './SimpleComponents/login/login.component';
import { LostComponent } from './SimpleComponents/lost/lost.component';
import { EditComponent } from './edit/edit.component';
import { VeiwElementModalComponent } from './veiw/veiw-element-modal/veiw-element-modal.component';

const child_routes_for_veiw: Routes = [{ path: 'veiw-item', component: VeiwElementModalComponent }];

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'add', component: AddComponent },
  { path: 'veiw', component: VeiwComponent, children: child_routes_for_veiw },
  // { path: 'veiw', component: VeiwComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit-jewelry-page', component: EditComponent },
  { path: 'pagenotfound-lost-error404', component: LostComponent },
  { path: '**', redirectTo: '/pagenotfound-lost-error404', pathMatch: 'full' },
];
