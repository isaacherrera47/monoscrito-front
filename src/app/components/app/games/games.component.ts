import { Component } from "@angular/core";

@Component({
    selector: 'games-component',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent {
    student: string = JSON.parse(localStorage.getItem('studentAuth')).pseudonimo;
}