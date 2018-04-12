// zy.module.ts
import {NgModule} from '@angular/core'

import {ZySalaryService} from './zy-salary.service'
import {ZySheBaoService} from './zy-shebao.service'
import {ZyPercentDirective} from './zy-percent.directive'
import {ZyShowDirective} from './zy-show.directive'

@NgModule({
    // imports:[],
    exports:[
        ZyPercentDirective,
        ZyShowDirective
    ],
    declarations:[
        ZyPercentDirective,
        ZyShowDirective
    ],
    // 服务
    providers: [
        ZySalaryService,
        ZySheBaoService
    ]
})

export class ZyModule{}
