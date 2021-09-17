import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/props/material/material.module';
import { ExercisesListComponent } from './list.component';

const routes: Routes = [
    {
        path: '',
        component: ExercisesListComponent
    }
]

@NgModule({
    declarations: [
        ExercisesListComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class ExercisesListModule {}