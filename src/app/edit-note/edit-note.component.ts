import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  title:String;
  content:String

  constructor(private route: ActivatedRoute,private noteService:NoteServiceService, private router:Router) { 
    this.title=''
    this.content=''
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.title = params['title']; 
      console.log(`PARAMS :: ${params['title']}`);
   });
  }

  ngDoCheck(){
    this.completeInputFieldsFromDB()
  }


  private completeInputFieldsFromDB(){
    let index = this.noteService.notesList.findIndex((note) => note.title === this.title)

    this.title = this.noteService.getNote(index).title
    this.content = this.noteService.getNote(index).content
  }

  editNote(){
    const editContent = <HTMLInputElement>document.getElementById('editContent')
    console.log(editContent.value);
     
    this.noteService.editNote(this.title.toString(), editContent.value)
    this.router.navigate([''])
  }
}
