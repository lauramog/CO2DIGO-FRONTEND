import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BackendGraficosService {

  endpoint: string = "";

  constructor(private http: HttpClient) { }

  getJson(url) {
    url = `${this.endpoint}`+ url;
    return this.http.get(url)
    .pipe(
			catchError(this.handleError(url, []))
		);
  }
  private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.log(`failed: ${error.message}`);
			return of(result as T);
    };
  }
}
