import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RegistrationService {
  
  

  constructor(private http: HttpClient) {
  }
//get calls for personal details form

/* getUserGroup():Observable<any> {
 return this.http.get('//localhost:8080/prefix');
}
 */



//post calls when forms are submitted
    public onSubmit(serializedRegistartionForm) {
     
    return this.http.post('//localhost:8080/api/auth/signup',serializedRegistartionForm,{
              headers:new HttpHeaders({
                  'Content-Type' :'application/json',
              })

    });
  
    
}

  
}




        
               
     
     
   
  


