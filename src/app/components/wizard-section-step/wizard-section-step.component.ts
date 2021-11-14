import { Component, Input } from '@angular/core';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-wizard-section-step',
  templateUrl: './wizard-section-step.component.html',
  styleUrls: ['./wizard-section-step.component.scss']
})
export class WizardSectionStepComponent {

  @Input() step: any = {};
  constructor(private stepsService: StepsService) { }

  public stepSelected(){
    this.stepsService.eventSelected(this.step);
  }

}
