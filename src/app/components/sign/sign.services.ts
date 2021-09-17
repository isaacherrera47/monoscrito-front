import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SignServices {
    private CREATE_PROFILE: string = `${ environment.endponit }maestro/crear-perfil`;
    private LOGIN_TEACHER: string = `${ environment.endponit }maestro/login`;
    private LOGIN_STUDENT: string = `${ environment.endponit }alumno/login`;

    private headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(
        private http: HttpClient
    ) {}

    login(
        user: string,
        password: string,
        teacher: boolean
    ): Observable<any> {
        const PARAMS = {
            usuario: user,
            password: password
        }

        return this.http.post<any>(teacher ? this.LOGIN_TEACHER : this.LOGIN_STUDENT, JSON.stringify(PARAMS), {
            headers: this.headers
        }).pipe(delay(2000));
    }

    createProfile(
        pseudonimo: string,
        email: string,
        escuela: string,
        usuario: string,
        password: string,
        nombres: string,
        apellidos: string,
        avatar: 'M' | 'H'
    ): Observable<any> {
        const PARAMS = {
            pseudonimo: pseudonimo,
            email: email,
            escuela: escuela,
            usuario: usuario,
            password: password,
            nombres: nombres,
            apellidos: apellidos,
            avatar: avatar
        }

        return this.http.post<any>(this.CREATE_PROFILE, JSON.stringify(PARAMS), {
            headers: this.headers
        }).pipe(delay(2000));
    }
}