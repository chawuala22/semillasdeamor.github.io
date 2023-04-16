import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  ruta: string | undefined;
  iglesia: string = '../../../assets/images/iglesia.PNG';
  conexion: string = '../../../assets/images/conexion.PNG';

  constructor(private router: Router) {
    this.ruta = this.router.url.split('/').pop();
  }

  ngOnInit(): void {}
}
