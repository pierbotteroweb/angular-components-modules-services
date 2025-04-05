// 3️⃣ quote.component.ts – UI + Lifecycle Hook

import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-quote',
  template: `<div class="quote-box" >
                <h2>{{ quote }}</h2>
                <button (click)="loadQuote()">Get Another Quote</button>
             </div>`,
  styles: [`
    .quote-box{
      padding:20px;
      border: 1px solid #ccc;
      margin-top: 50px;
      text-align:center
    }
    button{
      margin-top: 15px;
      padding: 10px;
    }
    `]
})
export class QuoteComponent implements OnInit {
  quote = ''

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.loadQuote()
  }

  loadQuote() {
    this.quote = this.quoteService.getRandomQuote();
  }

}
