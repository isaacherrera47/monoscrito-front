import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modules
import { AppRoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './props/material/material.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// Layouts
import { AppComponent } from './app.component';
import { SignLayout } from './layouts/sign/sign';
import { BackofficeLayout } from './layouts/backoffice/backoffice';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// Dialogs
import { DialogExercise4 } from './components/backoffice/exercises/exercises/exercise-4/dialog/dialog';
import { LayoutModule } from './layouts/layout/layout.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        SignLayout,
        BackofficeLayout,
        DialogExercise4
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        ReactiveFormsModule.withConfig({
            warnOnNgModelWithFormControl: 'never'
        }),
        LayoutModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}