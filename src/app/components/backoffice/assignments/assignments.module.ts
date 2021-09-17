import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MaterialModule } from 'src/app/props/material/material.module';
import { AssignmentsComponent } from './assignments.component';

const routes: Routes = [
    {
        path: '',
        component: AssignmentsComponent
    }
]

@NgModule({
    declarations: [
        AssignmentsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule
    ]
})
export class AssignmentsModule {}