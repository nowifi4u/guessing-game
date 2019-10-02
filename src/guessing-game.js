class GuessingGame {

    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    static getMiddle(a, b){
        if ((a + b) % 2 != 0) return (a + b + 1) / 2;
        return (a + b) / 2;
    }

    getMiddle(){
        return GuessingGame.getMiddle(this.min, this.max);
    }

    guess() {
        return this.getMiddle();
    }

    lower() {
        this.max = this.getMiddle();
    }

    greater() {
        this.min = this.getMiddle();
    }
}

module.exports = GuessingGame;
