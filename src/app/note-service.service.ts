import { Injectable } from '@angular/core';
import { Note } from './models/Note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  notesList:Note[]=[]

  constructor() { }

  addNote(typedTitle:String, typedContent:String, providedPriority:String){
    console.log(providedPriority);
    
    if(typedContent == "" || typedTitle == ""){
      alert("No title or Content")
      return;
    }

    if(this.checkDuplicateTitle(typedTitle)){
      alert('Title Already Exists [Title Field is Used As An Id] ')
      return;
    }

  console.log(`${typedTitle} ${typedContent} `);
  let timestamp = new Date(new Date().getTime())//.toLocaleString('el-GR')//, { timeZone: 'EET' })
  let currentNote:Note = {
    title:typedTitle,
    content:typedContent,
    timestamp:timestamp,
    priority:providedPriority
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
    if(newContent == "" || typedTitle == ""){
      alert("No title or Content")
      return;
    }
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

  getNote(index:number){
    return this.notesList[index]
  }

  private checkDuplicateTitle(typedTitle:String):Boolean{
    let temp = this.notesList.filter(note => {
      return note.title === typedTitle
    })

    if(temp.length>0)
      return true
    return false
  }
}
