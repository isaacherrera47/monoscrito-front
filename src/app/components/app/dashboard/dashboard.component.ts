import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { BOUNCE } from "./dashboard.animations";

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [
        BOUNCE
    ]
})
export class DashboardComponent {
    student: string = JSON.parse(localStorage.getItem('studentAuth')).pseudonimo;
    progress: number = JSON.parse(localStorage.getItem('studentAuth')).avanceMision;
    firstLogin: boolean = JSON.parse(localStorage.getItem('studentAuth')).primerLogin;
    hasTasks: boolean = JSON.parse(localStorage.getItem('studentAuth')).tieneTareas;
    bounceState: 'initial' | 'active' = 'initial';
    bounceType: 'home' | 'myTasks' | 'myGames';

    constructor(
        private router: Router
    ) {
        if (this.firstLogin) this.router.navigate(['/app/introduccion']);
    }

    navigation(route: string, type: 'home' | 'myTasks' | 'myGames'): void {
        this.bounceType = type;

        setTimeout(() => {
            this.router.navigate([route]);
        }, 640);
    }
}