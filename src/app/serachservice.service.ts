import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerachserviceService {
  searchSubject:BehaviorSubject<string> = new BehaviorSubject<string>("");
  constructor() { 

  }
}
