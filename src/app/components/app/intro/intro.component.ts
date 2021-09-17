import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'intro-component',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
    muted: boolean = false;

    constructor(
        private router: Router
    ) {}

    mute(): void {
        this.muted = !this.muted;
    }

    videoEnded(): void {
        const AUTH = {
            idAlumno: JSON.parse(localStorage.getItem('studentAuth')).idAlumno,
            nombres: JSON.parse(localStorage.getItem('studentAuth')).nombres,
            apellidos: JSON.parse(localStorage.getItem('studentAuth')).apellidos,
            pseudonimo: JSON.parse(localStorage.getItem('studentAuth')).pseudonimo,
            tieneTareas: JSON.parse(localStorage.getItem('studentAuth')).tieneTareas,
            avanceMision: JSON.parse(localStorage.getItem('studentAuth')).avanceMision,
            primerLogin: !JSON.parse(localStorage.getItem('studentAuth')).avanceMision
        };

        localStorage.clear();
        localStorage.setItem('studentAuth', JSON.stringify(AUTH));

        this.router.navigate(['/app'])
    }
}