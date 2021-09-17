import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignServices } from '../sign.services';

@Component({
    selector: 'sign-up-component',
    templateUrl: './up.component.html',
    styleUrls: ['./up.component.scss']
})
export class UpComponent implements OnInit {
    signUpForm: FormGroup;
    loader: boolean = false;

    constructor(
        private fb: FormBuilder,
        private service: SignServices,
        private router: Router,
        private snackbar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.signUpForm = this.fb.group({
            school: new FormControl(null, [
                Validators.required,
                Validators.minLength(2)
            ]),
            name: new FormControl(null, [
                Validators.required,
                Validators.minLength(2)
            ]),
            lastname: new FormControl(null, [
                Validators.required,
                Validators.minLength(2)
            ]),
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            user: new FormControl(null, [
                Validators.required,
                Validators.minLength(2)
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(16)
            ]),
            nick: new FormControl(null, [
                Validators.required,
                Validators.minLength(2)
            ]),
            avatar: new FormControl(null, [
                Validators.required
            ])
        });
    }

    create(): void {
        this.loader = true;
        const USER: string = this.signUpForm.controls['user'].value;
        const PASSWORD: string = this.signUpForm.controls['password'].value;

        this.service.createProfile(
            this.signUpForm.controls['nick'].value,
            this.signUpForm.controls['email'].value,
            this.signUpForm.controls['school'].value,
            USER,
            PASSWORD,
            this.signUpForm.controls['name'].value,
            this.signUpForm.controls['lastname'].value,
            this.signUpForm.controls['avatar'].value
        ).subscribe(() => {
            this.service.login(
                USER,
                PASSWORD,
                true
            ).subscribe(response => {
                if (this.loader) {
                    const AUTH = {
                        grupo: response.grupo,
                        idMaestro: response.idMaestro,
                        avatar: response.avatar,
                        nombres: response.nombres
                    };
                    
                    localStorage.setItem('auth', JSON.stringify(AUTH));
        
                    this.router.navigate(['/']);
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