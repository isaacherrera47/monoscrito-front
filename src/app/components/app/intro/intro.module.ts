import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/props/material/material.module';
import { IntroComponent } from './intro.component';

export const routes: Routes = [
    {
        path: '',
        component: IntroComponent
    }
];

@NgModule({
    declarations: [
        IntroComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MaterialModule
    ]
})
export class IntroModule {}