import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dialog } from "./exercise-2.animations";
import { ExercisesServices } from '../../exercise.services';
import { Loader } from "../../../../sign/sign.animations";

@Component({
    selector: 'exercise-2-component',
    templateUrl: './exercise-2.component.html',
    styleUrls: ['./exercise-2.component.scss'],
    animations: [
        Dialog,
        Loader
    ]
})
export class Exercise2Component implements OnInit {
    form: FormGroup;
    loader: boolean = false;

    constructor(
        private fb: FormBuilder,
        private service: ExercisesServices,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            name: new FormControl(null, [
                Validators.required,
                Validators.minLength(2)
            ]),
            time: new FormControl(null, [
                Validators.required
            ])
        });
    }

    submit(): void {
        this.loader = true;

        this.service.createExercise(
            this.form.controls['name'].value,
            this.form.controls['time'].value,
            'ESCUCHO Y ESCRIBO',
            null,
            null
        ).subscribe(() => {
            if (this.loader) {
                this.router.navigate(['/ejercicios/lista-de-ejercicios']);
            }
        });
    }

    cancel(): void {
        this.form.reset();
    }
}