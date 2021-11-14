import { Component, Input } from '@angular/core';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-wizard-section',
  templateUrl: './wizard-section.component.html',
  styleUrls: ['./wizard-section.component.scss']
})
export class WizardSectionComponent {
  
  @Input() section: any = {};
  constructor(private stepsService: StepsService) { }

  public sectionSelected(){
    this.stepsService.eventSelected(this.section.steps[0]);
  }

}
