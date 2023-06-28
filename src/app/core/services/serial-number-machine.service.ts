import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExaminationListViewModel } from 'src/app/shared/models/ExaminationListViewModel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SerialNumberMachineService {
  constructor(private http: HttpClient) {}

  getExaminationList(): Observable<ExaminationListViewModel> {
    return this.http.get<ExaminationListViewModel>(
      `${environment.apiUrl}/vizsgalat`
    );
  }
}
