// 2️⃣ quote.service.ts – The Logic (Service + DI)

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quotes = [
    "Do or do not. There is no try. — Yoda",
    "Simplicity is the soul of efficiency. — Austin Freeman",
    "Talk is cheap. Show me the code. — Linus Torvalds"
  ]

  getRandomQuote(): string {
    const index = Math.floor(Math.random() * this.quotes.length)
    return this.quotes[index]
  }
}
