import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackofficeLayout } from '../layouts/backoffice/backoffice';
import { SignLayout } from '../layouts/sign/sign';
import { AuthGuard } from "../props/guards/auth.guard";
import { ROUTES } from "./routes.routing";
import { DashboardComponent } from "src/app/components/app/dashboard/dashboard.component";

const routes: Routes = [
    {
        path: ROUTES.sign.in,
        component: SignLayout,
        loadChildren: () => import('../components/sign/in/in.module').then(m => m.InModule)
    },
    {
        path: ROUTES.sign.up,
        component: SignLayout,
        loadChildren: () => import('../components/sign/up/up.module').then(m => m.UpModule)
    },
    {
        path: ROUTES.backoffice.root,
        component: BackofficeLayout,
        canActivate: [AuthGuard],
        children: [
            {
                path: ROUTES.backoffice.root,
                loadChildren: () => import('../components/backoffice/groups/groups.module').then(m => m.GroupsModule)
            },
            {
                path: ROUTES.backoffice.exercises,
                loadChildren: () => import('../components/backoffice/exercises/exercises.module').then(m => m.ExercisesModule)
            },
            {
                path: ROUTES.backoffice.assignments,
                loadChildren: () => import('../components/backoffice/assignments/assignments.module').then(m => m.AssignmentsModule)
            },
            {
                path: ROUTES.backoffice.deliveries,
                loadChildren: () => import('../components/backoffice/deliveries/deliveries.module').then(m => m.DeliveriesModule)
            }
        ]
    },
    {
        path: ROUTES.app.root,
        loadChildren: () => import('../components/app/dashboard/dashboard.module').then(m => m.DashboardModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}