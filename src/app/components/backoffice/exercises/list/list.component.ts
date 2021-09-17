import { Component, OnInit } from "@angular/core";
import { ExercisesServices } from "../exercise.services";
import { ListExercises } from "../exercise.interfaces";
import { Router } from '@angular/router';

@Component({
    selector: 'exercises-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ExercisesListComponent implements OnInit {
    exercises: ListExercises[] = [];

    constructor(
        private service: ExercisesServices,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.service.getExercise().subscribe(exercises => {
            this.exercises = exercises.listaEjercicios;
        });
    }

    navTo(): void {
        this.router.navigate(['/ejercicios']);
    }
}