import { Component } from '@angular/core';

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent {

  todos = [
    {id: 1, description: 'Learn to dance'},
    {id: 2, description: 'Be an Angular expert'},
    {id: 3, description: 'Go back to Australia'},
  ]

  // todo = {
  //   id: 1,
  //   description: 'Learn to dance'
  // }

}
