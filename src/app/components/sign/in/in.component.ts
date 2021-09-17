import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignServices } from "../sign.services";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Loader } from "../sign.animations";
import { LoginTeacher, LoginStudent } from "../sign.interfaces";

@Component({
    selector: 'in',
    templateUrl: './in.component.html',
    styleUrls: ['./in.component.scss'],
    animations: [
        Loader
    ]
})
export class InComponent implements OnInit {
    signInForm: FormGroup;
    loader: boolean = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private service: SignServices,
        private snackbar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.signInForm = this.fb.group({
            user: new FormControl(null, [
                Validators.required
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(16)
            ]),
            teacher: new FormControl(false)
        });
    }

    login(): void {
        this.loader = true;
        const TEACHER: boolean = this.signInForm.controls['teacher'].value;

        this.service.login(
            this.signInForm.controls['user'].value,
            this.signInForm.controls['password'].value,
            TEACHER
        ).subscribe(response => {
            if (response === null) {
                this.loader = false;
                this.snackbar.open('Credenciales incorrectas', null, {
                    duration: 3000,
                    panelClass: 'sb-danger'
                });
            } else {
                if (this.loader) {
                    if (TEACHER) {
                        localStorage.clear();
    
                        const AUTH: LoginTeacher = {
                            grupo: response.grupo,
                            idMaestro: response.idMaestro,
                            avatar: response.avatar,
                            nombres: response.nombres
                        };
    
                        localStorage.setItem('auth', JSON.stringify(AUTH));
        
                        this.router.navigate(['/']);
                    } else {
                        localStorage.clear();
    
                        const AUTH: LoginStudent = {
                            idAlumno: response.idAlumno,
                            idMaestro: response.idMaestro,
                            nombres: response.nombres,
                            apellidos: response.apellidos,
                            pseudonimo: response.pseudonimo,
                            tieneTareas: response.tieneTareas,
                            avanceMision: response.avanceMision,
                            primerLogin: response.primerLogin
                        };
    
                        localStorage.setItem('studentAuth', JSON.stringify(AUTH));
        
                        this.router.navigate(['/app']);
                    }
                }
            }
        }, error => {
            if (error) {
                this.loader = false;
                this.snackbar.open('Ocurrió un error inesperado', null, {
                    duration: 3000,
                    panelClass: 'sb-danger'
                });
            }
        });
    }
}