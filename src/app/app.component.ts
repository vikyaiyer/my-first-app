import { Component } from '@angular/core';

@Component({
  selector: 'product-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
  pageTitle: string = 'Product Managment Demo';
}
