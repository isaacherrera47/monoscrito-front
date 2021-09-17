import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Item, Container } from "./exercise.animations";

@Component({
    selector: 'exercises',
    templateUrl: './exercises.component.html',
    styleUrls: ['./exercises.component.scss'],
    animations: [
        Item,
        Container
    ]
})
export class ExercisesComponent {
    constructor(
        private router: Router
    ) {}

    navTo(route: string): void {
        this.router.navigate([`/ejercicios${ route }`]);
    }
}