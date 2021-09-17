import { animate, style, transition, trigger } from '@angular/animations';

export const Loader = trigger('Loader', [
    transition(':enter', [
        style({
            opacity: 0,
            width: '0px',
            height: '0px'
        }),
        animate('0.16s',
            style({
                opacity: 1,
                width: '*',
                height: '*'
            })
        )
    ]),
    transition(':leave', [
        style({
            opacity: 1,
            width: '*',
            height: '*'
        }),
        animate('0.16s',
            style({
                opacity: 0,
                width: '0px',
                height: '0px'
            })
        )
    ])
]);