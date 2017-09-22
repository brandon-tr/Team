import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  list = [];
  constructor(private _task: TaskService) { }

  ngOnInit() {
    this._task.show(function(data){
      this.list = data;
    }.bind(this));
  }
  DeletePrompt(id) {
    const check = confirm('Are you sure you want to delete this player');
    if (check === true) {
      this.Delete(id);
    }
  }

  Delete(id) {
    this._task.Delete(id);
    this._task.show(function(data){
      this.list = data;
    }.bind(this));
  }
}
