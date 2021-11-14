import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WizardMainComponent } from './components/wizard-main/wizard-main.component';
import { WizardSectionComponent } from './components/wizard-section/wizard-section.component';
import { WizardSectionStepComponent } from './components/wizard-section-step/wizard-section-step.component';
import { WizardSectionStepItemComponent } from './components/wizard-section-step-item/wizard-section-step-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardMainComponent,
    WizardSectionComponent,
    WizardSectionStepComponent,
    WizardSectionStepItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
