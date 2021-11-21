import { Injectable } from '@angular/core';
import { Note } from './models/Note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  notesList:Note[]=[]

  constructor() { }

  addNote(typedTitle:String, typedContent:String){
    if(typedContent == "" || typedTitle == "")
    return;

  console.log(`${typedTitle} ${typedContent} `);
  let timestamp = new Date(new Date().getTime()).toUTCString()
  let currentNote:Note = {
    title:typedTitle,
    content:typedContent,
    timestamp:timestamp
  }
    this.notesList.push(currentNote)
  }

  deleteNote(typedTitle:String){
    if(typedTitle == "") return;

    let itemToBeDeleted = this.notesList.findIndex(note => note.title == typedTitle)
    console.log(`${itemToBeDeleted}`);
        
    if(itemToBeDeleted==-1)
      return;

    this.notesList.splice(itemToBeDeleted,1) 

  }

  editNote(typedTitle:string, newContent:string){
    if(newContent == "" || typedTitle == "")
    return;
    for(let i=0; i<this.notesList.length; i++){
      if(this.notesList[i].title == typedTitle){
        this.notesList[i].content = newContent;
      }
    }
  }


  checkNotesEquality(otherNotes:Note[]){
    if(this.notesList.length === otherNotes.length){
      return this.notesList.every((v,i)=>v === otherNotes[i])
    }
    return false;
  }
}
