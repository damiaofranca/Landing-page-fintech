import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  isPressedMenu: boolean = false;
  isInStartPage: boolean = true;
  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
    fromEvent(document, 'scroll').subscribe((event: Event) => {
      console.log(window.scrollY);
      window.scrollY > 60
        ? (this.isInStartPage = false)
        : (this.isInStartPage = true);
    });
  }

  pressMenu() {
    this.isPressedMenu = !this.isPressedMenu;
    if (this.isPressedMenu) {
      this.renderer2.setStyle(document.body, 'overflow-y', 'hidden');
    } else {
      this.renderer2.removeStyle(document.body, 'overflow-y');    
    }
  }
}
