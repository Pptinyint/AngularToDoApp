import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
@Input() taskListArr:any[]=[];

@Output() important = new EventEmitter<any>();
 @Output() complete = new EventEmitter<any>();

markComplete(task: any) {
  this.complete.emit(task);
}

markImportant(task: any) {
  this.important.emit(task);
}



}
