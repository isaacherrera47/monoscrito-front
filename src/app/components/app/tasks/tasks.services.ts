import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { TasksResponse, Tasks } from "./tasks.interfaces";

@Injectable({
    providedIn: 'root'
})
export class TasksServices {
    private GET_TASKS: string = `${environment.endponit}alumno/obtener-mis-tareas`;
    private HEADERS: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    private idAlumno: number = JSON.parse(localStorage.getItem('studentAuth')).idAlumno;

    constructor(
        private http: HttpClient
    ) {}

    public getStudentTasks(): Observable<TasksResponse> {
        const PARAMS = {
            idAlumno: this.idAlumno
        };

        return this.http.post<TasksResponse>(this.GET_TASKS, JSON.stringify(PARAMS), {
            headers: this.HEADERS
        });
    }
}