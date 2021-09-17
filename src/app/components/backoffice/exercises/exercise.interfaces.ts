export interface ResponseExercises {
    status: number;
    listaEjercicios: ListExercises[];
}

export interface ListExercises {
    creado: string | Date;
    idEjercicio: number;
    nombre: string;
    tipo: string;
    tiempo: number;
}