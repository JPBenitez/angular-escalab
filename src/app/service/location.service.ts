import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private _http: HttpClient
  ) { }

  getEpisodes(): Observable<Location> {
    return this._http.get(`${environment.URL_BASE}location`)
      .pipe(
        map((data: any) => {
          return data.data;
        })
      );
  }
}
