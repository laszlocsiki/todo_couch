import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Task} from '../model/task.model';

@Injectable()
export class CouchService {
  private _currentDB: string = null;
  private _COUCH_DB_ENDPOINT = 'http://admin:admin@127.0.0.1:5984';
  private _otherDB: string = null;

  constructor(private http: HttpClient) {}

  /**
   * Todo:
   * Create task document
   * Read (get) task document
   * Update task document
   * Delete task document
   */

  createTaskDocument(task: Task) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {
      'title': task.title,
      'description': task.description,
      'completed': task.completed    // 1 or 0
    };
    return this.http.post(this._COUCH_DB_ENDPOINT + '/' + this._currentDB + '/', body, {headers: headers});
  }

  getDocuments() {
    return this.http.get(this._COUCH_DB_ENDPOINT + '/' + this.currentDB + '/_all_docs',
      {params: new HttpParams().set('include_docs', 'true')}
      );
  }

  getOthersDocuments() {
    return this.http.get(this._COUCH_DB_ENDPOINT + '/' + this.otherDB + '/_all_docs',
      {params: new HttpParams().set('include_docs', 'true')}
    );
  }

  updateTaskDocument(task: Task) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {
      '_rev' : task.rev,
      'title': task.title,
      'description': task.description,
      'completed': task.completed    // 1 or 0
    };
    return this.http.put(this._COUCH_DB_ENDPOINT + '/' + this.currentDB + '/' + task.id + '/',
      body, {headers: headers});
  }

  deleteTaskDocument(task: Task) {
    return this.http.delete(this._COUCH_DB_ENDPOINT + '/' + this.currentDB + '/' + task.id, {
      params: new HttpParams().set('rev', task.rev)});
  }

  get currentDB(): string {
    return this._currentDB;
  }

  set currentDB(value: string) {
    this._currentDB = value;
    if (value === 'laszlo') {
      this._otherDB = 'szilard';
    } else if (value === 'szilard') {
      this._otherDB = 'laszlo';
    }
  }

  get COUCH_DB_ENDPOINT(): string {
    return this._COUCH_DB_ENDPOINT;
  }


  get otherDB(): string {
    return this._otherDB;
  }

  set otherDB(value: string) {
    this._otherDB = value;
  }
}
