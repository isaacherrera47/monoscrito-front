export interface TasksResponse {
    mensaje: string;
    misTareas: Map<String, Task>;
    status: string;
}

export interface Task {
    nombre: string;
    idAsignacion: number;
    nombreLectura: string;
    tiempoAsignado: number;
}

export interface Tasks {
    tarea: string;
    tareas: Task[];
}