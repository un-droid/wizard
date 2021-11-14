import { AfterContentInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-wizard-section-step-item',
  templateUrl: './wizard-section-step-item.component.html',
  styleUrls: ['./wizard-section-step-item.component.scss'],
})
export class WizardSectionStepItemComponent implements AfterContentInit {

  @Input() step: any = {};
  public visible: boolean = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2, private stepsService: StepsService) { }

  ngAfterContentInit(): void {
    switch (this.step.type) {
      case "string":
      case "number":
        this._generateTextInputs();
        break;
        case "multi":
          this._generateSelect();
          break;
      default:
        break;
    }
  }

  private _generateTextInputs() {
    const inputContainer = this.elementRef.nativeElement.querySelector("#input-container");
    const input = this.renderer.createElement(`input`);

    this.renderer.setProperty(input, "type", this.step.type);

    this.renderer.appendChild(inputContainer, input);
  }

  private _generateSelect() {
    //create a select block
    const inputContainer = this.elementRef.nativeElement.querySelector("#input-container");
    const select = this.renderer.createElement(`select`);

    this.renderer.setProperty(select, "id", "select_" + this.step.name);
    this.renderer.appendChild(inputContainer, select);

      this.step.values.forEach((selectOption: string) => {
        const option = this.renderer.createElement("option");

        this.renderer.setProperty(option, "value", selectOption);
        this.renderer.setProperty(option, "innerText", selectOption);

        this.renderer.appendChild(select, option);

      });
  }

  public nextStep(){
    this.stepsService.clickNext(this.step);
  }

}

