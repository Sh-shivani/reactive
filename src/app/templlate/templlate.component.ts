import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templlate',
  templateUrl: './templlate.component.html',
  styleUrls: ['./templlate.component.css']
})
export class TempllateComponent implements OnInit { 
  onSubmit(data: any)
  {
    console.warn(data);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
