import { Component, OnInit } from '@angular/core';
import { init, destroy } from 'ityped';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'I create to';

  ngOnInit() {
    init(`#type`, {
      // required - for now, only accepting texts
        strings: ['Innovate', 'Enjoy', 'Enrich'],
        typeSpeed: 100, //default
        backSpeed: 50, //default
        startDelay: 500, //default
        backDelay: 500, //default
        loop: true, //default
        showCursor: true, //default
        cursorChar: '|', //default
        onFinished: function(){}
    });
  }
}
