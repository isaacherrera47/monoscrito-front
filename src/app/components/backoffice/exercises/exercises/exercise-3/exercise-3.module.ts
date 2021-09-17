import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from 'src/app/layouts/layout/layout.module';
import { MaterialModule } from 'src/app/props/material/material.module';
import { Exercise3Component } from './exercise-3.component';

const routes: Routes = [
    {
        path: '',
        component: Exercise3Component
    }
]

@NgModule({
    declarations: [
        Exercise3Component
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
export class Exercise3Module {}