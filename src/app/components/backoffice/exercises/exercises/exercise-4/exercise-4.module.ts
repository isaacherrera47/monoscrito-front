import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from 'src/app/layouts/layout/layout.module';
import { MaterialModule } from 'src/app/props/material/material.module';
import { Exercise4Component } from './exercise-4.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: Exercise4Component
    }
];

@NgModule({
    declarations: [
        Exercise4Component
    ],
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        LayoutModule
    ]
})
export class Exercise4Module {}
