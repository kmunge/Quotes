import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'DeejayRuxx','Hustle untill you dont have to introduce yourself!','H.J Baba',new Date(2018,3,14)),
    new Quote(2,'JackyWanzah','The universe conspires to give you what you lack','Anonymous',new Date(2018,6,9)),
    new Quote(3,'Munge','The no human who is limited, if you focus you go beyond!','Kipchoge',new Date(2018,1,12)),
    new Quote(4,'DeejayRuxx','Hustle untill you dont have to introduce yourself!','H.J Baba',new Date(2018,2,14)),
    new Quote(5,'DeejayRuxx','Hustle untill you dont have to introduce yourself!','H.J Baba',new Date(2018,3,14)),
    new Quote(6,'DeejayRuxx','Hustle untill you dont have to introduce yourself!','H.J Baba',new Date(2018,4,7)),
  ]

  revealDetails(i: string | number){
    this.quotes[i].showDetails = !this.quotes[i].showDetails;
  }
 
  upvote(i){
    this.quotes[i].upvotes+=1
  }
  downvote(i){
    this.quotes[i].downvotes+=1
  }
  delQuote($event: number) {
    this.quotes.splice($event, 1)
  }

 addnewQuote(quote: Quote){
    this.quotes.push(quote) 
  } 
  constructor() { }

  ngOnInit() {

  }

}
