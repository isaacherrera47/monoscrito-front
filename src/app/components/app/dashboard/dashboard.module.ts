import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ROUTES } from "src/app/routing/routes.routing";
import { StudentAuthGuard } from 'src/app/props/guards/student-auth.guard';
import { LayoutModule } from 'src/app/layouts/layout/layout.module';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [
            StudentAuthGuard
        ]
    },
    {
        path: '',
        children: [
            {
                path: ROUTES.app.routes.intro,
                loadChildren: () => import('../intro/intro.module').then(m => m.IntroModule),
                canActivate: [StudentAuthGuard]
            },
            {
                path: ROUTES.app.routes.myTasks,
                loadChildren: () => import('src/app/components/app/tasks/tasks.module').then(m => m.TasksModule),
                canActivate: [StudentAuthGuard]
            },
            {
                path: ROUTES.app.routes.myGames,
                loadChildren: () => import('src/app/components/app/games/games.module').then(m => m.GamesModule),
                canActivate: [StudentAuthGuard]
            },
            {
                path: ROUTES.app.routes.excersise,
                loadChildren: () => import('src/app/components/app/excersise/excersise.module').then(m => m.ExcersiseModule),
                canActivate: [StudentAuthGuard]
            }
        ]
    }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        LayoutModule
    ]
})
export class DashboardModule {}