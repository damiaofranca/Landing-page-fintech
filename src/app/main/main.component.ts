import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  isPressedMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  pressMenu() {
    this.isPressedMenu = !this.isPressedMenu;
  }

}
