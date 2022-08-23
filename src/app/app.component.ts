import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isIt: boolean = false;

  selectAll(event: any) {
    console.log(event);
    this.isIt = true;
    console.log(this.isIt);
  }

  unselectAll(event: any) {
    console.log('unselectAll');
    this.isIt = false;
  }
}
