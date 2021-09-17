import { NgModule } from "@angular/core";
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        MatRippleModule,
        MatSnackBarModule,
        MatCheckboxModule,
        MatDialogModule
    ],
    exports: [
        MatRippleModule,
        MatSnackBarModule,
        MatCheckboxModule,
        MatDialogModule
    ]
})
export class MaterialModule { }