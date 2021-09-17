import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from 'src/app/layouts/layout/layout.module';
import { MaterialModule } from 'src/app/props/material/material.module';
import { GroupsComponent } from './groups.component';

const routes: Routes = [
    {
        path: '',
        component: GroupsComponent
    }
]

@NgModule({
    declarations: [
        GroupsComponent
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
export class GroupsModule {}