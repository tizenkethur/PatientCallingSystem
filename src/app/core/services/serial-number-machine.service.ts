import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { VizsgalatModell } from 'src/app/shared/models/VizsgalatModell';
import { SorszamKeresModell } from 'src/app/shared/models/SorszamKeresModell';
import { SorszamModell } from 'src/app/shared/models/SorszamModell';

@Injectable({
  providedIn: 'root',
})
export class SerialNumberMachineService {
  constructor(private http: HttpClient) {}

  vizsgalatListaLekeres(): Observable<VizsgalatModell[]> {
    return this.http.get<VizsgalatModell[]>(`${environment.apiUrl}/vizsgalat`);
  }

  vizsgalatValasztas(
    vizsgalatKod: string,
    taj: string
  ): Observable<SorszamModell> {
    const data: SorszamKeresModell = {
      vizsgalatKod,
      taj,
    };

    return this.http.post<SorszamModell>(`${environment.apiUrl}/sorszam`, data);
  }
}
