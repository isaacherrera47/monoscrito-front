import { animate, style, transition, trigger } from '@angular/animations';

export const Feedback = trigger('Feedback', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'scale(0.25)'
        }),
        animate('0.32s ease-out',
            style({
                opacity: 1,
                transform: 'scale(1)'
            })
        )
    ])
]);