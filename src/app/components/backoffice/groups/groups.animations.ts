import { animate, animateChild, query, stagger, style, transition, trigger } from '@angular/animations';

export const Input = trigger('Input', [
    transition(':enter', [
        style({
            overflow: 'hidden',
            opacity: 0,
            height: '0px'
        }),
        animate('0.16s',
            style({
                opacity: 1,
                height: '*'
            })
        )
    ])
]);

export const ContainerInput = trigger('ContainerInput', [
    transition(':enter', [
        query('@Input', stagger(160, animateChild()))
    ])
]);