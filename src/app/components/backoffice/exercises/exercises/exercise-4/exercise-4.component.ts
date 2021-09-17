import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogExercise4 } from './dialog/dialog';
import { Loader } from "../../../../sign/sign.animations";
import { Router } from '@angular/router';

@Component({
    selector: 'detective',
    templateUrl: './exercise-4.component.html',
    styleUrls: ['./exercise-4.component.scss'],
    animations: [
        Loader
    ]
})
export class Exercise4Component implements OnInit {
    loader: boolean = false;
    form: FormGroup = new FormGroup({
        name: new FormControl(null, [
            Validators.required,
            Validators.minLength(3)
        ]),
        seconds: new FormControl(null, [
            Validators.required
        ]),
        type: new FormControl(null, [
            Validators.required
        ])
    });

    constructor(
        private dialog: MatDialog,
        private router: Router
    ) {}

    ngOnInit(): void {}

    openDialog(): void {
        this.dialog.open(DialogExercise4, {
            data: {
                name: this.form.controls['name'].value,
                seconds: this.form.controls['seconds'].value,
                type: this.form.controls['type'].value
            },
            autoFocus: false,
            disableClose: true
        }).afterClosed().subscribe(r => {
            if (r) {
                this.router.navigate(['/ejercicios/lista-de-ejercicios'])
            }
        });
    }
}