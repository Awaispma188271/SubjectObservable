import { DataService } from './services/dataService';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent {
  title = 'subjectObservable';

  constructor(private dataService:DataService){

  }
}
