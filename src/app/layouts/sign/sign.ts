import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from '@angular/router';
import { ROUTES } from "src/app/routing/routes.routing";
import { filter } from 'rxjs/operators';

@Component({
    selector: 'sign-layout',
    templateUrl: './sign.html',
    styleUrls: ['./sign.scss']
})
export class SignLayout implements OnInit {
    signRoute: string;
    url: string;

    constructor(
        private router: Router
    ) {
        this.router.events.pipe(
            filter(ev => ev instanceof NavigationEnd)
        ).subscribe((ev: NavigationEnd) => {
            this.url = ev.url;
        });
    }

    ngOnInit(): void {
        this.signRoute = this.url === '/iniciar-sesion' ? `/${ ROUTES.sign.up }` : `/${ ROUTES.sign.in }`;
    }
}