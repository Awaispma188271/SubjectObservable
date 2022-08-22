import { DataService } from './../services/dataService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  userName!: string;

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.dataService.attachUserName().subscribe((res) => {
      this.userName = res;
    });
  }
}
