import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from "./animations";

@Component({
    selector: 'feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss'],
    animations: [
        Feedback
    ]
})
export class FeedbackComponent {
    constructor(private router: Router) {}

    @Input() message: number;

    feedbackRedirect(): void {
        this.router.navigate(['/app']);
    }
}