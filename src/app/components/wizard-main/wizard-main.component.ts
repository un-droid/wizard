import { Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { StepsService } from 'src/app/services/steps.service';
import { WizardSectionStepItemComponent } from '../wizard-section-step-item/wizard-section-step-item.component';

@Component({
  selector: 'app-wizard-main',
  templateUrl: './wizard-main.component.html',
  styleUrls: ['./wizard-main.component.scss']
})
export class WizardMainComponent implements OnInit, OnDestroy {

  public wizard: any = {};
  @ViewChildren("inputChild") inputChildren!: QueryList<WizardSectionStepItemComponent>;
  private subscription: Subscription = new Subscription();
  private wizardSubcription: Subscription = new Subscription();
  
  constructor(private stepsService: StepsService) { }

  ngOnDestroy(): void {
    if(this.wizardSubcription){
      this.wizardSubcription.unsubscribe();
    }

    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.wizardSubcription = this.stepsService.getWizard().subscribe(wizard =>{
      this.wizard = wizard;
    });

    this.subscription = this.stepsService.stepSelectedSubObservable$.subscribe(newStepSelected => {
      const result = this.inputChildren.toArray();
      result.forEach((stepChild: any) => {
        if(stepChild.step.name === newStepSelected.name){
          stepChild.visible = true;
        }else{
          stepChild.visible = false;
        }
      });
    })

  }

}
