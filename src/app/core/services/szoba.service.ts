import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehivottModell } from 'src/app/shared/models/BehivottModell';
import { SzobaInfoModell } from 'src/app/shared/models/SzobaInfoModell';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SzobaService {
  constructor(private http: HttpClient) {}

  szobaListaLekeres(): Observable<SzobaInfoModell[]> {
    return this.http.get<SzobaInfoModell[]>(`${environment.apiUrl}/szobak`);
  }

  behivottLekeres(szobaszam: number): Observable<BehivottModell> {
    return this.http.get<BehivottModell>(
      `${environment.apiUrl}/behivas/${szobaszam}`
    );
  }
}
