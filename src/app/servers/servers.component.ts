import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
AllowNewServer = false;
status="server was not created";
servername=''
constructor(){
setTimeout(()=>{
  this.AllowNewServer=true;

},2000);
}

clicked(){
  this.status="server is started and name is "+ this.servername;
  console.log("clicked");

}
update(event:any){
  this.servername=(<HTMLInputElement>event.target).value;
}
}
