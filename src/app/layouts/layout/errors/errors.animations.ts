import { animate, style, transition, trigger } from '@angular/animations';

export const Errors = trigger('Errors', [
    transition(':enter', [
        style({
            overflow: 'hidden',
            height: '0px'
        }),
        animate('0.2s',
            style({
                overflow: 'visible',
                height: '*'
            })
        )
    ]),
    transition(':leave', [
        style({
            overflow: 'visible',
            height: '*'
        }),
        animate('0.2s',
            style({
                overflow: 'hidden',
                height: '0px'
            })
        )
    ])
]);