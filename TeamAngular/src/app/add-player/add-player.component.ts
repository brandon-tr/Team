import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player = new Player();
  constructor(private _task: TaskService) { }

  ngOnInit() {
  }

  addPlayer() {
    this._task.create(this.player);
    this.player = new Player();
  }

}
