import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss'],
})
export class TestimoniosComponent implements OnInit {
  
  testimonios = [
    {
      img: 'https://img.freepik.com/vector-premium/personaje-avatar-moda-icono-hombres-ilustracion-vector-plano-gente-alegre-feliz-marco-redondo-retratos-masculinos-grupo-equipo-adorables-chicos-aislados-sobre-fondo-blanco_275421-281.jpg?w=2000',
      title: 'asdas',
      descripcion: 'sadaqawsdsd',
    },
    {
      img: 'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1608/tuktukdesign160800065/61010902-icono-de-usuario-hombre-perfil-hombre-de-negocios-avatar-ilustraci%C3%B3n-vectorial-persona-glifo.jpg',
      title: 'asdas',
      descripcion: 'sadasd',
    },
    {
      img: '../../../../../assets/videos/video1.mp4',
      title: 'asdas',
      descripcion: 'sadasd',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
