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
  order:Boolean = true
  orderSign = '&uarr; Change order'

  constructor(private noteService:NoteServiceService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    // let check = this.noteService.checkNotesEquality(this.notes)
      this.notes = this.noteService.notesList
  }

  ngAfterViewInit(){
    this.notes.forEach((note)=>{
      let noteTitle = <HTMLElement>document.getElementById(`${note.title}`)?.parentElement?.parentElement
      if(noteTitle){
        switch(note.priority){
          case 'high' : noteTitle.style.backgroundColor = 'red'; break;
          case 'low' : noteTitle.style.backgroundColor = 'blue'; break;
          case 'medium' : noteTitle.style.backgroundColor = 'green'; break;
        }
      }
    })
   
  }

  changeOrder(){
    if(this.notes.length==0) return;
    this.order = !this.order
    if(this.order)
      this.orderSign = '&uarr; Change order'
    else
      this.orderSign = '&darr; Change order'
  }
}
