const getViewPortHeight = () => window.innerHeight || document.documentElement.clientHeight;

const checkLocation = ({ top, bottom }) => (top > 0 || bottom > 0) && top < getViewPortHeight();

const getRect = (element) => element.getBoundingClientRect();

const getData = ({ top, bottom }) => ({ top, bottom });

const isInViewPort = (element = {}) => checkLocation(getRect(element));

const getDirection = (previousPosition) => previousPosition - window.scrollY >= 0 ? 'UP' : 'DOWN';

const getElementData = (el, previousPos) => ({ ...getData(getRect(el)), direction: getDirection(previousPos) });

class Observed {
    constructor({ element, inViewPortHandler = () => {}, outOfViewPortHandler } = {}) {
        this.element = element;
        this.inViewPortHandler = inViewPortHandler;

        this.mustHandleOut = !!outOfViewPortHandler;
        this.outOfViewPortHandler = outOfViewPortHandler || (() => {});

        this.inViewPort = false;
        this.seen = false;
        this.hidden = false;
    }

    evaluate(previosScrollPosition = 0) {
        this.doEvaluate(isInViewPort(this.element), previosScrollPosition);
    }

    doEvaluate(currentStatus, previosScrollPosition) {
        this.check(currentStatus, previosScrollPosition);
        this.update(currentStatus);
    }

    update(currentStatus) {
        this.seen = this.seen || currentStatus;
        this.hidden = this.hidden || (this.seen && !currentStatus);
        this.inViewPort = currentStatus;
    }

    check(currentStatus, previosScrollPosition) {
        return this.checkEntering(currentStatus, previosScrollPosition) ||
            this.checkLeaving(currentStatus, previosScrollPosition);
    }

    checkEntering(currentStatus, previosScrollPosition) {
        return currentStatus && !this.inViewPort ? this.isEnteringInViewPort(previosScrollPosition) : false;
    }

    checkLeaving(currentStatus, previosScrollPosition) {
        return !currentStatus && this.inViewPort ? this.isLeavingViewPort(previosScrollPosition) : false;
    }

    isEnteringInViewPort(previosScrollPosition) {
        this.inViewPortHandler(this.getElementData(previosScrollPosition));
        return true;
    }

    isLeavingViewPort(previosScrollPosition) {
        this.outOfViewPortHandler(this.getElementData(previosScrollPosition));
        return true;
    }

    getElementData(previosScrollPosition) {
        return getElementData(this.element, previosScrollPosition);
    }

    get hasBeenSeen() {
        return this.seen;
    }

    get hasBeenHidden() {
        return this.hidden;
    }

    get hasBeenSeenAndHidden() {
        return this.hasBeenSeen && this.hasBeenHidden;
    }
}

class Observer {
    constructor() {
        this.subscribers = [];
        this.previousScrollPosition = 0;
    }

    subscribe(data = {}) {
        const obs = new Observed(data);
        this.subscribers.push(obs);
        obs.evaluate(this.previousScrollPosition);
    }

    evaluate() {
        this.subscribers.forEach((subscriber) => subscriber.evaluate());
    }

    onScroll() {
        this.evaluate();
        this.previousScrollPosition = window.scrollY;
    }
}

const scrollObserver = new Observer();

export default scrollObserver;

window.addEventListener('scroll', () => scrollObserver.onScroll());
