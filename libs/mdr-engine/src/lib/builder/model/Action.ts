import { Analytics } from './Analytics';

export class Action {
  actionEvent: string;
  actionParameter: any;
  actionFunction: any;

  constructor(actionEvent: string, actionParameter: any, actionFunction: any) {
    this.actionEvent = actionEvent;
    this.actionParameter = actionParameter;
    this.actionFunction = actionFunction;
  }

}