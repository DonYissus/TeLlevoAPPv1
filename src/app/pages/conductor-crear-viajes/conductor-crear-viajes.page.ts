import { Component, OnInit , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-conductor-crear-viajes',
  templateUrl: './conductor-crear-viajes.page.html',
  styleUrls: ['./conductor-crear-viajes.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ConductorCrearViajesPage implements OnInit {
  public datetime: any;
  constructor() { }

  ngOnInit() {
    const date = new Date();

    // Set the value of the datetime to 2 days
    // before the current day
    let dayChange = -2;

    // If the day we are going to set the value to
    // is in the previous month then set the day 2 days
    // later instead so it remains in the same month
    if (date.getDate() + dayChange <= 0) {
      dayChange = -dayChange;
    }

    // Set the value of the datetime to the day
    // calculated above
    date.setDate(date.getDate() + dayChange);
    this.datetime = date.toISOString();
  }

  viajecreado() {
    console.log("viaje creado")
  }
  }

