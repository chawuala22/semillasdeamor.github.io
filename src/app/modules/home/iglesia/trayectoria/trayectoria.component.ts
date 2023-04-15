import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trayectoria',
  templateUrl: './trayectoria.component.html',
  styleUrls: ['./trayectoria.component.scss'],
})
export class TrayectoriaComponent implements OnInit {
  info = [
    {
      img: 'https://static.vecteezy.com/system/resources/previews/005/911/641/non_2x/business-man-icon-user-account-free-vector.jpg',
      tittle: '+1.300 Personas',
      text: 'Han aceptado a Jesús',
    },
    {
      img: 'https://static.vecteezy.com/system/resources/previews/005/911/641/non_2x/business-man-icon-user-account-free-vector.jpg',
      tittle: '+540 Personas',
      text: 'Se han bautizado',
    },
    {
      img: 'https://static.vecteezy.com/system/resources/previews/005/911/641/non_2x/business-man-icon-user-account-free-vector.jpg',
      tittle: '80',
      text: 'Matrimonios celebrados',
    },
    { img: 'https://static.vecteezy.com/system/resources/previews/005/911/641/non_2x/business-man-icon-user-account-free-vector.jpg', tittle: '3', text: 'Encuentros ABBA' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
