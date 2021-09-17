import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateGroup, Students, GetGroup } from "./groups.interfaces";
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GroupsServices {
    private CREATE_GROUP: string = `${ environment.endponit }maestro/grupo`;

    private headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(
        private http: HttpClient
    ) {}

    getGroup(): Observable<GetGroup> {
        return this.http.get<GetGroup>(this.CREATE_GROUP + '/' + JSON.parse(localStorage.getItem('auth')).idMaestro, {
            headers: this.headers
        });
    }

    createGroup(
        name: string,
        students: Students[]
    ): Observable<any> {
        const PARAMS: CreateGroup = {
            idMaestro: JSON.parse(localStorage.getItem('auth')).idMaestro,
            nombre: name,
            alumnos: students
        };

        return this.http.post<any>(this.CREATE_GROUP, JSON.stringify(PARAMS), {
            headers: this.headers
        }).pipe(delay(2000));
    }
}