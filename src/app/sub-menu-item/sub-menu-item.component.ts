import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-menu-item',
  templateUrl: './sub-menu-item.component.html',
  styleUrls: ['./sub-menu-item.component.css']
})
export class SubMenuItemComponent implements OnInit {
  @Input() child: any;
  constructor() { }

  ngOnInit() {
  }

}
