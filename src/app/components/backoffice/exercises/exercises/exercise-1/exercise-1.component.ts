import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dialog } from "./exercise-1.animations";
import { READINGS } from "./exercise-1.readings";
import { ExercisesServices } from '../../exercise.services';
import { Loader } from "../../../../sign/sign.animations";

@Component({
    selector: 'exercise-1-component',
    templateUrl: './exercise-1.component.html',
    styleUrls: ['./exercise-1.component.scss'],
    animations: [
        Dialog,
        Loader
    ]
})
export class Exercise1Component implements OnInit {
    form: FormGroup;
    dialogStatus: boolean = false;
    readings: string[] = READINGS;
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
            reading: new FormControl(null, [
                Validators.required
            ])
        });
    }

    selectingReading(): void {
        this.dialogStatus = !this.dialogStatus;
    }

    selectedReading(reading: string): void {
        this.form.controls['reading'].setValue(reading);

        if (this.form.controls['reading'].value) {
            this.dialogStatus = false;
        }
    }

    submit(): void {
        this.loader = true;

        this.service.createExercise(
            this.form.controls['name'].value,
            this.form.controls['time'].value,
            'QUIERO LEER ALGO',
            this.form.controls['reading'].value,
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