import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  certificates = [
    {
      title: '',
      date: new Date(),
      organisation: '',
    },
    {
      title: '',
      date: new Date(),
      organisation: '',
    },
    {
      title: '',
      date: new Date(),
      organisation: '',
    },
    {
      title: '',
      date: new Date(),
      organisation: '',
    },
    {
      title: '',
      date: new Date(),
      organisation: '',
    },
    {
      title: '',
      date: new Date(),
      organisation: '',
    },
    {
      title: '',
      date: new Date(),
      organisation: '',
    },
    {
      title: '',
      date: new Date(),
      organisation: '',
    },
    {
      title: '',
      date: new Date(),
      organisation: '',
    },
    {
      title: '',
      date: new Date(),
      organisation: '',
    },
  ];

  constructor() {
    this.certificates.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
