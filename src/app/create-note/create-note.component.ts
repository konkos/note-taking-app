import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  constructor(private noteService:NoteServiceService, private router:Router) { }

  typedContent:string = '';
  typedTitle:string = '';

  ngOnInit(): void {
  }

  addNote(){
    this.noteService.addNote(this.typedTitle,this.typedContent)
    this.router.navigate([''])
  }

  deleteNote(){
    this.noteService.deleteNote(this.typedTitle)
    this.router.navigate([''])
  }

  editNote(){
    this.noteService.editNote(this.typedTitle,this.typedContent)
    this.router.navigate([''])
  }
  
}
