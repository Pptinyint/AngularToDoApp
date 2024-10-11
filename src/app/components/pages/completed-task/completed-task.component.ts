import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { AllTaskComponent } from '../all-task/all-task.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpService } from '../../../services/http.service';
import { SerachserviceService } from '../../../serachservice.service';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [TaskListComponent, PageTitleComponent, AllTaskComponent,
    CommonModule, DatePipe],
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.css'
})
export class CompletedTaskComponent {

  addTaskInput="";
  taskListArr:any=[];
  initialTaskListArr:any[]=[];
  httpservices=inject(HttpService);
  searchSevices=inject(SerachserviceService);

  ngOnInit(): void {
    this.searchSevices.searchSubject.subscribe((result)=>{
      console.log(result);
      if(result){
        this.taskListArr=this.initialTaskListArr.filter((x:any)=>x.title.toLowerCase().includes(result.toLowerCase()));
      }else{
        this.taskListArr=this.initialTaskListArr;
      }
    });
    this.getAllTask();
  }
  
  getAllTask(){
    this.httpservices.getTaskList().subscribe((result:any)=>{
      this.initialTaskListArr = this.taskListArr=result.filter((x:any)=>x.completed==true);
    })
  }
  onImportant(task: any) {
   // task.important=true;
    console.log(task, " onImportant");
    this.httpservices.updateTask(task).subscribe(()=>{
      this.getAllTask();
    });
  }

  onComplete(task: any) {
    //task.completed=true;
    console.log(task, " onComplete");
    this.httpservices.updateTask(task).subscribe(()=>{
      this.getAllTask();
    });
}
}
