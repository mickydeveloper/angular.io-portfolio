import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

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

    router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
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
