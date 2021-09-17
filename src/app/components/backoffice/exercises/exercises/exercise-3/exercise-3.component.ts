import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dialog } from "./exercise-3.animations";
import { ExercisesServices } from '../../exercise.services';
import { Loader } from "../../../../sign/sign.animations";

@Component({
    selector: 'exercise-3-component',
    templateUrl: './exercise-3.component.html',
    styleUrls: ['./exercise-3.component.scss'],
    animations: [
        Dialog,
        Loader
    ]
})
export class Exercise3Component implements OnInit {
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
            ]),
            instructions: new FormControl(null, [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(900)
            ])
        });
    }

    submit(): void {
        this.loader = true;

        this.service.createExercise(
            this.form.controls['name'].value,
            this.form.controls['time'].value,
            'SOY ESCRITOR',
            null,
            this.form.controls['instructions'].value
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