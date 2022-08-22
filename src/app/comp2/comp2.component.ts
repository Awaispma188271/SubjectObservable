import { DataService } from './../services/dataService';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']

})
export class Comp2Component implements OnInit {
  public userName!:string;

  constructor(private dataService:DataService){}

  public ngOnInit(): void {
   this.dataService.attachUserName().subscribe(res =>{
    this.userName = res;
    console.log(this.userName);
    
    
    
   })
  }
  onChange(){
    
    this.dataService.notifyUsernameChange(this.userName);
    
  }

}
