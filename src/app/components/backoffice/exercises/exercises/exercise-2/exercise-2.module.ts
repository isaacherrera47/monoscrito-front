import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from 'src/app/layouts/layout/layout.module';
import { MaterialModule } from 'src/app/props/material/material.module';
import { Exercise2Component } from './exercise-2.component';

const routes: Routes = [
    {
        path: '',
        component: Exercise2Component
    }
]

@NgModule({
    declarations: [
        Exercise2Component
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
export class Exercise2Module {}