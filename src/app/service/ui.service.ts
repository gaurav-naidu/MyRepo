import { Injectable } from '@angular/core';
import {  Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showaddtask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask():void{
  this.showaddtask= !this.showaddtask;
  this.subject.next(this.showaddtask);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
