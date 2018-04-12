module Zhiyou {
    /**
     * Minute分针
     */
    export class Minute extends Second {

        constructor(color: string = 'black') {
            super(color);
        }

        public calcArgs(): CalcArgs {
            let args: CalcArgs = {};

            args.duration = 3600;
            args.zIndex = '8';

            let time = new Date();
            let s = time.getSeconds() * -1;
            let m = time.getMinutes() * -1;
            args.delay = (m * 60) - (15 * 60) + s;

            return args;
        }

        public calcLayoutArgs(): RadiusWidthHeight {

            let radius = Minute.radius * 0.8;
            let width = radius * 1.12;
            let height = radius * 0.03;

            return [radius,width,height];
        }
    }
}