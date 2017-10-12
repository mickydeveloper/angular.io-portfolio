import { Component, OnInit } from '@angular/core';
import { init, destroy } from 'ityped';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    init(`#type`, {
      // required - for now, only accepting texts
      strings: ['Innovate', 'Enjoy', 'Enrich'],
      typeSpeed: 100, //default
      backSpeed: 50, //default
      startDelay: 1000, //default
      backDelay: 1000, //default
      loop: true, //default
      showCursor: true, //default
      cursorChar: '|', //default
      onFinished: function () { }
    });
  }
}
