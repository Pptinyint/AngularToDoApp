import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from "../../page-title/page-title.component";
import { TaskListComponent } from "../../task-list/task-list.component";
import { SerachserviceService } from '../../../serachservice.service';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, PageTitleComponent, TaskListComponent],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.css'
})
export class AllTaskComponent {
 // httpservices=Inject(HttpService);
  addTaskInput="";
  initialTaskListArr:any[]=[];
  taskListArr:any[]=[];
  //searchSevices=Inject(SerachserviceService);
  httpservices = inject(HttpService);
  searchSevices = inject(SerachserviceService);  

  ngOnInit(): void {
    this.searchSevices.searchSubject.subscribe((value:any)=>{
      console.log(value);
     if(value){
      this.taskListArr = this.initialTaskListArr.filter((x: any) => x.title.toLowerCase().includes(value.toLowerCase()));
     }else{
      this.taskListArr=this.initialTaskListArr;
     }
    }); 
    this.getAllTask();
  }

  addTask(){  
       this.httpservices.addTask(this.addTaskInput).subscribe(()=>{
      this.addTaskInput="";
      this.getAllTask();
    });
  }
  getAllTask(){
    this.httpservices.getTaskList().subscribe((result:any)=>{
      this.initialTaskListArr= this.taskListArr =result;
    })
  }

  onImportant(task: any) {
    task.important=!task.important;
    console.log(task, " onImportant");
    this.httpservices.updateTask(task).subscribe(()=>{
      
    });
  }

  onComplete(task: any) {
    //task.completed=true;
    task.completed = !task.completed;
    //console.log(task, " onComplete");
    this.httpservices.updateTask(task).subscribe(()=>{

     // console.log(result, "Task status updated");
        // task.completed=false;
    });
  }
  // onComplete(task : any){
  //   console.log(task + "Hello")
  // }

}
