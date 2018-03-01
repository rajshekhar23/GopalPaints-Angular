import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public lat: number;
  public lng: number;
  constructor() { }

  ngOnInit() {
    this.lat = 18.626076;
    this.lng = 73.812157;
  }

}
