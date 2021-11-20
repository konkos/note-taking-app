import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { Note } from '../models/Note.model'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  notes:Note[] = []

  typedTitle = ''
  typedContent = ''
  
  constructor() { }

  ngOnInit(): void {
    // for(let i=0;i<10;i++){
    //   let timestamp = new Date().getTime()
      
    //   this.notes.push({
    //     'title':`title ${i}`,
    //     'content':`content ${i}`,
    //     'timestamp': timestamp
    //   })
    // }
  
  }

  deleteNote(){
    if(this.typedTitle=="") return;

    let itemToBeDeleted = this.notes.findIndex(note => note.title == this.typedTitle)
    console.log(`${itemToBeDeleted}`);
        
    if(itemToBeDeleted==-1)
      return;

    this.notes.splice(itemToBeDeleted,1)    
  }

  addNote(){

    if(this.typedContent== "" || this.typedTitle=="")
      return;

    console.log(`${this.typedTitle} ${this.typedContent} `);
    let timestamp = new Date(new Date().getTime()).toUTCString()
    let currentNote:Note = {
      title:this.typedTitle,
      content:this.typedContent,
      timestamp:timestamp
    }
    this.notes.push(currentNote)
    //this.notes.sort(t1,(t2: number) => {t1-t2}})
  }
}
