// 5️⃣ quote.module.ts – Feature Module (Lazy-loaded)

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 6️⃣ app-routing.module.ts – Enable Lazy Loading
  { path:'quote', loadChildren: () => import('./quote/quote.module').then(m=> m.QuoteModule) },
  { path: '', redirectTo: 'quote', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
