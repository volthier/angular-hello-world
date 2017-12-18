import { Component, Input } from '@angular/core';
import {Task} from "../task" ;
import { TaskService } from '../task.service'

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent {

  task:Task = {
  	nome:"",
  	valor:0,
    datelaunch:"2017-07-07"
  };

  tasks:Array<Task>;

  constructor(private taskService:TaskService){
    this.tasks = this.taskService.tasks;

  }

  add(){
  	let task = Object.assign({},this.task)
  	this.tasks.push(task);
  }
}
