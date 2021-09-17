import { Component, Input } from "@angular/core";
import { Errors } from "./errors.animations";

@Component({
    selector: 'errors',
    templateUrl: './errors.layout.html',
    styleUrls: ['./errors.layout.scss'],
    animations: [
        Errors
    ]
})
export class ErrorsLayout {
    @Input() message: string;
}