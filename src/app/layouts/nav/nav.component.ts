import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {

  navItems = [
    { link: '', title: 'Home' },
    { link: '/weathers/list', title: 'Weathers' }
  ];

  constructor() { }
}
