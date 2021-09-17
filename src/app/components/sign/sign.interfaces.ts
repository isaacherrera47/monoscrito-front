export interface LoginTeacher {
    idMaestro: number;
    grupo: any | null;
    avatar: 'M' | 'H';
    nombres: string;
}

export interface LoginStudent {
    idAlumno: number;
    idMaestro: number;
    nombres: string;
    apellidos: string;
    pseudonimo: string;
    tieneTareas: boolean;
    avanceMision: number;
    primerLogin: boolean;
}