import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Abhishek Yadav: fullstack developer';
  
  public open = () => {
    window.open("../assets/abhishekyadav-resume.pdf","_blank");
  }
}
