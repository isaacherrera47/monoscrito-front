import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExercisesServices } from '../../../exercise.services';

@Component({
    selector: 'dialog-exercise-4',
    templateUrl: './dialog.html',
    styleUrls: ['./dialog.scss']
})
export class DialogExercise4 {
    form: FormGroup = new FormGroup({
        good: new FormControl(null, [
            Validators.required
        ]),
        bad: new FormControl(null, [
            Validators.required
        ])
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: Data,
        private ref: MatDialogRef<DialogExercise4>,
        private sb: MatSnackBar,
        private service: ExercisesServices
    ) {}

    save(): void {
        const PRAYERS = [
            {
                textoBien: this.form.controls['good'].value,
                textoMal: this.form.controls['bad'].value
            }
        ];

        this.service.createExercise(
            this.data.name,
            this.data.seconds,
            'DETECTIVE ORTOGRAFICO',
            null,
            null,
            this.data.type,
            PRAYERS
        ).subscribe(r => {
            console.log(r);

            this.ref.close({
                data: true
            });

            this.sb.open('Tarea añadida con éxito', null, {
                duration: 3000,
                panelClass: 'sb-success'
            })
        });
    }
}

export interface Data {
    name: string;
    seconds: number;
    type: 'CSZ' | 'BV' | 'JG';
}