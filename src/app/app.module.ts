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


const appRoutes: Routes = [
  {path:'',component:MainComponent},
  {path:'createNote', component:CreateNoteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateNoteComponent,
    ModalComponent,
    NotesBoardComponent
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
