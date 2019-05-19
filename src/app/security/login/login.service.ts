import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { PegaBichoAPI } from '../../constantAPI.app'
import { User } from './user.model';

@Injectable()
export class LoginService {

    user: User
    constructor(private http: HttpClient) { }

    isLoggedIn(): boolean {
        return this.user !== undefined
    }

    login(email: string, password: string): Observable<User> {
        let headers = new HttpHeaders();
      
        headers = headers.set('Content-Type', 'application/json-patch+json')
                        .set("Accept", "application/json");
        //console.log(headers, { email: email, password: password })
        
        return this.http.post<User>(`${PegaBichoAPI}/Login/app/customer`,
            { email: email, password: password },
            { headers })
            .pipe(map(user => this.user = user))
    }


}