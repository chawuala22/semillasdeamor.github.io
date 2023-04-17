import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trayectoria',
  templateUrl: './trayectoria.component.html',
  styleUrls: ['./trayectoria.component.scss'],
})
export class TrayectoriaComponent implements OnInit {
  info = [
    {
      img: '../../../../../assets/images/jesus.png',
      tittle: '+1.300 Personas',
      text: 'Han aceptado a Jesús',
    },
    {
      img: '../../../../../assets/images/bautizo.png',
      tittle: '+540 Personas',
      text: 'Se han bautizado',
    },
    {
      img: '../../../../../assets/images/matrimonioo.png',
      tittle: '80',
      text: 'Matrimonios celebrados',
    },
    { img: '../../../../../assets/images/encuentro.png', tittle: '3', text: 'Encuentros ABBA' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
