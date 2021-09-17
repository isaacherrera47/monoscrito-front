import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from 'src/app/layouts/layout/layout.module';
import { MaterialModule } from 'src/app/props/material/material.module';
import { RecoverPasswordComponent } from './recover-password.component';

const routes: Routes = [
    {
        path: '',
        component: RecoverPasswordComponent
    }
]

@NgModule({
    declarations: [
        RecoverPasswordComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        LayoutModule
    ]
})
export class RecoverPasswordModule {}