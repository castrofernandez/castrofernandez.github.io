const getViewPortHeight = () => window.innerHeight || document.documentElement.clientHeight;

const checkLocation = ({ top, bottom }) => (top > 0 || bottom > 0) && top < getViewPortHeight();

const isInViewPort = (element) => checkLocation(element.getBoundingClientRect());

const checkOffset = (insideViewport = false, handler = () => {}) => insideViewport ? handler() : false;

const evaluate = ({ element = {}, handler = () => {} } = {}) => checkOffset(isInViewPort(element), handler);

class Observer {
    constructor() {
        this.subscribers = [];
    }

    subscribe(data = {}) {
        this.subscribers.push(data);
        evaluate(data);
    }

    onScroll() {
        Object.values(this.subscribers).forEach((subscriber) => evaluate(subscriber));
    }
}

const scrollObserver = new Observer();

export default scrollObserver;

window.addEventListener('scroll', () => scrollObserver.onScroll());
