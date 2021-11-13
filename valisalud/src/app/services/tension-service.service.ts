import { Injectable } from '@angular/core';
import { ITension } from '../models/ITension.model';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable, observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TensionServiceService {

URL_API:string = 'http://localhost:4000/api/tension'

newRegister:ITension = {
  systolic: 0,
  diastolic: 0 ,
  pulse: 0
}

  constructor(private http:HttpClient) { }

  getRegisterTension():Observable<ITension[]>{
    
    
    return this.http.get<ITension[]>(this.URL_API)
    .pipe(
      catchError(this.handleError)
    );
  }

  saveRegsiterTension(newRegister:ITension){
    return this.http.post(this.URL_API,newRegister);
  }

  private handleError(error: HttpErrorResponse){
  
    return throwError(error.message);
  }
  diagnostic(a:number = this.newRegister.systolic, b:number = this.newRegister.diastolic){
    let lvlTensionClass = 'normal'
    if(a < 93 && b < 63){
      lvlTensionClass= 'low'
    }else if(a >= 93 && a<= 123 && b >=63 && b <= 83){
      lvlTensionClass = 'normal'
    }else if(a > 123 && b > 83){
      lvlTensionClass = 'high'
    }
    return lvlTensionClass;
  }

  deleteRegister(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  updateRegister(currencyRegister:ITension){
    return this.http.put(`${this.URL_API}/${currencyRegister._id}`, currencyRegister)
  }
}
