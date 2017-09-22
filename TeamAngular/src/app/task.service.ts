import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs';

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  create(player) {
    console.log('here');
    this._http.post('/players/addPlayer', player).map(data => data.json()).toPromise();
  }

  show(callback) {
    this._http.get('/showPlayers').subscribe(
      (data) => {callback (data.json()); },
      (err) => {console.log('There has been an error'); }
    );
  }

  Delete(id) {
    id = {id: id};
    this._http.post('/deletePlayer', id).map(data => data.json()).toPromise();
  }
}
