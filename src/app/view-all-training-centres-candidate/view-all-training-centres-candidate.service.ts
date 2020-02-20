import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ViewTrainingCentresService {

  getSectorsForDistrict: any;

  constructor(private http: HttpClient) {
  }

  getAllDistricts(): Observable<any> {
   return this.http.get('//localhost:8080/districts');
   }

   getAllSectors(districtId:any): Observable<any> {
     return this.http.get('//localhost:8080/districts/' + districtId + '/sectors');
   }

   getJobrolesForSector(sectorId: any): Observable<any> {
    return this.http.get('//localhost:8080/sectors/'+sectorId+'/jobroles');
  }

}

