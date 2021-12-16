import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/Note.model';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note:Note = {
    title:'',
    content:'',
    timestamp:''
  }
  constructor(private noteService:NoteServiceService) { }

  ngOnInit(): void {
  }

  deleteNote(){
    this.noteService.deleteNote(this.note.title)
  }

}
