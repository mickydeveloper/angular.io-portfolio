import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  clicked = false;

  constructor(router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.clicked = false;
      }
    });
  }

  toggleNav() {
    if (this.clicked === false) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
  }
}
