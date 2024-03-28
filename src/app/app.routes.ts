import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressFormComponent } from './address-form/address-form.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'content', component: AddressFormComponent },
  { path: 'analytics', component: AddressFormComponent },
  { path: 'comments', component: AddressFormComponent },
];
