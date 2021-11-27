import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'note-taking-app';
  noShow = false

  constructor(private router:Router){}

  navigateToHomeScreen(){
    this.router.navigate([""])
  }
}
