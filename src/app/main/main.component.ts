import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../models/Note.model'
import { ApiResponse, JokeValue } from '../models/response.model';
import { NoteServiceService } from '../note-service.service';
import { ApiIntegrationService } from '../services/api-integration.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  notes:Note[] = []
  popUp:Boolean=false
  
  
  constructor(private noteService:NoteServiceService, private router:Router) { } //

  ngOnInit(): void {
    /* EXAMPLE OF API CALL 
      this.apiService.getApiResult(
      ['Programming','Miscellaneous','Dark','Pun','Spooky','Christmas'],
      ['nsfw','religious','political','racist','sexist','explicit'])
    .subscribe(result => console.log(`SERVICE RESULT:: JOKE:${result.joke} CATEGORY:${result.category} ${result.safe} ${result.type}`)) */
  }

  ngDoCheck(){
    // let check = this.noteService.checkNotesEquality(this.notes)
      this.notes = this.noteService.notesList
  }

  navigateToCreateNote(){
    this.router.navigate(['createNote'])
    console.log('clicked navigate');
  }

  openPopUp(){
    // TODO add popup screen
    console.log('popUp');
    this.popUp=true
    
  }

  
}
