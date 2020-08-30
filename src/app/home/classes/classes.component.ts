import { Component, OnInit } from '@angular/core';
import {ClassData} from '../../models/classData.model'

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
  classesDataDummy: any[] = [
    {
      title: 'HTML Crash course',
      desc: 'Web development',
      student: 0,
      classCode: 'aac-xsx-adv',
      colorCode: this.bgColor[
        Math.floor(Math.random() * this.bgColor.length - 1) + 1
      ],
      userId: 12,
    },
    {
      title: 'PHP Crash course',
      desc: 'Web development',
      student: 1,
      classCode: 'bdc-cwx-kusx',
      colorCode: this.bgColor[
        Math.floor(Math.random() * this.bgColor.length - 1) + 1
      ],
      userId: 31,
    },
  ];
}
