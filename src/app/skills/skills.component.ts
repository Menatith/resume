import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  certificates = [
    {
      title: 'Angular Level 1 Certification',
      date: new Date('01-07-2024'),
      organisation: 'Angular Training',
    },
    {
      title: 'Mendix Intermediate Developer',
      date: new Date('01-05-2024'),
      organisation: 'Mendix',
    },
    {
      title: 'Mendix Rapid Developer',
      date: new Date('01-04-2024'),
      organisation: 'Mendix',
    },
    {
      title: 'Azure CosmosDB Developer',
      date: new Date('01-10-2022'),
      organisation: 'Microsoft',
    },
    {
      title: 'AgileDS Foundation',
      date: new Date('01-02-2022'),
      organisation: 'Agile Business Consortium',
    },
    {
      title: 'Power BI Data Analyst Associate',
      date: new Date('01-05-2021'),
      organisation: 'Microsoft',
    },
    {
      title: 'Azure Data Engineer Associate',
      date: new Date('01-03-2021'),
      organisation: 'Microsoft',
    },
    {
      title: 'Azure Data Fundamentals',
      date: new Date('01-12-2020'),
      organisation: 'Microsoft',
    },
    {
      title: 'Programming in HTML5 with JavaScript and CSS3',
      date: new Date('01-06-2020'),
      organisation: 'Microsoft',
    },
    {
      title: 'ITIL Foundation Level',
      date: new Date('01-02-2020'),
      organisation: 'PeopleCert',
    },
  ];

  constructor() {
    this.certificates.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
