import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularEventBinding';
  data:boolean=true

  showMe(){
    this.data = !this.data;
  }
}
