import { Component, OnInit } from '@angular/core';
import { TodoService } from '../servise/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component implements OnInit {

  
  subscription: Subscription;
  todoList: any = [];
  // Inject the todo service
  constructor(private todoService: TodoService) { }
  ngOnInit() {

    this.getTodos();
  }


  createTodo() {
    let todo = {   //crete the oject 
      id : new Date().getTime(), //we can pass also id also we creted new object
      title: `Practice decorator` //when we creted object this text show
    }

    this.todoService.create(todo).subscribe(res => {
      console.log('todo create', res);
      this.getTodos();
    })
  }
// this curd method is use to show data on browser
  getTodos() {
    this.todoService.list().subscribe((res)=>{
      this.todoList = res;
      console.log('get todos list', this.todoList);
    }, error => {
      console.log('error occured');
    })
  }

  //this methos use show edit button browser and i want edit only id that time whole object(todo.id)
  editTodo(todo: any) {
    let data = {
      id: new Date().getTime(),
      title: 'edited doto'
    }
    this.todoService.update(todo.id, data).subscribe((res)=> {
      this.getTodos();
    }, err=> {
      console.log('error occured');
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

    //this methos use show delet button browser 
  deleteTodo(id: any) {
    this.todoService.delete(id).subscribe((res) => {
      this.getTodos();
    }, (error => {
      console.log('error occured', error);
    }))
  }

}
