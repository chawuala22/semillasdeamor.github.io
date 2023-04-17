import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss'],
})
export class TestimoniosComponent implements OnInit {
  testimonios = [
    {
      img: '../../../../../assets/images/bautizo.png',
      title: 'Miguel Rojas',
      descripcion: 'Esto es una breve descipcion de mi testimonio',
    },
    {
      img: '../../../../../assets/images/jesus.png',
      title: 'Nicolas Fuentes',
      descripcion: 'Esto es una breve descipcion de mi testimonio',
    },
    {
      img: '../../../../../assets/images/encuentro.png',
      title: 'Milena Guerra',
      descripcion: 'Esto es una breve descipcion de mi testimonio',
    },
    {
      img: '../../../../../assets/images/encuentro.png',
      title: 'Milena Guerra',
      descripcion: 'Esto es una breve descipcion de mi testimonio',
    },
  ];
  constructor(private _config: NgbCarouselConfig) {
    _config.pauseOnHover = true;
  }

  ngOnInit(): void {}
}
