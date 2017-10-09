import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<navbar></navbar>
            <jumbotron></jumbotron>
            <router-outlet></router-outlet>`,
})
export class AppComponent  {
  
}
