import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ResponseExercises } from "./exercise.interfaces";

@Injectable({
    providedIn: 'root'
})
export class ExercisesServices {
    private EXERCISE: string = `${ environment.endponit }maestro/ejercicio`;

    private headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(
        private http: HttpClient
    ) {}

    getExercise(): Observable<ResponseExercises> {
        return this.http.get<ResponseExercises>(this.EXERCISE, {
            headers: this.headers
        });
    }

    createExercise(
        nombre: string,
        tiempo: number,
        tipo: 'QUIERO LEER ALGO' | 'ESCUCHO Y ESCRIBO' | 'SOY ESCRITOR' | 'DETECTIVE ORTOGRAFICO',
        lectura: string | null,
        instrucciones: string | null,
        tipoDeDiferencias?: 'CSZ' | 'BV' | 'JG' | null,
        oraciones?
    ): Observable<void> {
        const PARAMS = tipo === 'QUIERO LEER ALGO' ? {
            nombre: nombre,
            tiempo: tiempo,
            idMaestro: JSON.parse(localStorage.getItem('auth')).idMaestro,
            tipo: tipo,
            lectura: lectura
        } : tipo === 'ESCUCHO Y ESCRIBO' ? {
            nombre: nombre,
            tiempo: tiempo,
            idMaestro: JSON.parse(localStorage.getItem('auth')).idMaestro,
            tipo: tipo
        } : tipo === 'SOY ESCRITOR' ? {
            nombre: nombre,
            tiempo: tiempo,
            idMaestro: JSON.parse(localStorage.getItem('auth')).idMaestro,
            tipo: tipo,
            instrucciones: instrucciones
        } : tipo === 'DETECTIVE ORTOGRAFICO' ? {
            nombre: nombre,
            tiempo: tiempo,
            idMaestro: JSON.parse(localStorage.getItem('auth')).idMaestro,
            tipo: tipo,
            tipoDeDiferencias: tipoDeDiferencias,
            oraciones: oraciones
        } : {};

        return this.http.post<void>(this.EXERCISE, JSON.stringify(PARAMS), {
            headers: this.headers
        }).pipe(delay(2000));
    }
}