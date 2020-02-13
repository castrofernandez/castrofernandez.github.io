class Line {
    constructor(words = []) {
        this.words = words;
    }

    push(word) {
        this.words.push(word);
    }

    fits(word, length) {
        return new Line([...this.words, word]).length <= length;
    }

    get length() {
        return this.words.reduce((sum, w) => sum + w.length, this.words.length - 1);
    }

    toString() {
        return this.words.join(' ');
    }
}

class Lines {
    constructor(maxLength) {
        this.lines = [new Line()];
        this.maxLength = maxLength;
    }

    push(word) {
        return this.current.fits(word, this.maxLength)
            ? this.current.push(word)
            : this.lines.push(new Line([word]));
    }

    get current() {
        return this.lines[this.index];
    }

    get length() {
        return this.lines.length;
    }

    get index() {
        return this.length - 1;
    }

    toArray() {
        return this.lines.map((line) => line.toString());
    }
}

const split = (text, maxLength = 40) => {
    const lines = new Lines(maxLength);

    text.trim().split(' ').forEach((word) => lines.push(word));

    return lines.toArray();
};

export default split;
