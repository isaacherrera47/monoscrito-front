import { Component, HostListener, OnInit } from "@angular/core";
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Nav, NAV_ROUTING } from "../../routing/nav.routing";
import { Menu } from "./backoffice.animation";

@Component({
    selector: 'backoffice-layout',
    templateUrl: './backoffice.html',
    styleUrls: ['./backoffice.scss'],
    animations: [
        Menu
    ]
})
export class BackofficeLayout implements OnInit {
    nav: Nav[] = NAV_ROUTING;
    url: string;
    width: number;
    menuStatus: boolean;
    // User Data
    teacher: 'M' | 'H' = JSON.parse(localStorage.getItem('auth')).avatar;
    teacherType: string = JSON.parse(localStorage.getItem('auth')).avatar === 'H' ? 'Maestro' : JSON.parse(localStorage.getItem('auth')).avatar === 'M' ? 'Maestra' : '';
    teacherName: string = JSON.parse(localStorage.getItem('auth')).nombres;

    constructor(
        private router: Router
    ) {
        this.router.events.pipe(
            filter(ev => ev instanceof NavigationEnd)
        ).subscribe((ev: NavigationEnd) => {
            this.url = ev.url;
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.width = window.innerWidth;
        this.menuStatus = window.innerWidth > 1400 ? true : false;
    }

    ngOnInit(): void {
        this.menuStatus = window.innerWidth > 1400 ? true : false;
        this.width = window.innerWidth;
    }

    activeMenu(): void {
        this.menuStatus = !this.menuStatus;
    }

    signout(): void {
        localStorage.clear();
        this.router.navigate(['/iniciar-sesion']);
    }
}