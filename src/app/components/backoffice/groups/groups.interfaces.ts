export interface CreateGroup {
    idMaestro: number;
    nombre: string;
    alumnos: Students[];
}

    export interface Students {
        nombres: string;
        apellidos: string;
        pseudonimo: string;
        password: string;
    }

export interface FormGroupInterface {
    name: string;
    lastname: string;
    nick: string;
    password: string;
}

export interface GetGroup {
    alumnos: GetStudents[];
    nombre: string;
    status: string;
}

    export interface GetStudents {
        apellidos: string;
        avatar: string | null;
        id: number;
        nombres: string;
        password: string;
        pseudonimo: string;
    }