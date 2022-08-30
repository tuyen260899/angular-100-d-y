import { Component, OnInit } from '@angular/core';
import { Author, authors } from '../authors.model';
@Component({
  selector: 'app-author-list',
  template: `<app-author-detail
    *ngFor="let author of authors"
    [author]="author"
    (select)=onSelected($event)
    (delete)=onDelete($event)
  ></app-author-detail>
  <br>
  <div>Current author selected: {{currentAuthor?.firstName}}
  {{currentAuthor?.lastName}}</div>
  `,
  styles: [``],
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  currentAuthor = authors[0];
  constructor() {}
  ngOnInit() {}
  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }
  onDelete(id: number) {
    this.authors = this.authors.filter((e) => e.id !== id);
    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
