import {Action} from './Control';
import Confirm from './Confirm';

export default class Prompt extends Confirm {

    constructor(
        message: string,
        public placeholder: string,
        yesAction: Action,
        noAction: Action
    ) {
        super(message, yesAction, noAction);
    }

    protected renderContent(box: HTMLDivElement) {
        box.classList.add('modal-prompt');

        let div = document.createElement('div');
        div.className = 'modal-content';
        box.appendChild(div);

        let input = document.createElement('input');
        input.type = 'text';
        input.placeholder = this.placeholder;
        div.appendChild(input);

        input.focus();
    }

    public text(): string {
        let input = this.ele.querySelector('input');
        return input.value;
    }
}