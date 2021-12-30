
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class BackendApiService {
    apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) { }

    login(model) {
      console.log(model,"sn");
        return this.http.post<any>(this.apiUrl + '/user/login', model).pipe(
          map(data => {
            if(data && data.token){
              localStorage.setItem('currentUser', JSON.stringify(data));
            }
            return data;
        }));
    }
    signup(model) {
        return this.http.post<any>(this.apiUrl + '/user/signup', model).pipe(
            map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('token', user.token);
                }
                return user;
            }));
    }


}
