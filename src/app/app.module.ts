import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ModalComponent } from './modal/modal.component';
import { NotesBoardComponent } from './notes-board/notes-board.component';
import { NoteComponent } from './note/note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';


const appRoutes: Routes = [
  {path:'',component:MainComponent},
  {path:'createNote', component:CreateNoteComponent},
  {path:'editNote/:title',component:EditNoteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateNoteComponent,
    ModalComponent,
    NotesBoardComponent,
    NoteComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
