import { style } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binging',
  templateUrl: './data-binging.component.html',
  styleUrls: ['./data-binging.component.css']
})
export class DataBingingComponent {
inputName="";
constructor(){

}
Reset(){
  this.inputName="";
  console.log("working");
}
}
