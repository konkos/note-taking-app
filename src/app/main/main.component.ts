import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../models/Note.model'
import { NoteServiceService } from '../note-service.service';
import { ApiIntegrationService } from '../services/api-integration.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  notes:Note[] = []
  
  constructor(private noteService:NoteServiceService, private router:Router) { } //, private apiService:ApiIntegrationService

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
}
