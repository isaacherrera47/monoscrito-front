import { animate, style, transition, trigger } from '@angular/animations';

export const Dialog = trigger('Dialog', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('0.16s',
            style({
                opacity: 1
            })
        )
    ]),
    transition(':leave', [
        style({
            opacity: 1
        }),
        animate('0.16s',
            style({
                opacity: 0
            })
        )
    ])
]);