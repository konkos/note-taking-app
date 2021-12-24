import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../models/Note.model';

@Pipe({
  name: 'orderNotes'
})
export class OrderNotesPipe implements PipeTransform {

  transform(value: Note[]): Note[] {

    let temp:Note[]
    temp = value.sort((a , b) => {
      let timestampA = a.timestamp;
      let timestampB = b.timestamp;

      if(timestampA < timestampB)
        return 1;
      else if(timestampA > timestampB)
        return -1;
      else
        return 0;
    })
    return temp;
  }

}

