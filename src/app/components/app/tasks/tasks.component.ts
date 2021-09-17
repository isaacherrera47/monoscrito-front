import { Component, OnInit } from "@angular/core";
import { TasksServices } from "./tasks.services";
import { Tasks } from "./tasks.interfaces";

@Component({
    selector: 'tasks-component',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
    public student: string = JSON.parse(localStorage.getItem('studentAuth')).pseudonimo;
    tasks: Tasks[] = [];

    constructor(
        private service: TasksServices
    ) {}

    ngOnInit(): void {
        this.service.getStudentTasks().subscribe(r => {
            const TASKS: Tasks[] = [];

            for (const ID in r.misTareas) {
                const TASK: Tasks = {
                    tarea: ID,
                    tareas: r.misTareas[ID]
                };

                TASKS.push(TASK);
            }

            this.tasks = TASKS;
        });
    }
}