import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class GlobalService {

  constructor (
    private http : HttpClient
  ) { }
}
