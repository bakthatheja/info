import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import { ButtonControl } from "./ButtonControl";

export class ActionButton implements ComponentFramework.ReactControl<IInputs, IOutputs> {
  constructor() {
    // Empty
  }

  private $context: ComponentFramework.Context<IInputs> | any;
  private $currentValue: string;
  private $notifyOutputChanged: () => void;
  private $buttonText: string;
  private $enableByDefault: boolean;
  private $filesize: number;

  public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary): void {
    this.$context = context;
    this.$notifyOutputChanged = notifyOutputChanged;
    this.$currentValue = context.parameters.value.raw ?? "";
    this.$buttonText = context.parameters.ButtonLabel.raw ?? "Submit";
    this.$enableByDefault = context.parameters.EnableByDefault.raw == "true";
  }

  public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
    this.$context = context;
    return React.createElement(ButtonControl, {
      disabled: this.$context.page.entityId ? (this.$enableByDefault ? false : this.isControlDisabled(this.$context)) : true,
      callback: () => {
        this.$context.events.mycustomEvent(); //fireEvent("mycustomEvent");
        this.$notifyOutputChanged;
      },

      displayText: this.$buttonText,
    });
  }

  public getOutputs(): IOutputs {
    return {
      value: this.$currentValue,
    };
  }

  public destroy(): void {
    // Add code to cleanup control if necessary
  }

  private isControlDisabled(e: ComponentFramework.Context<IInputs> | any): boolean {
    return e.mode.isControlDisabled || !(e.parameters.value.security && e.parameters.value.security.editable) || e.mode.isPreview || (e.page && e.page.isPageReadOnly);
  }
}
