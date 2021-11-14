import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

const wizard = {
  name: "My wizard",
  sections: [
    {
      name: "Section 1",
      steps: [
        { name: "step 1", question: "What is your name?", type: "string" },
        { name: "step 2", question: "What is your age?", type: "number" },
        { name: "last step", question: "gender?", type: "multi", values: ["MALE", "FEMALE"] },
      ]
    },
    {
      name: "Section 2",
      steps: [
        { name: "another step", question: "What shirt size do you wear?", type: "multi", values: ["XS", "S", "M", "L", "XL", "XXL"] }
      ]
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  private stepSelectedSub = new Subject<any>();
  public stepSelectedSubObservable$ = this.stepSelectedSub.asObservable();

  constructor() { }

  public eventSelected(selectedStep: any) {
    this.stepSelectedSub.next(selectedStep);
  }

  public clickNext(currentStep: any) {
    const steps = (<any>wizard.sections).flat().map((section: any) => section.steps).flat();
    let currentStepIndex = steps.indexOf(currentStep);
    if (!steps[currentStepIndex + 1]){
      currentStepIndex = -1;
    }
      this.stepSelectedSub.next(steps[currentStepIndex + 1]);
  }

  public getWizard(): Observable<{}> {
    return of(wizard);
  }
}
