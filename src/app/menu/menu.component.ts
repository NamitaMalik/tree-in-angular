import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/data.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  model: any;
  constructor() { }

  ngOnInit() {
    this.model = (data as any).data;
  }

}
