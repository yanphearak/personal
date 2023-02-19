import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  buttonValue:string = "Hello World";

  loading(){
    this.buttonValue = "Compile..."
    
    setTimeout(() => {
      this.buttonValue = "Running..."
      setTimeout(()=>{
        alert("Hello World")
        this.buttonValue = "Hello World";
      },1000)
    }, 2000);
  }
}
