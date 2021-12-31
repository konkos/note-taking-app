import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../models/Note.model';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {


  typedContent:string = '';
  typedTitle:string = '';
  notes:Note[] = []
  form: FormGroup;

  constructor(private noteService:NoteServiceService, private router:Router,fb: FormBuilder) { 
    this.form = fb.group({
      priority : new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  addNote(){

    this.noteService.addNote(this.typedTitle,this.typedContent,this.form.get('priority')?.value)
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

  ngDoCheck(){
    // let check = this.noteService.checkNotesEquality(this.notes)
      this.notes = this.noteService.notesList
  }
  
}
