import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ZySheBaoService, ISheBao } from '../../modules/zy/zy-shebao.service';

@Component({
    selector: 'zy-setup',
    templateUrl: './setup.component.html'
})
export class SetupComponent implements OnInit {

    public settings: ISheBao;

    //EventEmitter向父组件发射事件。
    @Output() public change = new EventEmitter<any>();

    constructor(private shebaoService: ZySheBaoService) { }

    public ngOnInit() {
        this.settings = this.shebaoService.rate;
    }

    /**
     * 社保改变后通知服务修改默认社保值
     */
    public settingChanged() {
        this.change.emit();
    }
}