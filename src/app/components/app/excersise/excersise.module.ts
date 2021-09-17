import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from 'src/app/layouts/layout/layout.module';
import { MaterialModule } from 'src/app/props/material/material.module';
import { ExcersiseComponent } from "./excersise.component";

export const ROUTES: Routes = [
    {
        path: '',
        component: ExcersiseComponent
    }
];

@NgModule({
    declarations: [
        ExcersiseComponent
    ],
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule
    ]
})
export class ExcersiseModule {}