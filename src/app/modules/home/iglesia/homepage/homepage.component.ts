import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  overlayText: string =
    '¡Somos una casa para todos! Construimos una comunidad, en la que amamos a Dios y amamos a las personas. Existimos para traer reforma a la familia, llevar buenas noticias a los corazones y adorar al padre. Gracias por estar aquí, ya eres parte de la familia.';
  constructor() {}

  ngOnInit(): void {}
}
