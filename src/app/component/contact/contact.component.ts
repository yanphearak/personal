import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public form!:FormGroup;
  constructor() { }
  isNotify:boolean = false;

  ngOnInit(): void {
    this.buildForm();
  }



  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      number: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      des    : new FormControl('',[Validators.required])
    });
  }

  submit(){
    this.isNotify = true;
    // alert("អត់ទាន់បានធ្វើ API ទេ XD, contact តាមfacebookសិន​ក៍បាន😛")
    setTimeout(()=>{
      this.isNotify = false;
    },3000);
    console.log(this.form.value)
    if(!this.form.valid){
      console.log("Error")
    }
  }
}
