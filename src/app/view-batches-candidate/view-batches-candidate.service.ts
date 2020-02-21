import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ViewbatchService {
  getSectorsForDistrict: any;
  getFormData: any;

  constructor(private http: HttpClient) {
  }

  //integration with BE  
  getAllDistricts(): Observable<any> {
   return this.http.get('//localhost:8080/districts');
   }

   getAllSectors(): Observable<any> {
     return this.http.get('//localhost:8080/sectors');
   }


  getSubsectorsForSector(sectorId: any): Observable<any> {

    return this.http.get('//localhost:8080/sectors/'+sectorId+'/subsectors');
  }

  getJobrolesForSubsector(subSectorId: any): Observable<any> {
    return this.http.get('//localhost:8080/subsector/'+subSectorId+'/jobroles');
  }
  onSubmit(districtId:any,sectorId: any,subSectorId: any,jobId:any): Observable<any>  {
   return this.http.get('//localhost:8080/batches?districtId='+districtId+'&sectorId='+sectorId+'&subSectorId='+subSectorId+'&jobId='+jobId);
  }

}

