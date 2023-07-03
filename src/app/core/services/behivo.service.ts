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

  szobaListaLekeres(): Observable<SzobaInfoModell[]> {
    return this.http.get<SzobaInfoModell[]>(`${environment.apiUrl}/szobak`);
  }

  varakozoListaLekeres(szobaszam: number): Observable<SorszamModell[]> {
    return this.http.get<SorszamModell[]>(
      `${environment.apiUrl}/sorszam/${szobaszam}`
    );
  }

  kovetkezoVarakozoBehivas(
    szobaSzam: number,
    sorszam: number
  ): Observable<void> {
    console.log(szobaSzam, sorszam);
    return this.http.post<void>(
      `${environment.apiUrl}/behivas/${szobaSzam}`,
      sorszam
    );
  }
}
