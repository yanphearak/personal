import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    AOS.init();
    this.typeWriter();
  }

  i = 0;
  txt = 'Phearak | យ៉ាន់ ភារក្ស'; /* The text */
  speed = 300; /* The speed/duration of the effect in milliseconds */
  name = "";

  typeWriter() {
    if (this.i < this.txt.length) {
      this.name += this.txt.charAt(this.i);
      this.i++;
      setTimeout(()=>{
        this.typeWriter();
      }, this.speed);
    }
    else{
      this.name = "";
      this.i = 0;
      this.typeWriter();
    }
}

}
