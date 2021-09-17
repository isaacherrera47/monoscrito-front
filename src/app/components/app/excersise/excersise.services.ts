import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ExercisesServices {
    private SEND_TASKS: string = `${environment.endponit}alumno/hacer-tarea/escucho-y-escribo`;
    private HEADERS: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    private idAlumno: number = JSON.parse(localStorage.getItem('studentAuth')).idAlumno;
    private idMaestro: number = JSON.parse(localStorage.getItem('studentAuth')).idMaestro;

    constructor(
        private http: HttpClient
    ) {}

    sendExercise(
        idAsignacion: number,
        texto: string
    ): Observable<void> {
        const PARAMS = {
            idAlumno: this.idAlumno,
            idMaestro: this.idMaestro,
            idAsignacion: idAsignacion,
            texto: texto
        };

        return this.http.post<void>(this.SEND_TASKS, JSON.stringify(PARAMS), {
            headers: this.HEADERS
        });
    }
}