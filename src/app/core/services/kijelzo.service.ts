import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehivottModell } from 'src/app/shared/models/BehivottModell';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class KijelzoService {
  constructor(private http: HttpClient) {}

  kozpontiKijelzoListaLekeres(): Observable<BehivottModell[]> {
    return this.http.get<BehivottModell[]>(
      `${environment.apiUrl}/behivas`
    );
  }
}
