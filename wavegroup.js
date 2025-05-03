import { Wave } from './wave.js';

export class WaveGroup {
    constructor () {        
        this.totalPoints = 6;

        this.colors = ['rgba(213, 24, 26, 0.9)', 'rgba(1, 95, 255, 0.6)', 'rgba(245, 169, 46, 1)'];
        this.waves = [];

        for (var i = 0; i < this.colors.length; ++i) {
            const wave = new Wave(
                i,
                this.colors[i],
                this.totalPoints
            );
            this.waves[i] = wave;
        }
    }

    resize (stageWidth, stageHeight) {
        this.waves.forEach(wave => {
            wave.resize(stageWidth, stageHeight);
        })
    }

    draw (ctx) {
        this.waves.forEach(wave => {
            wave.draw(ctx);
        })
    }
}