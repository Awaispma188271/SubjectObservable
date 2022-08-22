import { DataService } from './../services/dataService';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  userName!: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.attachUserName().subscribe((newValue) => {
      this.userName = newValue;
    });
  }

  onChange() {
    this.dataService.notifyUsernameChange(this.userName);
  }
}
