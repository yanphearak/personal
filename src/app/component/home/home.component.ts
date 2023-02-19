import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";
import { ApiService } from 'src/app/service/Api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _service: ApiService
  ) { }
  ngOnInit(): void {
    AOS.init();
    this.typeWriter();
    this.home();
  }

  i = 0;
  txt = 'Phearak  |  យ៉ាន់ ភារក្ស'; /* The text */
  speed = 200; /* The speed/duration of the effect in milliseconds */
  name = "";

  home(){
    this._service.home().subscribe((res:any)=>{
      console.log(res)
    });
  }

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
