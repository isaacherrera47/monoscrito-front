import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TasksServices } from '../tasks/tasks.services';
import { ExercisesServices } from "./excersise.services";

@Component({
    selector: 'excersise-component',
    templateUrl: './excersise.component.html',
    styleUrls: ['./excersise.component.scss']
})
export class ExcersiseComponent implements OnInit {
    task: Exercise = null;
    text: string = null;
    form: FormGroup = new FormGroup({
        text: new FormControl(null, [
            Validators.required
        ])
    });
    // Task
    assignedTime: number;
    // Audio player
    play: boolean = true;
    // Feedback
    feedback: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private service: TasksServices,
        private exercisesServices: ExercisesServices
    ) {}

    @ViewChild('audioPlayer') audioPlayer: ElementRef;

    ngOnInit(): void {
        this.service.getStudentTasks().subscribe(r => {
            for (let ID in r.misTareas) {
                if (ID === this.activatedRoute.snapshot.paramMap.get('id')) {
                    this.task = {
                        title: ID,
                        tasks: r.misTareas[ID]
                    };
                }
            }

            this.assignedTime = this.task.tasks[0].tiempoAsignado;
        });
    }

    selectTask(idAsignacion: number): void {
        this.task.tasks.forEach(task => {
            if (idAsignacion === task.idAsignacion) {
                this.text = task.nombreLectura;
            }
        });
    }

    audioPlayerActions(action: 'play' | 'pause' | 'load'): void {
        this.play = !this.play;

        if (action === 'play') {
            this.audioPlayer.nativeElement.play();
        } else if (action === 'pause') {
            this.audioPlayer.nativeElement.pause();
        } else if (action === 'load') {
            this.play = true;

            this.audioPlayer.nativeElement.load();
        }
    }

    sendTask(): void {
        this.exercisesServices.sendExercise(
            this.task.tasks[0].idAsignacion,
            this.form.controls['text'].value
        ).subscribe(() => {
            this.feedback = true;
        });
    }
}

interface Exercise {
    title: string;
    tasks: Task[];
}

interface Task {
    idAsignacion: number;
    nombre: string;
    nombreLectura: string;
    tiempoAsignado: number;
}