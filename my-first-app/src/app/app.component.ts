import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
name = 'Osman';
showSecret = false;
log = [];
onToggleDetails(){
  this.showSecret = !this.showSecret;
  this.log.push(new Date());
  

}
}
