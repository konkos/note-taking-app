import { Component, OnInit } from '@angular/core';
import { Note } from '../models/Note.model';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-notes-board',
  templateUrl: './notes-board.component.html',
  styleUrls: ['./notes-board.component.css']
})
export class NotesBoardComponent implements OnInit {


  notes:Note[] = []

  constructor(private noteService:NoteServiceService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    // let check = this.noteService.checkNotesEquality(this.notes)
      this.notes = this.noteService.notesList
  }

}
