import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private _http: HttpClient
  ) { }

  getCharacter(): Observable<Character> {
    return this._http.get(`${environment.URL_BASE}character`)
      .pipe(
        map((data: any) => {
          return data.data;
        })
      );
  }
}
