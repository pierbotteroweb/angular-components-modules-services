import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote.component';
import { QuoteRoutingModule } from './quote-routing.module';



@NgModule({
  declarations: [
    QuoteComponent
  ],
  imports: [
    CommonModule,
    QuoteRoutingModule
  ]
})
export class QuoteModule { }
