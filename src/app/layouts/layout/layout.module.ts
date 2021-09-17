import { NgModule } from "@angular/core";
import { ErrorsLayoutModule } from './errors/errors.module';
import { FeedbackModule } from "./feedback/feedback.module";

@NgModule({
    imports: [
        ErrorsLayoutModule,
        FeedbackModule
    ],
    exports: [
        ErrorsLayoutModule,
        FeedbackModule
    ]
})
export class LayoutModule {}