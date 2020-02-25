import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ViewaddPreferenceService {
    getSubSectorsForSector: any;
    getFormData: any;

  constructor(private http: HttpClient) {
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
  onSubmit(sectorId: any,subSectorId: any,jobId:any): Observable<any>  {
return this.http.get('//localhost:8080/add?sectorId='+sectorId+'&subSectorId='+subSectorId+'&jobId='+jobId);

  }


}