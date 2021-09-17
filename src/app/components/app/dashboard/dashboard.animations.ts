import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const BOUNCE = trigger('bounce', [
    state('initial', style([])),
    state('active', style([])),
    transition('* => active', [
        animate('0.64s', keyframes([
            style({transform: 'scale(1,1) translateY(0)'}),
            style({transform: 'scale(1.1, 0.9) translateY(0)'}),
            style({transform: 'scale(0.9, 1.1) translateY(-50px)'}),
            style({transform: 'scale(1.05, 0.95) translateY(0)'}),
            style({transform: 'scale(1,1) translateY(-7px)'}),
            style({transform: 'scale(1,1) translateY(0)'})
        ]))
    ])
]);