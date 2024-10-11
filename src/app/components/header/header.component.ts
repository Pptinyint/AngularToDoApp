import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SerachserviceService } from '../../serachservice.service';
import { debounceTime, pipe } from 'rxjs';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  sarchTaskCantrol=new FormControl();
  searchSevices = inject(SerachserviceService);
  
ngOnInit(): void {
  this.sarchTaskCantrol.valueChanges.pipe(debounceTime(250)).subscribe((value)=>{
    console.log(value);
    this.searchSevices.searchSubject.next(value || "");

  });
}

  OnSearch(){
  //console.log("ss");
  }

}
