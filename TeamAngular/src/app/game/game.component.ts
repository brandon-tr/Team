import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  list = [];
  constructor(private _task: TaskService) { }
    ngOnInit() {
      this._task.show(function(data){
        this.list = data;
      }.bind(this));
    }
    Play(id) {
      this.list[id].Game1 = 2;
    }

    NotPlay(id) {
      this.list[id].Game1 = 1;
    }

    Undecided(id) {
      this.list[id].Game1 = 0;
    }
 }
