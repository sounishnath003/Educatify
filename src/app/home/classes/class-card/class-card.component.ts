import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClassData } from '../../../models/classData.model'

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css'],
})
export class ClassCardComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() classData: ClassData;
  color: String = '';
  ngOnInit(): void {
    this.color = this.classData.colorCode;
    localStorage.removeItem('currClassData');
  }
  copyClip() {
    alert('Class code copied!');
  }

  bgColor: string[] = [
    '#2191AB',
    '#080357',
    '#7700b3',
    '#CF5C36',
    '#F35B04',
    '#171123',
    '#372248',
    '#CA2E55',
    '#2191FB',
  ];
  tempColor = this.bgColor[
    Math.floor(Math.random() * this.bgColor.length - 1) + 1
  ];

  navigateClass(classData:ClassData) {
    localStorage.setItem('currClassData',JSON.stringify(classData));
    this.router.navigateByUrl(`/class/${classData.classCode}`);
  }
}
