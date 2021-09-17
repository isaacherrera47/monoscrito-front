export interface Response {
    status: string;
    ejercicios: Exercise[];
    alumnos: Student[];
}

    export interface Exercise {
        id: number;
        nombre: string;
    }

    export interface Student {
        id: number;
        nombres: string;
    }

export interface Assignation {
    idMaestro: number;
    fechaEntrega: string | Date;
    idEjercicio: number;
    permitirExtemporaneas: boolean;
    idAlumnos: number[];
}

export interface AssignationResponse {
    status: string;
    mensaje: string;
}