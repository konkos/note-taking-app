import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private noteService:NoteServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  deleteNote(){
    this.noteService.deleteNote(this.note.title)
  }

  editNote(e: { preventDefault: () => void; },titleToBeEdited: String){
    e.preventDefault();
    this.router.navigate(['editNote',titleToBeEdited])
  }

}
