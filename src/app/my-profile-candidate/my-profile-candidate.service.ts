import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MyProfileService {
  
  

  constructor(private http: HttpClient) {
  }
//get calls for contact details form
  getAllStates(): Observable<any> {
    return this.http.get('//localhost:8080/states');
  }
  getDistrictsForState(stateId:any): Observable<any> {
    return this.http.get('//localhost:8080/states/'+stateId+'/districts');
  }
  getMandalForDistrict(districtId:any): Observable<any> {
    return this.http.get('//localhost:8080/district/'+districtId+'/mandals');
  }
  getVillageForMandal(mandalId:any): Observable<any> {
    return this.http.get('//localhost:8080/mandal/'+mandalId+'/villages');
  }
  getParliamentaryForState(stateId:any): Observable<any> {
    return this.http.get('//localhost:8080/states/'+stateId+'/parliamentaryes');
  }


//post calls when forms are submitted
    public onSubmit(serializedForm) {
     
    return this.http.post('//localhost:8080/page',serializedForm,{
              headers:new HttpHeaders({
                  'Content-Type' :'application/json',
              })

    });
  
    
}
public onSubmitContactForm(serializedContactDetailsForm) {
     
  return this.http.post('//localhost:8080/communicationaddress',serializedContactDetailsForm,{
            headers:new HttpHeaders({
                'Content-Type' :'application/json',
            })

  });
 
  
}
public onSubmitEducationForm(serializedEducationDetailsForm) {
     
  return this.http.post('//localhost:8080/educationdetails',serializedEducationDetailsForm,{
            headers:new HttpHeaders({
                'Content-Type' :'application/json',
            })

  });
 
  
}

public onSubmitCoursePreferencesForm(serializedCoursePreferencesForm) {
     
  return this.http.post('//localhost:8080/coursepreference',serializedCoursePreferencesForm,{
            headers:new HttpHeaders({
                'Content-Type' :'application/json',
            })

  });
 
  
}

public onSubmitDeclarationForm(declarationForm) {
     
  return this.http.post('//localhost:8080/declarationandsubmission',declarationForm,{
            headers:new HttpHeaders({
                'Content-Type' :'application/json',
            })

  });
 
  
}




        
               
}      
     
   
  


