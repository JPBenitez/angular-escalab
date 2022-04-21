import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Episodes } from '../interfaces/episodes';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(
    private _http: HttpClient
  ) { }

  getEpisodes(): Observable<Episodes> {
    return this._http.get(`${environment.URL_BASE}episode`)
      .pipe(
        map((data: any) => {
          return data.data;
        })
      );
  }
}
