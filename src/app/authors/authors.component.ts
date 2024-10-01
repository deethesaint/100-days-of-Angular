import { Component } from '@angular/core';
import { Author, authors } from '../authors.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  authors = authors;
  currentAuthor = authors[0];
  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }
  onDeleted(deletedAuthor: Author) {
    this.authors = this.authors.filter(item => item !== deletedAuthor);

    if (deletedAuthor === this.currentAuthor) {
      if (this.authors.length === 1) {
        this.currentAuthor = {id: 0, firstName: '', email:'', lastName: '', gender: '', ipAddress: ''};
      } else {
        this.currentAuthor = this.authors[0]
      }
      
    }
  }
}
