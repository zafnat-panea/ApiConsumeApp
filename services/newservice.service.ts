import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  url = 'http://www.omdbapi.com/';
  apiKey = ''

  constructor(private http: HttpClient) { }

  searchMovie(title: string): Observable<any>{
    return this.http.get(`${this.url}?apikey=${this.apiKey}&s=${encodeURI(title)}`).pipe(
      map(results => results['Search'])
    ); ;
  }

  getMovieById(id:string): Observable<any>{
    return this.http.get(`${this.url}?i=${encodeURI(id)}&apikey=${this.apiKey}`);
  }
}
