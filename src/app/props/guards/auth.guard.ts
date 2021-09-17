import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) {}

    canActivate(): boolean {
        if (localStorage.getItem('auth')) {
            return true;
        } else if (localStorage.getItem('studentAuth')) {
            this.router.navigate(['/app']);
            return false;
        } else {
            this.router.navigate(['/iniciar-sesion']);
            return false;
        }
    }
}