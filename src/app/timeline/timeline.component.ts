import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  career = [
    {
      startDate: new Date('2018-10-1'),
      endDate: new Date('2019-2-1'),
      jobTitle: 'Oproepkracht',
      jobCompany: 'OGD ICT-diensten',
      jobDescription:
        'Bij verschillende klanten werkplek apparatuur vervangen op basis van oproep.',
    },
    {
      startDate: new Date('2019-3-1'),
      endDate: new Date('2021-10-1'),
      jobTitle: 'Servicedesk en werkplekbeheerder',
      jobCompany: 'OGD ICT-diensten',
      jobDescription:
        'Bij een grote multinational in de maakindustrie gewerkt als eerste- en tweedelijns servicedesk medewerker en als werkplekbeheerder op de Enschede vestiging.',
    },
    {
      startDate: new Date('2021-10-1'),
      endDate: new Date('2022-4-1'),
      jobTitle: 'Ontwikkelaar',
      jobCompany: 'OGD ICT-diensten',
      jobDescription:
        'Verschillende projecten, zowel individueel als in teamverband, uiteenlopend van opzetten van een data warehouse tot Power Automate Flows en PowerShell scripts voor synchronisatie AD met HR software.',
    },
    {
      startDate: new Date('2022-5-1'),
      endDate: 'Huidig',
      jobTitle: 'Software Ontwikkelaar',
      jobCompany: 'OGD ICT-diensten',
      jobDescription:
        'Met een front-end focus aan verschillende websites en applicaties gewerkt, zowel individueel als in teamverband. Als onderdeel van een scrum team heb ik op een Wordpress website een ACF-gebaseerd componenten systeem ontwikkeld en designs geïmplementeerd. Ook ervaring met Angular, Blazor, APIs, Vue.js en Nuxt.',
    },
  ];
  education = [
    {
      startDate: new Date('1-8-2005'),
      endDate: new Date('1-7-2011'),
      courseTitle: 'VWO (gymnasium)',
      courseLocation: 'Lorentz Casimir Lyceum',
      courseDescription:
        'Dubbel profiel Natuur & Gezondheid en Natuur & Techniek.',
    },
    {
      startDate: new Date('1-8-2011'),
      endDate: new Date('1-6-2015'),
      courseTitle:
        'Bachelor of Science Biologie, specialisatie Ecologie & Biodiversiteit',
      courseLocation: 'Wageningen University & Research',
      courseDescription: '',
    },
    {
      startDate: new Date('1-7-2015'),
      endDate: new Date('1-3-2018'),
      courseTitle:
        'Master of Science Biology, specialisatie Conservation and Systems Ecology',
      courseLocation: 'Wageningen University & Research',
      courseDescription: '',
    },
  ];

  constructor() {
    this.career.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
    this.education.sort(
      (a, b) => b.startDate.getTime() - a.startDate.getTime()
    );
  }
}
