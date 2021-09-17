import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/props/material/material.module';
import { ExercisesComponent } from './exercises.component';

const routes: Routes = [
    {
        path: '',
        component: ExercisesComponent
    },
    {
        path: '',
        children: [
            {
                path: 'lista-de-ejercicios',
                loadChildren: () => import('./list/list.module').then(m => m.ExercisesListModule)
            },
            {
                path: 'quiero-leer-algo',
                loadChildren: () => import('./exercises/exercise-1/exercise-1.module').then(m => m.Exercise1Module)
            },
            {
                path: 'escucho-y-escribo',
                loadChildren: () => import('./exercises/exercise-2/exercise-2.module').then(m => m.Exercise2Module)
            },
            {
                path: 'soy-escritor',
                loadChildren: () => import('./exercises/exercise-3/exercise-3.module').then(m => m.Exercise3Module)
            },
            {
                path: 'detective-ortografico',
                loadChildren: () => import('./exercises/exercise-4/exercise-4.module').then(m => m.Exercise4Module)
            }
        ]
    }
]

@NgModule({
    declarations: [
        ExercisesComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class ExercisesModule {}