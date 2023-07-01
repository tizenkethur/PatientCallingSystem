import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SorszamModell } from 'src/app/shared/models/SorszamModell';
import { SzobaInfoModell } from 'src/app/shared/models/SzobaInfoModell';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BehivoService {
  constructor(private http: HttpClient) {}

  // TODO: pass the param
  varakozoListaLekeres(): Observable<SorszamModell[]> {
    // const szoba = new HttpParams().get()
    return this.http.get<SorszamModell[]>(`${environment.apiUrl}/sorszam`);
  }

  szobaListaLekeres(): Observable<SzobaInfoModell[]> {
    return this.http.get<SzobaInfoModell[]>(`${environment.apiUrl}/szobak`);
  }
}
