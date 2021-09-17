import { ROUTES } from "./routes.routing";

export interface Nav {
    title: string;
    url: string;
}

export const NAV_ROUTING: Nav[] = [
    {
        title: 'Grupos',
        url: `/`
    },
    {
        title: 'Ejercicios',
        url: `/${ ROUTES.backoffice.exercises }`
    },
    {
        title: 'Asignaciones',
        url: `/${ ROUTES.backoffice.assignments }`
    },
    {
        title: 'Entregas',
        url: `/${ ROUTES.backoffice.deliveries }`
    }
];