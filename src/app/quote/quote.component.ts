import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  userQuotes = [
    new Quote(1, 'I just knew there were stories I wanted to tell.', 'Octavia E. Butler', 0, 0, new Date(2018, 23, 10)),
    new Quote(2, 'All good books are alike in that they are truer than .', '- Ernest Hemingway', 0, 0, new Date(2018, 23, 10)),
    new Quote(3, 'When written in Chinese, the word crisis is composed of two ch', '- John F. Kennedy', 0, 0, new Date(2018, 23, 10)),
    new Quote(4, 'The play was a great success, but the audience was a disaster.', 'Oscar Wilde', 0, 0, new Date(2018, 23, 10)),
    new Quote(5, 'Noise proves nothing. Often a hen who has merely laid an ', ' Mark Twain', 0, 0, new Date(2018, 7, 10))
  ];

  toogleDetails(index) {
    this.userQuotes[index].showDetail = !this.userQuotes[index].showDetail;
  }
  constructor() { }

  ngOnInit() {
  }

}
