import { Injectable } from '@angular/core';
import {Task} from "./task" ;


@Injectable()
export class TaskService {

tasks:Array<Task> = [];
  constructor() { }

}
