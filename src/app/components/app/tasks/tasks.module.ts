import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
    {
        path: '',
        component: TasksComponent
    }
];

@NgModule({
    declarations: [
        TasksComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ]
})
export class TasksModule {}