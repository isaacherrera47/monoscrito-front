import { animate, animateChild, query, stagger, style, transition, trigger } from '@angular/animations';

export const Item = trigger('Item', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'scale(0.5)'
        }),
        animate('0.16s',
            style({
                opacity: 1,
                transform: 'scale(1)'
            })
        )
    ])
]);

export const Container = trigger('Container', [
    transition(':enter', [
        query('@Item', stagger(160, animateChild()))
    ])
]);