import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  listOfNames: string[] = ['reilan', 'sel', 'goku', 'boo'];

  addName() {
    console.log('addName is working!');
    this.listOfNames.push(this.name);

    console.log(this.listOfNames);
  }
  deleteFirst() {
    this.listOfNames.splice(0, 1);
  }
}
