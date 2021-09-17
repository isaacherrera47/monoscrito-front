import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Loader } from '../../sign/sign.animations';
import { LoaderInit, Content } from "./assignments.animations";
import { AssignmentsServices } from "./assignments.services";
import { Response } from "./assignments.interfaces";
import { formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'assignments',
    templateUrl: './assignments.component.html',
    styleUrls: ['./assignments.component.scss'],
    animations: [
        Loader,
        LoaderInit,
        Content
    ]
})
export class AssignmentsComponent implements OnInit {
    form: FormGroup;
    loader: boolean = false;
    loaderInit: boolean = false;
    init: Response = null;
    studentsId: number[] = [];
    checkControl: FormControl = new FormControl(false);
    checked: boolean = false;

    constructor(
        private fb: FormBuilder,
        private service: AssignmentsServices,
        private snackBar: MatSnackBar,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            exercises: new FormControl(null, [
                Validators.required
            ]),
            students: this.fb.array([]),
            date: new FormControl(null, [
                Validators.required
            ]),
            status: new FormControl(false)
        });

        this.service.initAssignations().subscribe(response => {
            this.loaderInit = true;
            
            this.init = response;

            response.alumnos.forEach(() => {
                (<FormArray>this.form.controls['students']).push(this.studentGroup());
            });
        });
    }

    checkAction(): void {
        if (this.checkControl.value) {
            this.checked = true;

            this.studentsId = [];

            this.init.alumnos.forEach(student => {
                this.studentsId.push(student.id);
            });
        } else {
            this.studentsId = [];

            this.checked = false;
        }
    }

    arrayToStudents(value: any, id: number) {
        if (value) {
            if (this.studentsId.indexOf(id) === -1) {
                this.studentsId.push(id);
            }
        } else {
            const REMOVE_INDEX: number = this.studentsId.map(student => student).indexOf(id);
            this.studentsId.splice(REMOVE_INDEX, 1);
        }
    }

    studentGroup(): FormGroup {
        return this.fb.group({
            student: new FormControl(false, [
                Validators.required
            ])
        });
    }

    submit(): void {
        this.loader = true;

        this.service.assignation(
            formatDate(this.form.controls['date'].value, 'dd-MM-yyyy HH:mm', 'en-US'),
            this.form.controls['exercises'].value,
            this.form.controls['status'].value,
            this.studentsId
        ).subscribe(() => {
            this.loader = false;

            this.snackBar.open('Se hizo correctamente la asignación', null, {
                duration: 3000,
                panelClass: 'sb-success'
            });

            this.router.navigate(['/ejercicios']);
        });
    }

    cancel(): void {
        this.form.reset();
    }
}