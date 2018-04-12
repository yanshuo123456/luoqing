import {Action} from './Control';
import Alert from './Alert'

export default class Confirm extends Alert {

    constructor(
        message: string,
        yesAction: Action,
        protected noAction: Action
    ) {
        super(message, yesAction);
    }

    protected renderButton() {
        let btnBox = document.querySelector('.modal-button-box');
        let separator = document.createElement('span');
        separator.className = 'modal-separator';
        btnBox.appendChild(separator);

        let actionYes = document.createElement('span');
        actionYes.innerText = Alert.yesText;
        actionYes.className = 'modal-left-button';
        btnBox.appendChild(actionYes);

        let actionNo = document.createElement('span');
        actionNo.innerText = Alert.noText;
        actionNo.className = 'modal-right-button';
        btnBox.appendChild(actionNo);

        actionYes.onclick = () => {
            this.close()
            this.yesAction()
        }
        actionNo.onclick = () => {
            this.close()
            this.noAction()
        }
    }
}