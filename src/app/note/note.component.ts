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
    timestamp:'',
    priority:''
  }
  constructor(private noteService:NoteServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  // ngAfterViewInit(){
  //   let noteTitle = <HTMLDivElement>document.getElementById(`${this.note.title}`)
  //   if(noteTitle){
  //     switch(this.note.priority){
  //       case 'high' : noteTitle.style.backgroundColor = 'red'; break;
  //       case 'low' : noteTitle.style.backgroundColor = 'blue'; break;
  //       case 'medium' : noteTitle.style.backgroundColor = 'green'; break;
  //     }
  //   }
  // }


  deleteNote(){
    this.noteService.deleteNote(this.note.title)
  }

  editNote(e: { preventDefault: () => void; },titleToBeEdited: String){
    e.preventDefault();
    this.router.navigate(['editNote',titleToBeEdited])
  }

}
