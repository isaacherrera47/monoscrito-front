import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Students, FormGroupInterface, GetStudents, GetGroup } from './groups.interfaces';
import { GroupsServices } from "./groups.services";
import { Input, ContainerInput } from "./groups.animations";

@Component({
    selector: 'groups-component',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss'],
    animations: [
        Input,
        ContainerInput
    ]
})
export class GroupsComponent implements OnInit {
    group: boolean = (JSON.parse(localStorage.getItem('auth')).grupo === null || JSON.parse(localStorage.getItem('auth')).grupo === '') ? false : true;
    newGroupForm: FormGroup;
    groupForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private service: GroupsServices
    ) { }

    ngOnInit(): void {
        this.newGroupForm = this.fb.group({
            name: new FormControl(name !== null ? name : null, [
                Validators.required,
                Validators.minLength(3)
            ]),
            students: new FormControl(0, [
                Validators.required
            ])
        });

        this.newGroupForm.controls['students'].disable();

        if (this.group) {
            this.service.getGroup().subscribe(group => {
                this.group = group === null ? false : true;
                
                if (group !== null) {
                    this.newGroupForm.controls['name'].setValue(group.nombre);

                    this.newGroupForm.controls['students'].enable();
                    this.newGroupForm.controls['students'].setValue(
                        group.alumnos.length === 7 ? 1234567 :
                            group.alumnos.length === 6 ? 123456 :
                                group.alumnos.length === 5 ? 12345 :
                                    group.alumnos.length === 4 ? 1234 :
                                        group.alumnos.length === 3 ? 123 :
                                            group.alumnos.length === 2 ? 12 :
                                                group.alumnos.length === 1 ? 1 :
                                                    0
                    );

                    group.alumnos.forEach(student => {
                        this.groups().push(this.newArrayGroup(student));
                    });
                }
            });
        }

        this.groupForm = this.fb.group({
            group: this.fb.array([])
        });
    }

    changeInputStatus(): void {
        this.newGroupForm.controls['students'].enable();

        if (this.newGroupForm.controls['students'].value) {
            this.groups().clear();

            const NUMBER: number = this.newGroupForm.controls['students'].value;
            const ARRAY: number[] = NUMBER.toString(10).replace(/\D/g, '0').split('').map(Number);

            ARRAY.forEach(() => {
                this.addGroup();
            });
        }
    }

    newGroup(): void {
        this.group = true;
    }

    addGroup(): void {
        this.groups().push(this.newArrayGroup());
    }

    groups(): FormArray {
        return this.groupForm.controls['group'] as FormArray;
    }

    newArrayGroup(student?: GetStudents): FormGroup {
        return this.fb.group({
            name: new FormControl(student ? student.nombres : null, [
                Validators.required,
                Validators.minLength(3)
            ]),
            lastname: new FormControl(student ? student.apellidos : null, [
                Validators.required,
                Validators.minLength(3)
            ]),
            nick: new FormControl(student ? student.pseudonimo : null, [
                Validators.required,
                Validators.minLength(3)
            ]),
            password: new FormControl(student ? student.password : null, [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(16)
            ])
        });
    }

    createGroup(): void {
        const FORM_ARRAY: FormGroupInterface[] = (<FormArray>this.groupForm.controls['group']).value;
        const STUNDENTS: Students[] = [];

        FORM_ARRAY.forEach(value => {
            const STUDENT: Students = {
                nombres: value.name,
                apellidos: value.lastname,
                pseudonimo: value.nick,
                password: value.password
            };

            STUNDENTS.push(STUDENT);
        });

        this.service.createGroup(
            this.newGroupForm.controls['name'].value,
            STUNDENTS
        ).subscribe(() => {
            const AUTH = {
                idMaestro: JSON.parse(localStorage.getItem('auth')).idMaestro,
                grupo: this.newGroupForm.controls['name'].value
            };

            localStorage.clear();

            localStorage.setItem('auth', JSON.stringify(AUTH));

            this.newGroupForm.reset();
            (<FormArray>this.groupForm.controls['group']).clear();

            this.group = true;

            this.service.getGroup().subscribe(group => {
                this.newGroupForm.controls['name'].setValue(group.nombre);

                this.newGroupForm.controls['students'].enable();
                this.newGroupForm.controls['students'].setValue(
                    group.alumnos.length === 7 ? 1234567 :
                    group.alumnos.length === 6 ? 123456 :
                    group.alumnos.length === 5 ? 12345 :
                    group.alumnos.length === 4 ? 1234 :
                    group.alumnos.length === 3 ? 123 :
                    group.alumnos.length === 2 ? 12 :
                    group.alumnos.length === 1 ? 1 :
                    0
                );

                group.alumnos.forEach(student => {
                    this.groups().push(this.newArrayGroup(student));
                });
            });
        });
    }

    cancel(): void {
        this.groups().clear();
    }
}