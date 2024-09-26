import { Component,} from '@angular/core';
import { Itemlist } from 'src/app/interfaces/itemlist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductor-home',
  templateUrl: './conductor-home.page.html',
  styleUrls: ['./conductor-home.page.scss'],
})
export class ConductorHomePage {

  vinculos: Itemlist[] = [{
    ruta: '/conductor-viajes',
    titulo: 'conductor-viajes',
    icono: 'car-outline'
  },
  {
    ruta: '/solucitud',
    titulo: 'solicitud',
    icono: 'mail-outline'
  },
  ]

  constructor() { }

  ngOnInit() {
  }

}
