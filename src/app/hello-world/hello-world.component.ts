import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  // constructor() { }
  a:number = 5;
  ngOnInit(): void {
    console.log("Hello World");
  }
  myFirstFunction(): void{
    console.log("Hii");
  }

}
