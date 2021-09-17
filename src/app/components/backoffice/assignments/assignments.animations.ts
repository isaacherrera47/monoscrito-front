import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const LoaderInit = trigger('LoaderInit', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'scale(0)'
        }),
        animate('0.16s',
            style({
                opacity: 1,
                transform: 'scale(1)'
            })
        )
    ]),
    transition(':leave', [
        style({
            opacity: 1,
            transform: 'scale(1)'
        }),
        animate('0.16s',
            style({
                opacity: 0,
                transform: 'scale(0)'
            })
        )
    ])
]);

export const Content = trigger('Content', [
    transition(':enter', [
        style({
            opacity: 0,
            height: '0px'
        }),
        animate('0.32s',
            style({
                opacity: 1,
                height: '*'
            })
        )
    ])
]);