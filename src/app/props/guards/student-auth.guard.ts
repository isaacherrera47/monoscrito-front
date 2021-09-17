import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class StudentAuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) {}

    canActivate(): boolean {
        if (localStorage.getItem('studentAuth')) {
            return true;
        } else {
            this.router.navigate(['/iniciar-sesion']);
            return false;
        }
    }
}