import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MyProfileService {
    getSubSectorsForSector: any;
    getFormData: any;

  constructor(private http: HttpClient) {
  }

/*  
   getAllSectors(): Observable<any> {
     return this.http.get('//localhost:8080/sectors');
   }


  getSubsectorsForSector(sectorId: any): Observable<any> {

    return this.http.get('//localhost:8080/sectors/'+sectorId+'/subsectors');
  }

  getJobrolesForSubsector(subSectorId: any): Observable<any> {
    return this.http.get('//localhost:8080/subsector/'+subSectorId+'/jobroles');
  } */

    public onSubmit(personalDetailsForm) {
     
    return this.http.post('//localhost:8080/page',personalDetailsForm,{
              headers:new HttpHeaders({
                  'Content-Type' :'application/html',
              })

    });
    console.log(personalDetailsForm);
    
}
        
               
}      
     
   
  


