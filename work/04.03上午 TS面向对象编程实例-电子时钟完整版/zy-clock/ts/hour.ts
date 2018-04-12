/// <reference path="second.ts" />
module Zhiyou {
    /**
     * Hour时针
     */
    export class Hour extends Second {

        constructor( color: string = 'black') {
            super(color);
        }

        public calcArgs(): CalcArgs {
            let args: CalcArgs = {};

            args.duration = 43200;
            args.zIndex = '8';

            let time = new Date();
            let s = time.getSeconds() * -1;
            let m = time.getMinutes() * -1;
            let h = time.getHours();
            h = h > 12 ? h - 12 : h;
            h = h * -1;
            args.delay = (h * 60 * 60) - (3 * 60 * 60) + (m * 60) + s

            return args;
        }

        public calcLayoutArgs(): RadiusWidthHeight {

            let radius = Hour.radius * 0.6;
            let width = radius * 1.13;
            let height = radius * 0.05;

            return [radius,width,height];
        }
    }
}