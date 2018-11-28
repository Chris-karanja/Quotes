import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  userQuotes = [
    new Quote(1, 'Quote number 1', 'kay', 0, 0, new Date(2018, 7, 10)),
    new Quote(2, 'Quote number 2', 'king', 0, 0, new Date(2018, 7, 10)),
    new Quote(3, 'Quote number 3', 'lucy', 0, 0, new Date(2018, 7, 10)),
    new Quote(4, 'Quote number 4', 'kena', 0, 0, new Date(2018, 7, 10)),
    new Quote(5, 'Quote number 5', 'Weshy', 0, 0, new Date(2018, 7, 10))
  ];

  constructor() { }

  ngOnInit() {
  }

}
