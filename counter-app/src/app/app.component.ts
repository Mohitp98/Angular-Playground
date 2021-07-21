import { Component } from '@angular/core';

// defination of app component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',    // location of template
  styleUrls: ['./app.component.css']      // location of css
})
export class AppComponent {
  title: string = 'Counter App';

  count: number = 0;

  handleIncrease = () => {
    if (this.count == 99) {
      this.handleReset()
      return
    }
    this.count = this.count + 1;
  }

  handleDecrease = () => {
    if (this.count <= 0) {
      this.count = 0;
      return
    }
    this.count = this.count - 1;
  }

  handleReset = () => {
    this.count = 0;
  }

}
