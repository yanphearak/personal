import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import jsreport from '@jsreport/browser-client'
@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.css']
})
export class ResumesComponent implements OnInit {

  jsreportUrl = "http://localhost:5488/";
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
