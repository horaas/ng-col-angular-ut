import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loadingMessage;

  constructor() {
    // Initialy I want to display the loading message.
    this.loadingMessage = 'Ey! We are loading something';
  }

  ngOnInit() {
    // Then when the component is loaded we show something different
    setTimeout(() => {
      this.loadingMessage = 'Something has been loaded!';      
    }, 2000);
  }

}
