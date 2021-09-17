import { animate, state, style, transition, trigger } from '@angular/animations';

export const Menu = trigger('Menu', [
    state('hide',
        style({
            opacity: 0,
            height: '0px',
            width: '0px'
        })
    ),
    state('show',
        style({
            opacity: 1,
            height: '*',
            width: '*'
        })
    ),
    transition('hide <=> show', animate('160ms ease-out'))
]);