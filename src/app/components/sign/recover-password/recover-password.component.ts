import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'recover-password',
    templateUrl: './recover-password.component.html',
    styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
    recoverPasswordForm: FormGroup;

    constructor(
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.recoverPasswordForm = this.fb.group({
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ])
        });
    }
}