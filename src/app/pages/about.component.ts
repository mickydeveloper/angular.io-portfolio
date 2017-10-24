import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as AOS from 'aos/dist/aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  ngOnInit(): void {
    AOS.init();
  }
}
