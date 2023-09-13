import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
  
})
export class Assignment3Component {
  toggle :boolean= true;
  log=[]
  Ontoggle(){
    this.toggle=!this.toggle
    this.log.push(this.log.length +1)

  }
}
