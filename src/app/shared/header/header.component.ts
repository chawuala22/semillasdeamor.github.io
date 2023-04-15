import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ruta: string | undefined;
  iglesia: string = '../../../assets/images/iglesia.PNG'
  conexion: string = '../../../assets/images/conexion.PNG'
  constructor(
    private router: Router
  ) {
    this.ruta = this.router.url.split('/').pop();
  }

  ngOnInit(): void {
    console.log(this.ruta);
    
  }

}
