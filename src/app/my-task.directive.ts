import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import {Task} from './task';


@Directive({
  selector: '[myTask]'
})
export class MyTaskDirective {

	private _myTask;

    constructor(private el:ElementRef) { 
  		this.el.nativeElement.innerHTML += 'Conteudo inserido';
  	}

  	get myTask(){
  		return this._myTask;
  	}

  	@Input()
  	set myTask(value:Task){
		this._myTask = value;
		this.changeColorTask();
  	}

  	@HostListener('click')
	onClick(){
		alert(this.myTask.datelaunch)
  	}

	changeColorTask(){
		this.el.nativeElement.style.color = this.myTask.valor > 5 ? 'green':'red';
	}
}
