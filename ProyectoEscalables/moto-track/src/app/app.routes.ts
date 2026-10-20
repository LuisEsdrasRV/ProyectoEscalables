import { Routes } from '@angular/router';

import { CatalogComponent } from './pages/catalog/catalog';

export const routes: Routes = [
 
  { path: '', component: CatalogComponent },
  { path: '**', redirectTo: '' } 
];