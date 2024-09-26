import { Component } from '@angular/core';
import { Itemlist } from '../interfaces/itemlist';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  vinculos:Itemlist[]=[{
    ruta:'/viajes',
    titulo:'Viajes',
    icono:'apps-outline'
  },
  {
    ruta:'/conductor',
    titulo: 'Conductor',
    icono: 'car'
  },
];

  constructor() {}

  ngOnInit(){

  }
}
