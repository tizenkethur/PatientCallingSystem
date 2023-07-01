import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KozpontiKijelzoInfoModell } from 'src/app/shared/models/KozpontiKijelzoInfoModell';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class KijelzoService {
  constructor(private http: HttpClient) {}

  kozpontiKijelzoListaLekeres(): Observable<KozpontiKijelzoInfoModell[]> {
    return this.http.get<KozpontiKijelzoInfoModell[]>(
      `${environment.apiUrl}/behivas`
    );
  }
}
