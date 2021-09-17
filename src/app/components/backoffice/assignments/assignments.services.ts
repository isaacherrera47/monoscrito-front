import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { Response, Assignation, AssignationResponse } from "./assignments.interfaces";

@Injectable({
    providedIn: 'root'
})
export class AssignmentsServices {
    private INIT_ASSIGANTIONS: string = `${ environment.endponit }maestro/inicializar-asignaciones`;
    private ASSIGANTION: string = `${ environment.endponit }maestro/realiza-asignacion`;

    private headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    
    constructor(
        private http: HttpClient
    ) {}

    initAssignations(): Observable<Response> {
        const PARAMS = {
            idMaestro: JSON.parse(localStorage.getItem('auth')).idMaestro
        };

        return this.http.post<Response>(this.INIT_ASSIGANTIONS, JSON.stringify(PARAMS), {
            headers: this.headers
        }).pipe(delay(2000));
    }

    assignation(
        fechaEntrega: string | Date,
        idEjercicio: number,
        permitirExtemporaneas: boolean,
        idAlumnos: number[]
    ): Observable<AssignationResponse> {
        const PARAMS: Assignation = {
            idMaestro: JSON.parse(localStorage.getItem('auth')).idMaestro,
            fechaEntrega: fechaEntrega,
            idEjercicio: idEjercicio,
            permitirExtemporaneas: permitirExtemporaneas,
            idAlumnos: idAlumnos
        };

        return this.http.post<AssignationResponse>(this.ASSIGANTION, JSON.stringify(PARAMS), {
            headers: this.headers
        }).pipe(delay(2000));
    }
}