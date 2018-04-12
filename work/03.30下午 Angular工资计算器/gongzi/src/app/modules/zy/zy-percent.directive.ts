// zy-percent.directive.ts
import {Directive} from '@angular/core'
import {NG_VALUE_ACCESSOR,DefaultValueAccessor} from '@angular/forms'

@Directive({
    selector: '[zyPercent][type=number][ngModel]',
    host: {
        '(input)': 'zyChange($event.target.value)',
        '(blur)': 'onTouched()'
    },
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: ZyPercentDirective,
        multi: true
    }]
})

// 自定义双向绑定的数据通道
export class ZyPercentDirective extends DefaultValueAccessor{
    // 数据写入模型时值缩小100倍
    public zyChange(value:number){
        this.onChange(value / 100)
    }

    // 写入视图时数值扩大100倍
    public writeValue(value: number){
        super.writeValue(value * 100)
    }
}