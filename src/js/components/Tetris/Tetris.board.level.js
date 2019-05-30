import { DEFAULT_CONFIG } from './Tetris.settings';

export default class Level {
    constructor(config = DEFAULT_CONFIG) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.level = 1;
        this.points = this.getConfig().initialScore;
    }

    getConfig() {
        return this.config;
    }

    addCompletedRowPoints() {
        this.increasePoints();

        if (this.isLevelComplete()) {
            this.increaseLevel();
        }
    }

    increasePoints() {
        this.points += this.getConfig().rowBonus;
    }

    isLevelComplete() {
        return this.points >= this.getConfig().fullLevelPoints;
    }

    increaseLevel() {
        this.points = 0;
        this.level = (this.level + 1) % this.getConfig().maxLevel;
    }

    getPoints() {
        return this.points;
    }

    getLevel() {
        return this.level;
    }
}
