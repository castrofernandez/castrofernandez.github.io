class Typer {
    constructor({ text = '', speed = 100, handler = () => {} }) {
        this.speed = speed;
        this.handler = handler;

        this.toType = text.split('');
        this.typed = [];

        this.animate();
    }

    animate() {
        return this.toType.length > 0 ? this.type() : false;
    }

    type() {
        setTimeout(() => {
            this.typed.push(this.toType.shift());
            this.notify();
            this.animate();
        }, this.speed);
    }

    notify() {
        this.handler({
            text: this.typed.join(''),
            finished: this.toType.length === 0
        });
    }
}

export default Typer;
