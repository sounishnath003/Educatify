import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css'],
})
export class ClassCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.tempColor);
  }
  copyClip() {
    alert('Class code copied!');
  }
  bgColor: string[] = [
    '',
    '#080357',
    '#7700b3',
    '#CF5C36',
    '#F35B04',
    '#171123',
    '#372248',
    '#CA2E55',
    '#2191FB',
  ];
  tempColor = this.bgColor[Math.floor(Math.random() * this.bgColor.length) + 1];
}
