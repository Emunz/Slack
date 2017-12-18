import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

}
