import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //Property binding when recieving data from parent component
  @Input() title = '';
  @Input() userName = '';
  @Input() content = '';
  @Input() imageUrl = '';

  constructor() { }

  ngOnInit(): void {
  }

}
