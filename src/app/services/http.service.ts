import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpclient=inject(HttpClient);
  constructor() { }

  addTask(task:string){
    return this.httpclient.post("http://localhost:3000/task", {
      title:task
    });
  }

  getTaskList(){
    return this.httpclient.get("http://localhost:3000/task");
  }

  updateTask(task:any){
    return this.httpclient.put("http://localhost:3000/task/"+task.id, task);
  }
}
