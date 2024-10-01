import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../authors.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  @Input() author!: Author;
  @Output() select = new EventEmitter<Author>();
}
